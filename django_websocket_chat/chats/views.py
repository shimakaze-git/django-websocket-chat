from django.shortcuts import render
from django.utils.safestring import mark_safe
import json


def room_list(request):
    return render(request, "room/index.html", {})


def room_page(request, room_id):
    print("room_id", room_id)
    return render(
        request, "room/page.html", {"room_id": mark_safe(json.dumps(room_id))}
    )
