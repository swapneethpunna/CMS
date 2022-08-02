from django.shortcuts import redirect, render
from django.urls import path
from . import views  

urlpatterns =[
    path('', views.form , name= 'form'),
    path("login", views.login ,name='login'),
    path("catalog",views.catalog, name='catalog'),
    path("cc", views.cc, name="cc"),
    path("co",views.co, name="co"),
    path("update",views.update, name='update')
]

