$(document).on('click',"button#submit",function(){
  var topic=$('#topicid').val();
  var description = $("#description").val();
  var ncode = $("#ncode").val();
  $('#formfeedback').modal({backdrop: 'static', keyboard: false});
 $("#modal-footer").hide();
  $('#formfeedback').modal('show');
   $("#statusofsubmit").html("Wait...");
  $.post('/addNotification',{topic:topic,ncode:ncode,description:description},function(){

  },"json")
  .done(function(data){

      $("#modal-footer").show();

        $('#formfeedback').modal('show');
     $("#statusofsubmit").html(data.status);
  })
  .fail(function(data){
        $("#modal-footer").show();
       $("#statusofsubmit").html("There was some error!! Try Again");
  });
});
function redirect(){
    window.location.href = "/aceEditor";
}
