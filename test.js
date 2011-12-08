$(document).ready(function(){
 
  $('body').prepend('<div id="circles"><div id="1"> <img src="1.png" width="40px"></img></div><div id="2" style="cursor:pointer;"><img src="2.png" width="40px"></img><input type="text" id="other" style="visibility:hidden;opacity:0;"></div><div id="3"><img src="3.png" width="40px"></img></div><div id="4"><img src="4.png" width="40px"></img></div><div id="5"><img src="5.png" width="40px"></img></div><div id="6"><img src="6.png" width="40px"></img></div></div>');
    $("#1,#2,#3,#4,#5,#6").css("visibility","hidden"); 
 
 $('#2').click(function(event){
$('#other').css("visibility","visible");
$('#other').animate({opacity:1},1000);
});

 });




$(document).click(function(event)
    {
        if (event.metaKey)
        {
                $("#1,#2,#3,#4,#5,#6").css({top:event.pageY,left:event.pageX,position:'absolute',opacity:0,visibility:'visible'});
                $("#1").animate({left:event.pageX-50,position:'absolute',opacity:1},600);
                $("#2").animate({left:event.pageX+50,position:'absolute',opacity:1},600);
                $("#3").animate({top:event.pageY-43.25,left:event.pageX+25,position:'absolute',opacity:1},600);
                $("#4").animate({top:event.pageY+43.25,left:event.pageX+25,position:'absolute',opacity:1},600);
                $("#5").animate({top:event.pageY-43.25,left:event.pageX-25,position:'absolute',opacity:1},600);
                $("#6").animate({top:event.pageY+43.25,left:event.pageX-25,position:'absolute',opacity:1},600);


            event.preventDefault();
        }

    
    });


