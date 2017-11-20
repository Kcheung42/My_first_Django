from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'

    # def create(self, validated_data):
    #     """
    #     Create and return a new 'Listing' instance, given the validated data.
    #     """
    #     return Listing.objects.create(**validated_data)
    #
    def update(self, instance, validated_data):
        """
        Update and return an existing 'Listing' instance, given the validated data.
        """
        instance.item_name = validated_data.get('item_name', instance.item_name)
        instance.item_image = validated_data.get('item_image', instance.item_image)
        instance.item_description = validated_data.get('item_description', instance.item_description)
        instance.daily_price_in_dollars = validated_data.get('daily_price_in_dollars', instance.daily_price_in_dollars)
        instance.save()
        return instance
