from django.urls import path
# from django.views.generic.base import TemplateView

from chats import views

urlpatterns = [
    path('', views.room_list, name="room_list"),
    # Room一覧

    path('<int:room_id>/', views.room_page, name='room_page'),
    # Room部屋
]
