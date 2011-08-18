# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.template import loader, RequestContext
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt

from coffeefinder.models import CoffeeShop


def index(request):
    coffee_shops = CoffeeShop.objects.all()
    sleek_template = loader.get_template('coffeefinder/index.html')
    context = RequestContext(request, {"coffee_shops": coffee_shops})
    return HttpResponse(sleek_template.render(context))


@csrf_exempt
def add(request):
    bkeys = (u'wifi', u'plugs', u'plastic', u'berserk_mode')
    obj = dict(request.POST.items())
    for attr, value in obj.items():
        if attr in bkeys:
            obj[attr] = bool(value)
    cs = CoffeeShop(**obj)
    cs.save()
    return redirect('index') #XXX: ViewDoesNotExist. WTF.
