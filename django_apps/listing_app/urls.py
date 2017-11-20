from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from django.views import generic
from . import views

urlpatterns = [
	url(r'^$', generic.TemplateView.as_view(template_name='listing.html')),
	url(r'^create/$', generic.TemplateView.as_view(template_name='create.html')),
	url(r'^item/$', generic.TemplateView.as_view(template_name='listing.html')),
	url(r'^api/$', views.ListingHome.as_view()),
    url(r'^api/(?P<pk>[0-9]+)/$', views.ListingDetail.as_view()),
    url(r'^api/create/$', views.CreateListing.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
