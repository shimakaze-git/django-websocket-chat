from django.urls import re_path
from chats import consumers

websocket_urlpatterns = [
    re_path(r"ws/chat/(?P<room_id>\w+)/$", consumers.ChatConsumer)
]
