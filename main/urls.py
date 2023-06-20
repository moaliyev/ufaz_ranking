from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("major/", views.major_all, name="major_all"),
    path("donate/", views.donate, name="donate"),
    path("major/<int:major_id>", views.major, name="major"),
    path("gpa-calculator/", views.gpa, name="gpa"),
]
