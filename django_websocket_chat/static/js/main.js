$(function() {
  const roomId = document.getElementsByName("room_id")[0].value;
  const portId = '6379';
//   console.log('window.location.host', window.location.host);
//   const webSocketUrl = 'ws://' + window.location.hostname + ':' + portId + '/ws/chat/' + roomId + '/'
  const webSocketUrl = 'ws://' + window.location.host + '/ws/chat/' + roomId + '/'
  console.log("webSocketUrl", webSocketUrl);
//   console.log('window.location', window.location);

  var ws = new WebSocket(webSocketUrl);
  // "wss://codeprep-sandbox.herokuapp.com/api/websocket/chat"
//   ws.addEventListener("message", handleMessage);

//   // ボタンclick時にsubmit関数を実行させる
//   $("#submit").click(submit);
//   var name = sessionStorage.getItem("name");
//   if (name) {
//     $("#name").val(name);
//   }

//   function handleMessage(e) {
//     var data = JSON.parse(e.data);
//     if (!data || !data.name || !data.message) {
//       return;
//     }

//     // id=logである要素を取得
//     var $log = $("#log");

//     // 追加対象の要素の作成
//     const $p = $("<p/>");
//     const $name = $('<span class="name"/>');
//     const $message = $('<span class="message"/>');

//     // 各要素にデータの値を設定
//     $name.text(data.name);
//     $name.text(data.message);

//     // p要素にnameとmessageの要素を追加
//     $p.append($name).append($message);
//     var myName = $("#name").val();
//     if (myName === data.name) {
//       $p.addClass("self");
//     }

//     // id=logの要素の先頭にp要素を追加
//     $log.prepend($p);
//   }

//   // 送信ボタン
//   function submit(e) {
//     e.preventDefault();

//     var name = $("#name").val();
//     var message = $("#message").val();

//     if (!name || !message) {
//       return;
//     }

//     ws.send(
//       JSON.stringify({
//         name: name,
//         message: message
//       })
//     );
//     $("message").val();
//     sessionStorage.setItem("name", name);
//   }
});
