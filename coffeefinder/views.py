# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.template import Context, loader

from coffeefinder.models import CoffeeShop


def index(request):
    coffee_shops = CoffeeShop.objects.all()
    sleek_template = loader.get_template('coffeefinder/index.html')
    context = Context({"coffee_shops": coffee_shops})
    return HttpResponse(sleek_template.render(context))


def detail(request, coffeeshop_id):
    return HttpResponse("Ayyyyyyyyyy!")
