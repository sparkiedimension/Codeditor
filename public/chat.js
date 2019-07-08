
var socket = io();
var editor = ace.edit("editor");
var 
        upload = document.getElementById('upload');

upload.addEventListener('click', function(){
    socket.emit('editor', editor.getValue());
  
});


editor.setValue(localStorage["box"]||"write something ...");



socket.on('editor',function(data){

 
 editor.setValue(data);

  localStorage["box"]=editor.getValue();


});



 
