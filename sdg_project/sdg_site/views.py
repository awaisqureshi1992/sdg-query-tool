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

    if request.method == 'POST':
        gls = request.POST.get("dropdown_goal")
        gls = gls.replace('"', "")
        ind = starter.indicator(gls)
        return render(request, 'sdg_site/home.html', {'goallist': gls, 'indicatorlist': ind, 'n': 2})

    if request.method == 'POST' and 'indicatorlist' in request.POST:
        gls = "test"
        ind = "test"
        return render(request, 'sdg_site/home.html', {'goallist': gls, 'indicatorlist': ind, 'n': 3})
