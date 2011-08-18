from django.conf.urls.defaults import patterns, include, url

urlpatterns = patterns('coffeefinder.views',
    url(r'^coffeeshops/$', 'index'),
    url(r'^coffeeshops/add/$', 'add'),
)
urlpatterns += patterns('',
    url(r'^static/(?P<path>.*)$', 
        'django.views.static.serve',
        {'document_root': '/home/svankie/vivalasleepdeprivation/static/'}),
)
