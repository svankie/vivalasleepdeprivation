# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.template import Context, loader, RequestContext

from coffeefinder.models import CoffeeShop


def index(request):
    coffee_shops = CoffeeShop.objects.all()
    sleek_template = loader.get_template('coffeefinder/index.html')
    context = RequestContext(request, {"coffee_shops": coffee_shops})
    return HttpResponse(sleek_template.render(context))

def add(request):
    import ipdb; ipdb.set_trace()
    values = request.POST
    return HttpResponse("Bummer.")
