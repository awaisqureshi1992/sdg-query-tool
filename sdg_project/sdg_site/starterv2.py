import pandas
import requests

url_g = "https://unstats.un.org/SDGAPI/v1/sdg/Goal/List"
response_g = requests.get(url_g)
norm_g = pandas.json_normalize(response_g.json())
norm_g["goal_code"] = norm_g["code"]

norm_g = norm_g[["goal_code", "title"]]
gls = norm_g[["title"]]



url_i = "https://unstats.un.org/SDGAPI/v1/sdg/Indicator/List"
response_i = requests.get(url_i)
norm_i = pandas.json_normalize(response_i.json())

norm_i["key"] = norm_i["code"] + '|' + norm_i["description"]
norm_i["goal_code"] = norm_i["goal"]
norm_i = norm_i[["goal_code", "key"]]

result = pandas.merge(norm_i, norm_g, how="left", on=["goal_code"])
result = result[["title", "key"]]

result = result.groupby('title')['key'].apply(
    list).reset_index(name='indicator')

ls = []
for index, row in result.iterrows():
    val = '"'+row['title'] + '" : ['+"'" + "', '".join(row['indicator']) + "'],"
    ls.append(val)
    print(val)

x=""
x=x.join(ls)


# for i in gls.values:
#     print('<option>'+i+'</option>')