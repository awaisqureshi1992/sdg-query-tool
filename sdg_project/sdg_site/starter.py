import pandas
import requests

def goal():

    url = "https://unstats.un.org/SDGAPI/v1/sdg/Goal/List"
    response = requests.get(url)
    norm = pandas.json_normalize(response.json())
    norm["key"] = norm["code"] + "|" + norm["title"]
    gls = norm[["title", "key"]]

    return(gls)


def indicator(goal):
    goal_code = goal.split('|')[0]
    goal = goal.split('|')[1]
    url = "https://unstats.un.org/SDGAPI/v1/sdg/Indicator/List"
    response = requests.get(url)
    norm = pandas.json_normalize(response.json())
    indicator = norm.loc[norm["goal"] == str(goal_code)]
    indicator["key"] = indicator["code"] + "|" + indicator["description"]
    indicator = indicator[["description", "key"]]
    return(indicator, goal)


def datatable(indicator, goal):
    ind = indicator.split('|')[0]
    indicatorlist = indicator.split('|')[1]
    size = 100
    url = "https://unstats.un.org/SDGAPI/v1/sdg/Indicator/Data?indicator=" + \
        str(ind) + "&pageSize=" + str(size)
    response = requests.get(url)
    norm = pandas.json_normalize(response.json()["data"])
    norm = norm[["geoAreaCode", "geoAreaName",
                 "timePeriodStart", "value", "valueType", "source"]]
    return(norm, indicatorlist, goal)


# indicator("End poverty in all its forms everywhere")
# print(indicator("1|End poverty in all its forms everywhere")[1])
