from __future__ import absolute_import, unicode_literals
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.shortcuts import render

def init(request):
    return render(request, "home/home_page.html")