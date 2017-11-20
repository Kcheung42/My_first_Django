# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework.generics import (
		ListAPIView,
		RetrieveAPIView,
		DestroyAPIView,
		UpdateAPIView,
	)

from rest_framework.filters import(
		SearchFilter,
		OrderingFilter,
		)

from rest_framework.pagination import(
		LimitOffsetPagination,
		PageNumberPagination,
		)

from django_apps.listing_app.models import Listing
from .serializers import ListingSerializer, ListingDetailSerializer
from django.db.models import Q

# Create your views here.

class ListingListAPIView(ListAPIView):
	"""Docstring for ListingListAPIView. """
	serializer_class = ListingSerializer
	lookup_field = 'pk'
	filter_backends = [SearchFilter, OrderingFilter]
	search_fields = ['item_name', 'category']
	# pagination_class = PageNumberPagination
	# pagination_class = LimitOffsetPagination

	def get_queryset(self, *args, **kwargs):
		queryset_list = Listing.objects.all()
		query = self.request.GET.get("q")
		if query:
			queryset_list = queryset_list.filter(
					Q(item_name__icontains=query)|
					Q(category__icontains=query)
				).distinct()
		return queryset_list

class ListingDetailAPIView(RetrieveAPIView):
	"""Docstring for ListingDetailAPIView. """
	queryset = Listing.objects.all()
	serializer_class = ListingDetailSerializer
	lookup_field = 'pk'

class ListingDeleteAPIView(DestroyAPIView):
	queryset = Listing.objects.all()
	serializer_class = ListingDetailSerializer
	loockup_field = 'pk'

class ListingUpdateAPIView(UpdateAPIView):
	queryset = Listing.objects.all()
	serializer_class = ListingDetailSerializer
	loockup_field = 'pk'

