from django.contrib import admin
from .models import Listing
# Register your models here.

class ListingAdmin(admin.ModelAdmin):
    list_display = ('item_name',)
    search_fields = ['item_name']

admin.site.register(Listing, ListingAdmin)


# Register your models here.
