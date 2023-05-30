$(document).ready(function(){
    $("#banners ul").bxSlider(  { 
        auto: true,
        mode: 'fade', // some e aparece a imagem   // 'vertical' ---- deica a rolagem de cima para baixo
        /*speed:1000*/
        //page: true
    });

    $('#fotos .container').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
        },
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
  });