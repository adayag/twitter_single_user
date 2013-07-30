
$(document).ready(function() {

  function wait_image(){
    return "<img id='spin-girl' src='http://media.tumblr.com/tumblr_m5i6qrAB5K1qbzjato1_400.gif'/>";
   }

  function wait_message() {
    return "<h1 id='wait-head'> Tweets awayyyyyyyyyyyyy!</h1>";
  }

  var form = $('#tweet-form');
  var container = $('.container');
  var title = $('.container h1');

  $(form).on('submit', function(event){
     event.preventDefault();
     $('#tweet-list').empty();

     var text = $(this).serialize();
     var route = '/';

     title.after(wait_message);
     title.hide();
     form.after(wait_image());
     form.hide();

     $('#spin-girl').css('border','10px solid grey');
     $.post(route, text, function(response) {
       $('#tweet-list').append(response);
       $('#spin-girl').remove();
       form.show();
       $('#wait-head').remove();
       title.show();

     });
   });
});


