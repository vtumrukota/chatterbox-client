$(document).ready(function(){

var app = {};
app.init = function(){};
app.server = 'https://api.parse.com/1/classes/chatterbox';

var user1 = {
  username: 'irfan',
  objectId: '',
  text: ''
};

var user2 = {
  username: 'vivek',
  objectId: '',
  text: ''
};

app.send = function(object){
  $.ajax({
    url: app.server,
    type: 'POST',
    data: JSON.stringify(object),
    contentType: 'application/json',
    success: function (data) {
      object.objectId = data.objectId;
      app.fetch(object.objectId);
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message');
    }
  });
};
app.fetch = function(id){
  $.ajax({
    url: app.server+'/'+id,
    type: 'GET',
    data: JSON.stringify(''),
    contentType: 'application/json',
    success: function (data) {
      console.log("This was returned", data);
      app.addMessage(data);
      console.log(data);
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
  $('#chats').append(newMessage)
  $('#chats div').attr('class','chat');
};
app.addRoom = function(room){
  var $rooms = $('<div/>').attr('id', 'roomSelect');
  var newRoom = '<div>' + room + '</div>';
  $('#main').append($rooms);
  $('#roomSelect').append(newRoom);
};


$('.user1').click(function () {
    user1.text = $('.input_user').val();
    app.send(user1);
});

$('.user2').click(function () {
    user2.text = $('.input_user').val();
    app.send(user2);
});

});






