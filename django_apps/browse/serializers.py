from rest_framework.serializers import ModelSerializer, HyperlinkedIdentityField
from django_apps.listing_app.models import Listing


post_detail_url = HyperlinkedIdentityField(
		view_name='browse:detail-api',
		lookup_field='pk'
		)

class ListingSerializer(ModelSerializer):
	url = post_detail_url
	class Meta:
		model = Listing
		fields = [
				'url',
				'item_name',
				'item_image',
				'category',
				]

class ListingDetailSerializer(ModelSerializer):
	class Meta:
		model = Listing
		fields ='__all__'
