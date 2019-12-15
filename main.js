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
        var gene = disco.genre;
        var context = {
            copertina: cover,
            titolo   : album,
            artista  : artist,
            anno     : anno,
            genere   : gene
        };
        var html   = template(context);
        $('#dischi').append(html);

      }

    },
    'error': function(){

    }
  });
  $('#generes').change(function(){
    var genselect = $(this).val();
    if (genselect == '') {
      $('.cards').fadeIn();

    } else {
      $('.cards').each(function(){
        var gene = $(this).attr('data-genere');
        console.log(gene);
        if (gene.toLowerCase() == genselect.toLowerCase()) {
          $(this).fadeIn();

        } else {
          $(this).fadeOut();
        }
      })

    }


  });

})
