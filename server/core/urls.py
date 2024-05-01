from django.contrib import admin
from django.urls import path, include
from .views import DashBoardView

urlpatterns = [
    path('dashboard/', DashBoardView.as_view(), name='dashboard'),
]