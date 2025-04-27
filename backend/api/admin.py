from django.contrib import admin
from .models import Note

# Register your models here.
@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ('id', 'body', 'created', 'updated')
    search_fields = ('body',)
    list_filter = ('created', 'updated')
    ordering = ('-created',)
    list_per_page = 10
    list_display_links = ('id', 'body')

