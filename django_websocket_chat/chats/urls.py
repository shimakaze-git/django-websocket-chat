from django.urls import path
from django.views.generic.base import TemplateView

urlpatterns = [

    path(
        "",
        TemplateView.as_view(template_name="room/index.html"),
        # name="user_mypage",
    ),  # Room部屋
    # path(
        # "<room_id>/",
        # TemplateView.as_view(template_name="content.html"),
        # name="user_page_config",
    # ),  # Room部屋
]
