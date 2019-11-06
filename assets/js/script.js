$(function(){
var count = 0;
  $("#plus").click(function(){
    count++;
    $('#result').val(count);
  })
})
$(function(){
  var count= 0
  $("#moins").click(function(){
    count--;
    $('#result').val(count);
  })
})
