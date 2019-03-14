
// page scrolling

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)

 })


//  navbar button hover

   $(document).ready(function(){
     $('#hoverAbout').hover(function(){
         $('#changeHeaderBC').css('background-color','#EF678C');
       }, function(){
         $('#changeHeaderBC').css('background-color','#3D155F');
       });
   })

   $(document).ready(function(){
     $('#hoverSkills').hover(function(){
         $('#changeHeaderBC').css('background-color','#7DDF64');
       }, function(){
         $('#changeHeaderBC').css('background-color','#3D155F');
       });
   })

   $(document).ready(function(){
     $('#hoverWork').hover(function(){
         $('#changeHeaderBC').css('background-color','#177E89');
       }, function(){
         $('#changeHeaderBC').css('background-color','#3D155F');
       });
   })

   $(document).ready(function(){
     $('#hoverContact').hover(function(){
         $('#changeHeaderBC').css('background-color','#94958B');
       }, function(){
         $('#changeHeaderBC').css('background-color','#3D155F');
       });
   })
