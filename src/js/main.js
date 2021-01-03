$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)

 })

  function init_map() {

   //alert('init map');
      var myOptions = {

        zoom: 14,

        center: new google.maps.LatLng(33.882701, 35.492547),

        mapTypeId: google.maps.MapTypeId.ROADMAP

      };

      map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);

      marker = new google.maps.Marker({

        map: map,

        position: new google.maps.LatLng(33.882701, 35.492547)

      });

      infowindow = new google.maps.InfoWindow({content: "<b>Itani</b><br/>Beirut Mar Elias <br/> Chahine Building"});

      google.maps.event.addListener(marker, "click", function () {

        infowindow.open(map, marker);

      });

      infowindow.open(map, marker);

    }

    //google.maps.event.addDomListener(window, 'load', init_map);


})
