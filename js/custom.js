$(document).ready(function () {

    //escondemos el logo central despues de unos segundo
    setTimeout(() => {   
        $('.logo-center-la-juani').fadeOut(1300);    

    }, 1500);
    
    // scroll fullpage
    $('#fullpage').fullpage({        
        navigation: false,
        navigationPosition: 'bottom',
        scrollOverflow: true,                
        css3:true
        // fadingEffect: true,
        // fadingEffect: 'slides',
        // fadingEffect: 'sections',
        // continuousHorizontal: true,
        // autoScrolling: true,
        // scrollHorizontally: true,        
    });
    
    window.fullpage_api.setScrollingSpeed(2000);
});