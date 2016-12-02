$(document).ready(function() {
  // comando para iniciar una peticcion con jquerry / ajax 
  $( "#slot-machine" ).submit(function( event ){
    // Tomas el id slot machine, cuando pulse submit
    event.preventDefault();
    // en ese momento toma el contro jquerry
    $.post("/rolls", function(data) {
      //direccionas al metodo post que esta en el controlador y obtienes data 
        $("#die").html(data);
        //mandas data data a la id die que se encuentra en la vista 
     }); 
  });

  
});
