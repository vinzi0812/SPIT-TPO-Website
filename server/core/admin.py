from django.contrib import admin

# Register your models here.
from .models import FiveYearData, Summary, StudentDetails
admin.site.register(FiveYearData)
admin.site.register(Summary)
admin.site.register(StudentDetails)