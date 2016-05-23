$(window).load(function(){
    var windowH = $(window).height();
    var wrapperH = $('#window-height-wrapper').height();
    
    if(windowH != wrapperH) {                            
        $('#window-height-wrapper').css('height',windowH+'px');
        $('#map').css('height',windowH+'px');
        //$('#window-height-map').css('height',windowH+'px');
        // $('#window-height-outcome').css('height',windowH+'px');
        // $('#window-height-clothing').css('height',windowH+'px');
        
    }           

    $(window).resize(function(){
        var windowH = $(window).height();
        var wrapperH = $('#window-height-wrapper').height();
        var differenceH = windowH - wrapperH;
        var newH = wrapperH + differenceH;
        var truecontentH = $('window-height-content').height();
        
        if(windowH != truecontentH) {
            $('#window-height-wrapper').css('height', (newH)+'px');
            $('#map').css('height', (newH)+'px');
        }

    })          
});