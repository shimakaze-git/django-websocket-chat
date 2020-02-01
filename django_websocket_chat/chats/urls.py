from django.urls import path
from django.views.generic.base import TemplateView

urlpatterns = [
    path(
        "",
        TemplateView.as_view(template_name="room/index.html"),
        name="room_list"
    ),  # Room部屋
    path(
        "<room_id>/",
        TemplateView.as_view(template_name="room/page.html"),
        name="room_page"
    ),  # Room部屋
]
