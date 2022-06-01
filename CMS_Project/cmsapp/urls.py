from django.shortcuts import redirect, render
from django.urls import path
from . import views  

urlpatterns =[
    path('', views.form , name= 'form'),
    path("login", views.login ,name='login')
]
