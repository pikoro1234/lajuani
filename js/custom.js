const is_mobile = () =>{

    let ventana_ancho = $(window).width();

    let ventana_alto = $(window).height();

    if (ventana_ancho <= 820) {

        return true               
    }
}

$(document).ready(function () {

    //escondemos el logo central despues de unos segundo
    setTimeout(() => {   
        $('.logo-center-la-juani').fadeOut(1300);    

    }, 1500);

    // cambiamos el color de fondo y las letras
    $(document).on('click', '.btn-cambio', function () {          
        $('.btn-cambio').find('.texto-change').removeClass('active')
        $(this).find('.texto-change').addClass('active')
        if ($(this).attr('attr-color') == 'negro') {        
            $('.fondo-change').css('background-color', 'black')
            $('.texto-change').addClass('change-color-text')            
            
        } else {
            $('.fondo-change').css('background-color', 'white')
            $('.texto-change').removeClass('change-color-text')
        }
    })
        
    // scroll fullpage
    $('#fullpage').fullpage({        
        navigation: false,
        navigationPosition: 'bottom',
        scrollOverflow: true,                
        css3:true       
    }); 
    
    // agregamos scroll y a pagina proyectos
    if(is_mobile()){
        $('.content-general').addClass('over-flow-y-mobile')       
        //$('#fullpage').find('.section.seccion-slider-desktop').remove()
        $('.pagina-proyectos').remove()
        $('.pagina-single-proyecto').remove()
    }
});