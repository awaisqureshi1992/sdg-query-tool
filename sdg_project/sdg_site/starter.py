import pandas
import requests

def goal():

    url_g = "https://unstats.un.org/SDGAPI/v1/sdg/Goal/List"
    response_g = requests.get(url_g)
    norm_g = pandas.json_normalize(response_g.json())
    norm_g["goal_code"] = norm_g["code"]

    norm_g = norm_g[["goal_code", "title"]]
    gls = norm_g[["title"]]

    return(gls)


def indicator(goal):

    url_g = "https://unstats.un.org/SDGAPI/v1/sdg/Goal/List"
    response_g = requests.get(url_g)
    norm = pandas.json_normalize(response_g.json())
    code = norm.loc[norm["title"] == goal]["code"]
    x = (str(code[0]))
    url = "https://unstats.un.org/SDGAPI/v1/sdg/Indicator/List"
    response = requests.get(url)
    norm = pandas.json_normalize(response.json())
    indicator = norm.loc[norm["goal"] == x]["description"]

    return(indicator)


def datatable(indicator):
    url = "https://unstats.un.org/SDGAPI/v1/sdg/Indicator/List"
    response = requests.get(url)
    norm = pandas.json_normalize(response.json())
    indicator = norm.loc[norm["description"] == indicator]["code"]
    size=100
    for i in indicator:
        ind=i
    url = "https://unstats.un.org/SDGAPI/v1/sdg/Indicator/Data?indicator=" + str(ind) + "&pageSize=" + str(size)
    response = requests.get(url)
    norm = pandas.json_normalize(response.json()["data"])
    norm = norm [["geoAreaCode","geoAreaName","timePeriodStart","value","valueType","source"]]
    return(norm)