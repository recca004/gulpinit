$(window).on('load', function()
{
    parallax(); 
    
    mobileMenu();
    
    mobileMenuDisplay();
    
    
});

$(window).on('scroll', function(e)
{
    if( $('html, body').scrollTop() > 105 )
    {
        $('aside').addClass('top');
    }
    else
    {
        $('aside').removeClass('top');
    }
    
});


$(window).on('resize', function()
{
    mobileMenuDisplay();
});




// Functions

var parallax = function()
{
    $('aside ul li a').on('click', function(e)
    {
        e.preventDefault();
        
        var anchor = $(this).attr('href');
        
        var position = $(anchor).offset().top;
        
        $('html, body').animate({scrollTop:position});
    });      
}


var mobileMenu = function()
{
    
    $('aside > span').hover(
        function(){
            if( $('aside').hasClass('mobileopen') )
            {
               $(this).find('img').addClass('open'); 
            }
        }, 
        function(){
            $(this).find('img').removeClass('open');
    });
    
    $('aside > span').on('click', function(){
       
        if( $('aside').hasClass('mobileopen') )
        {
            $('aside').removeClass('mobileopen');
        }
        else
        {
            $('aside').addClass('mobileopen');    
        }
        
    });
}


var mobileMenuDisplay = function()
{
    
    if (window.matchMedia("(min-width: 900px)").matches) 
    {
        $('aside').removeClass('mobileopen');
        
        $('aside > span').css({display:'none'});
    } 
    else 
    {
        //$('aside').addClass('mobileopen');
        
        $('aside > span').css({display:'block'});
    }
}
