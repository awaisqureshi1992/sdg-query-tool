from django.shortcuts import render
from . import starter
# Create your views here.


def index(request):
    return render(request, 'sdg_site/index.html')


def home(request):
    if request.method == 'GET':
        gls = starter.goal()
        return render(request, 'sdg_site/home.html', {'goallist': gls, 'n': 1})

    if request.method == 'POST' and 'goal' in request.POST:
        gls = request.POST.get("dropdown_goal")
        result = starter.indicator(gls)
        ind = result[0]
        gls = result[1]
        return render(request, 'sdg_site/home.html', {'goallist': gls, 'indicatorlist': ind, 'n': 2})

    if request.method == 'POST' and 'indicator' in request.POST:
        gls = request.POST.get("dropdown_goal")
        ind = request.POST.get("dropdown_indicator")
        result = starter.datatable(ind, gls)
        df = result[0]
        ind = result[1]
        gls = result[2]
        return render(request, 'sdg_site/tables.html', {'df': df, 'indicatorlist': ind, 'goallist': gls})


def tables(request):
    return render(request, 'sdg_site/tables.html')
