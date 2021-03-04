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




        # url_i = "https://unstats.un.org/SDGAPI/v1/sdg/Indicator/List"
 #    response_i = requests.get(url_i)
 #    norm_i = pandas.json_normalize(response_i.json())

 #    norm_i["key"] = norm_i["code"] + '|' + norm_i["description"]
 #    norm_i["goal_code"] = norm_i["goal"]
 #    norm_i = norm_i[["goal_code", "key"]]

 #    result = pandas.merge(norm_i, norm_g, how="left", on=["goal_code"])
 #    result = result[["title", "key"]]

 #    result = result.groupby('title')['key'].apply(
 #        list).reset_index(name='indicator')


 #    ls = []
 #    for index, row in result.iterrows():
 #        val = row['title'] + " : ['" + "', '".join(row['indicator']) + "'],"
 #        ls.append(val)
indicator("End poverty in all its forms everywhere")
