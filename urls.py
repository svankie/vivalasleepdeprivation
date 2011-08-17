from django.conf.urls.defaults import patterns, include, url

urlpatterns = patterns('coffeefinder.views',
    url(r'^coffeeshops/$', 'index'),
    url(r'^coffeeshops/(?P<coffeeshop_id>\d+)/$', 'detail'),
)
