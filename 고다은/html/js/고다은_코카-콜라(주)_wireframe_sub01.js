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
        //  탭
             var tabBtn = $('.tab>.btn');

            tabBtn.click(function(){
                tabBtn.removeClass('on');
                $(this).addClass('on');
             });


        // 투탑

          var toTop = $('.toTop');
          toTop.fadeOut(0);
          
          $(window).scroll(function(){
             var Y = $(document).scrollTop();
             console.log(Y);

             if(Y >= 500){
                 toTop.fadeIn(500);
             }else{
                 toTop.fadeOut(200);
             }
         });


          toTop.click(function(){
              $('html,body').stop().animate({
                  scrollTop : 0
              });
          });

    }else if(wd >= 420 && wd < 1024){
            
        // 헤더
       navLi.eq(3).click(function(){
            navLi.removeClass('on');
         });

        //  탭
        var tabBtn = $('.tab>.btn');
        tabBtn.click(function(){
            tabBtn.removeClass('on');
            $(this).addClass('on');
         });


         // 투탑

         var toTop = $('.toTop');
         toTop.fadeOut(0);
         
         $(window).scroll(function(){
            var Y = $(document).scrollTop();
            console.log(Y);

            if(Y >= 500){
                toTop.fadeIn(500);
            }else{
                toTop.fadeOut(200);
            }
        });


         toTop.click(function(){
             $('html,body').stop().animate({
                 scrollTop : 0
             });
         });
    }else{
         
    // 헤더
       navLi.eq(3).click(function(){
        navLi.removeClass('on');
     });

    //  탭
    var tabBtn = $('.tab>.btn');
    tabBtn.click(function(){
        tabBtn.removeClass('on');
        $(this).addClass('on');
     });


         // 투탑
         toTop.fadeOut(0);
    }

    
});