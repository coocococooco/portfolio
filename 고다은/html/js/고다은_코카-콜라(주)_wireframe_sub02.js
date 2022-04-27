$(function(){
    
    var navLi = $('.header>.nav>li');
    var navLa = $('.header>.nav>li>label');
    var navWrap = $('.navWrap');
    var wd = $(window).width();

    if(wd >= 1024){
        
        // 헤더
             navLa.click(function(){
                 navLi.toggleClass('on');
                 $('.header>h1').toggleClass('on');
                 navWrap.toggleClass('show');
                 
             });

             navWrap.removeClass('show')
         
             navLi.eq(3).click(function(){
               navLi.toggleClass('on');
               $('.header>h1').toggleClass('on');
               navWrap.toggleClass('show');
               
             });
             
        //   탭

       var tabLi = $('.tab>ul>li');
       var artLi = $('.artMenu>li');

        tabLi.click(function(){
           tabLi.removeClass('on');
           $(this).addClass('on');
       });
        artLi.click(function(){
           artLi.removeClass('ch');
           $(this).addClass('ch');
        });
   

    }else if(wd >= 420 && wd < 1024){
            
        // 헤더
       navLi.eq(3).click(function(){
            navLi.removeClass('on');
         });
        //   탭

        var tabLi = $('.tab>ul>li');
        var artLi = $('.artMenu>li');

         tabLi.click(function(){
            tabLi.removeClass('on');
            $(this).addClass('on');
        });
         artLi.click(function(){
            artLi.removeClass('ch');
            $(this).addClass('ch');
         });
     
    }else{
         
    // 헤더
       navLi.eq(3).click(function(){
        navLi.removeClass('on');
     });
     
    //   탭
            
        var tabLi = $('.tab>ul>li');
        var artLi = $('.artMenu>li');
            
         tabLi.click(function(){
            tabLi.removeClass('on');
            $(this).addClass('on');
        });
         artLi.click(function(){
            artLi.removeClass('ch');
            $(this).addClass('ch');
         });    
        }
    
});