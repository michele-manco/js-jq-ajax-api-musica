$(document).ready(function() {
  var source = $("#cards-template").html();
  var template = Handlebars.compile(source);
  
  $.ajax({
    'url': ' https://flynn.boolean.careers/exercises/api/array/music',
    'method': 'GET',
    'success': function(data) {
      var dischi = data.response;
      for (var i = 0; i < dischi.length; i++) {
        var disco = dischi[i];
        console.log(disco);
        var cover = disco.poster;
        var album = disco.title;
        var anno = disco.year;
        var artist = disco.author;
        var context = {
            copertina: cover,
            titolo   : album,
            artista  : artist,
            anno     : anno
        };
        var html   = template(context);
        $('#dischi').append(html);

      }

    },
    'error': function(){

    }
  });

})
