from django.shortcuts import render
from rest_framework import generics, permissions
from django.contrib.auth.models import User

# from .permissions import IsOwnerOrReadOnly
from .models import Listing
from .serializers import ListingSerializer

class ListingHome(generics.ListAPIView):
    """
    Displays all Listings
    """
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

class CreateListing(generics.CreateAPIView):
    """
    Create a Listing
    """
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

class ListingDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, Update, or Delete a Listing
    """
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
