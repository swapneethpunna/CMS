import http
from http.client import HTTPResponse
from django.shortcuts import render
from django.contrib.auth.models import User, auth
from django.http import HttpResponse
from cmsapp.models import regform
from datetime import datetime


def form(request):
    if request.method=='POST':
        fname =request.POST['fname']
        Lname =request.POST['Lname']
        DOB =request.POST['DOB']
        email=request.POST['email']
        password=request.POST['password']
        username=request.POST['username']
        user= regform.objects.create(firstName=fname,lastName=Lname,username=username,email=email,password=password,DOB=DOB)
        user.save()
        # print('User_created')
        return render(request, 'core/heading.html')
    else:
        return render(request, 'core/base.html')