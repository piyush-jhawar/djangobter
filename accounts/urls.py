from django.urls import path
from . import views

urlpatterns = [
path('login', views.login, name='login'),
path('register', views.register, name='register'),
path('search', views.search, name='search'),
path('logout', views.logout, name='logout'),
path('dashboard', views.dashboard, name='dashboard')
]