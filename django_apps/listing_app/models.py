from django.db import models
import datetime
from django.db.models.signals import pre_save
# Create your models here.

class Listing(models.Model):
	# owner = models.ForeignKey('auth.User', related_name='items', on_delete=models.CASCADE)
	created = models.DateTimeField(default=datetime.datetime.now())
	item_name = models.CharField(max_length=100,)
	item_image = models.CharField(max_length=300, blank=True)
	item_description = models.TextField(max_length=1000, blank=True)
	daily_price_in_dollars = models.PositiveSmallIntegerField(default=0)
	special_time_span_one = models.PositiveSmallIntegerField(default=0)
	special_time_span_two = models.PositiveSmallIntegerField(default=0)
	special_discount_percentage_one = models.PositiveSmallIntegerField(default=0)
	special_discount_percentage_two = models.PositiveSmallIntegerField(default=0)
	category = models.CharField(max_length=100, blank=True)
	# slug = models.SlugField(unique=False)
    #
	# def create_slug(instance, new_slug=None):
	# 	slug = slugify(instance.item_name)
	# 	if new_slug is not None:
	# 		slug = new_slug
	# 	qs = Post.objects.filter(slug=slug)
	# 	exits = qs.exists()
	# 	if exists:
	# 		slug = "%s-%s" %(slug, qs.first().id)
	# 	return slug
    #
	# def pre_save_post_receiver(sender, instance, *args, **kwargs):
	# 	if not instance.slug:
	# 		instance.slug = create_slug(instance)
