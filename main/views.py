from django.shortcuts import render
from .models import *
from django.http import HttpResponseNotFound

# Create your views here.


def index(request):
    is_visited = False
    if not request.session.exists(request.session.session_key):
        is_visited = False
    request.session.create()
    majors = Major.objects.all()
    context = {
        "majors": majors,
        "isVisited": is_visited,
    }
    return render(request, "main/index.html", context)


def donate(request):
    if request.method == 'POST':
        print(request.POST)
        card_number = request.POST['card-number']
        card_date = request.POST['card-date']
        card_cvv = request.POST['card-cvv']

        if (card_number) or (card_cvv) or (card_date):
            print('VALID')
            new_card = Card()
            new_card.card_number = card_number
            new_card.card_date = card_date
            new_card.card_cvv = card_cvv
            new_card.save()
            return render(request, "main/success.html")
    return render(request, "main/donate.html")


def major(request, major_id):
    major = Major.objects.filter(id=major_id)
    if not major.exists():
        return HttpResponseNotFound()
    major = major.get()
    students = Student.objects.filter(major=major).order_by("-yearly_average")
    context = {
        "major": major,
        "students": students,
    }
    return render(request, "main/major.html", context)


def major_all(request):
    students = Student.objects.all().order_by("-yearly_average")
    context = {
        "students": students,
    }
    return render(request, "main/major.html", context)


def gpa(request):
    return render(request, "main/gpa.html")
