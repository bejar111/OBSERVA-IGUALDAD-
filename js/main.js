$( document ).ready(function() {
	scrollBody();

	$( ".cerrarPop" ).click(function() {
	  	$(this).parents(".oi-fondo-pop-up").hide();
	  	scrollBody();
	});

	$('.oi-menu_bar').click(function(){
			$('.oi-container-menu').animate({
					left: '0'
				});
	 });
	$('.oi-menu-cerrar').click(function(){
			$('.oi-container-menu').animate({
					left: '-100%'
			});
	 });

	 /*TABS*/
    $('.oi-tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');
		$(this).siblings().removeClass('oi-tab-active');
		$(this).parents(".oi-container-tabs").find('.oi-tab-body').removeClass('oi-tab-active');
		$(this).addClass('oi-tab-active');
		$("#"+tab_id).addClass('oi-tab-active');
	});



      $(window).scroll(function(){

      if ( $(this).scrollTop() > 54 ) {

       $('header').addClass("header-fix");

      } else {

        $('header').removeClass("header-fix");

      }

    });




	//HOME

	$('.container-slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		infinite: true,
        //AÑADIR A TODOS LOS SLICK PREVARROW Y NEXTARROW

        responsive: [
		    {
		      breakpoint: 1150,
		      	settings: {
		        slidesToShow:2
		      }
		    },
		    {
		      breakpoint: 767,
		      	settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 650,
		      	settings: {
		       slidesToShow: 1,
		      }
		    }
		  ]
	});
	$('.oi-slick-novedades').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		infinite: true,
        //AÑADIR A TODOS LOS SLICK PREVARROW Y NEXTARROW

        responsive: [
		    {
		      breakpoint: 1080,
		      	settings: {
		        slidesToShow:2
		      }
		    },
		    {
		      breakpoint: 780,
		      	settings: {
		        slidesToShow: 1,
		      }
		    },
		    {
		      breakpoint: 600,
		      	settings: {
		       slidesToShow: 1,
		      }
		    }
		  ]
	});

	// ACOSO POLITICO

	$('#VerFormulario1').click(function(){
		$("#InfoDenuncia").hide();
		$("#formAcoso1").show();

	 });

	$('#RegresarAcoso').click(function(){
		$("#formAcoso1").hide();
		$("#InfoDenuncia").show();
	 });

	$('#verVideoAcoso').click(function(){
		$("#PopVideoAcoso").show();
		$("#VideoAcoso").trigger('play');
		scrollBody();
	 });
	$('#CerrarVideo').click(function(){
		$("#VideoAcoso").trigger('pause');
		scrollBody();
	 });

	 $("input[name='identificacion'").click(function(event){
        var valor = $(event.target).val();
        if(valor =="Otro"){
            $("#DatoIdentificacion").show();
        }else {
             $("#DatoIdentificacion").hide();
        }
    });

	 $("input[name='OrientacionSexual'").click(function(event){
        var valor = $(event.target).val();
        if(valor =="OtrosOrientacion"){
            $("#DatoOrientacionSexual").show();
        }else {
             $("#DatoOrientacionSexual").hide();
        }
    });
	$("input[name='TipoDiscapacidad'").click(function(event){
        var valor = $(event.target).val();
        if(valor =="OtrosDiscapacidad"){
            $("#DatoOtroDiscapacidad").show();
        }else {
             $("#DatoOtroDiscapacidad").hide();
        }
    });
    $("input[name='autorAcoso'").click(function(event){
        var valor = $(event.target).val();
        if(valor =="OtroAcoso"){
            $("#DatoAutorAcoso").show();
        }else {
             $("#DatoAutorAcoso").hide();
        }
    });

		/*
    $('#EnviarFormulario').click(function(){
			$("#MensajeExitoFormAcoso").show();
			scrollBody();
	 });
	 */


});

function scrollBody() {
	if ($('.oi-fondo-pop-up').is(':visible')) {
	  	$("body").css("overflow-y", "hidden");
	} else {
	  	$("body").css("overflow-y", "auto");
	}
}
