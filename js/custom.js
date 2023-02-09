$(document).ready(function () {

    //escondemos el logo central despues de unos segundo
    setTimeout(() => {   
        $('.logo-center-la-juani').fadeOut(1300);    

    }, 1500);

    // cambiamos el color de fondo y las letras
    $(document).on('click', '.btn-cambio', function () {        
        if ($(this).attr('attr-color') == 'negro') {        
            $('.fondo-change').css('background-color', 'black')
            
        } else {
            $('.fondo-change').css('background-color', 'white')
        }
    })
    
    // scroll fullpage
    $('#fullpage').fullpage({        
        navigation: false,
        navigationPosition: 'bottom',
        scrollOverflow: true,                
        css3:true       
    });        
});