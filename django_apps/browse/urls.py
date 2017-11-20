from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from .views import (
		ListingListAPIView,
		ListingDetailAPIView,
		ListingDeleteAPIView,
		ListingUpdateAPIView,
		)
from django.views.generic import TemplateView

urlpatterns = [
	url(r'^$', TemplateView.as_view(template_name='browse.html'), name='list'),
	url(r'^api/$', ListingListAPIView.as_view(), name='browse-api'),
	url(r'^api/(?P<pk>\d+)/$', ListingDetailAPIView.as_view(), name='detail-api'),
	url(r'^api/(?P<pk>\d+)/delete/$', ListingDeleteAPIView.as_view(), name='delete-api'),
	url(r'^api/(?P<pk>\d+)/edit/$', ListingUpdateAPIView.as_view(), name='edit-api'),
	]
urlpatterns = format_suffix_patterns(urlpatterns)
