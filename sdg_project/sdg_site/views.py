from django.shortcuts import render
from . import starter
import pandas
import requests
# Create your views here.


def index(request):
    return render(request, 'sdg_site/index.html')


def home(request):
    if request.method == 'GET':
        gls = starter.goal()
        return render(request, 'sdg_site/home.html', {'goallist': gls, 'n': 1})

    if request.method == 'POST' and 'goal' in request.POST:
        gls = request.POST.get("dropdown_goal")
        gls = gls.replace('"', "")
        ind = starter.indicator(gls)
        return render(request, 'sdg_site/home.html', {'goallist': gls, 'indicatorlist': ind, 'n': 2})

    if request.method == 'POST' and 'indicator' in request.POST:
        gls = request.POST.get("dropdown_goal")
        ind = request.POST.get("dropdown_indicator")
        ind = ind.replace('"', "")
        df=starter.datatable(ind)
        return render(request, 'sdg_site/tables.html', {'df': df})


def tables(request):
    return render(request, 'sdg_site/tables.html')
