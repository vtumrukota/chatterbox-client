var app = {};
app.init = function(){};
app.server = 'https://api.parse.com/1/classes/chatterbox';
app.send = function(message){
  $.ajax({
    url: app.server,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      // console.log('chatterbox: Message sent', );
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message');
    }
  });
};
app.fetch = function(){
  $.ajax({
    url: app.server,
    type: 'GET',
    data: JSON.stringify(),
    contentType: 'application/json',
    success: function (data) {
      for (var x in data) {

      }

      console.log('this is data', data);
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message');
    }
  });
};
app.clearMessages = function(){
  $('#chats').remove();
};

// var hackCheck = function (string) {
//   var escapeCharacters = {
//     '&': '&amp;',
//     '<': '&lt;',
//     '>': '&gt;',
//     '"': '&quot;',
//     "'": '&#x27;',
//     '/': '&#x2F;'
//   }
//   var arr = string.split('');
//   for(var i=0; i < arr.length; x++) {

//   }

// }

app.addMessage = function(message){
  var $chats = $('<div/>').attr('id', 'chats');
  var newMessage = '<div>' + message.text + '</div>';
  $('#main').append($chats);
  $('#chats').append(newMessage);
};
app.addRoom = function(room){
  var $rooms = $('<div/>').attr('id', 'roomSelect');
  var newRoom = '<div>' + room + '</div>';
  $('#main').append($rooms);
  $('#roomSelect').append(newRoom);
};

$('')









