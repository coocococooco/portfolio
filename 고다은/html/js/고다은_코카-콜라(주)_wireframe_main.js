    $(function(){
      var artGroup = $('.artGroup');
      var c2article = $('.content.cnt02>.section>.artView>.artGroup>.article');
      var imgGroup =  $('.imageGroup');
      var i = 0;
      var pagLi = $('.mainView>.paging>li');
      var imgLen = imgGroup.children().length;
      var arLen =  $('.artGroup').children().length;
      var navLi = $('.header>.nav>li');
      var navLa = $('.header>.nav>li>label');
      var navWrap = $('.navWrap');
      var mnLi = $('.menu>ul>li>a');
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

        // 메인
    
          function Left(){
            i++;
            i=i%imgLen;
        
            imgGroup.css({
                marginLeft : i*-100+'%'
            });
            pagLi.removeClass('on');
            pagLi.eq(i).addClass('on');
          };
        
        
          function Li(){
            var ind = $(this).index()
            pagLi.removeClass('on');
            $(this).addClass('on');
        
            imgGroup.css({
                marginLeft : ind*-100+'%'
            });
        
            i = ind;
          };
        
          var auto = setInterval(Left,5000);
          pagLi.click(Li);
      

        // 컨텐츠 02

              artGroup.find('.article:last').prependTo(artGroup);
                  artGroup.css({
                      marginLeft : '-100%'
                  });
              
          $('.artMid>.left').click(function(){
              artGroup.stop().animate({
                marginLeft : 0
            },function(){
              artGroup.find('.article:last').prependTo(artGroup);
                  artGroup.css({
                      marginLeft : '-100%'
                  });
              });
          
          });

         $('.artMid>.right').click(function(){
             artGroup.stop().animate({
               marginLeft : '-200%'
           },function(){
             artGroup.find('.article:first').appendTo(artGroup);
                 artGroup.css({
                     marginLeft : '-100%'
                 });
             });
         
         });
     
         $('.section>.paging>li').click(function(){
             var ind = $(this).index();
             artGroup.animate({
                 marginLeft : (ind)*-100+'%'
             });

             $('.section>.paging>li').removeClass('on');
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
      
        // 메인
    
          function Left(){
            i++;
            i=i%imgLen;
        
            imgGroup.css({
                marginLeft : i*-100+'%'
            });
            pagLi.removeClass('on');
            pagLi.eq(i).addClass('on');
          };
        
        
          function Li(){
            var ind = $(this).index()
            pagLi.removeClass('on');
            $(this).addClass('on');
        
            imgGroup.css({
                marginLeft : ind*-100+'%'
            });
        
            i = ind;
          };
        
          var auto = setInterval(Left,5000);
          pagLi.click(Li);
      

        // 컨텐츠 02

              artGroup.find('.article:last').prependTo(artGroup);
                  artGroup.css({
                      marginLeft : '-100%'
                  });
              
          $('.artMid>.left').click(function(){
              artGroup.stop().animate({
                marginLeft : 0
            },function(){
              artGroup.find('.article:last').prependTo(artGroup);
                  artGroup.css({
                      marginLeft : '-100%'
                  });
              });
          
          });

         $('.artMid>.right').click(function(){
             artGroup.stop().animate({
               marginLeft : '-200%'
           },function(){
             artGroup.find('.article:first').appendTo(artGroup);
                 artGroup.css({
                     marginLeft : '-100%'
                 });
             });
         
         });
     
         $('.section>.paging>li').click(function(){
             var ind = $(this).index();
             artGroup.animate({
                 marginLeft : (ind)*-100+'%'
             });

             $('.section>.paging>li').removeClass('on');
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

        }
        else{
            
        // 헤더

             navLi.eq(3).click(function(){
                navLi.removeClass('on');
             });
      
        // 메인
    
          function Left(){
            i++;
            i=i%imgLen;
        
            imgGroup.css({
                marginLeft : i*-100+'%'
            });
            pagLi.removeClass('on');
            pagLi.eq(i).addClass('on');
          };
        
        
          function Li(){
            var ind = $(this).index()
            pagLi.removeClass('on');
            $(this).addClass('on');
        
            imgGroup.css({
                marginLeft : ind*-100+'%'
            });
        
            i = ind;
          };
        
          var auto = setInterval(Left,5000);
          pagLi.click(Li);
      

        // 컨텐츠 02

              artGroup.find('.article:last').prependTo(artGroup);
                  artGroup.css({
                      marginLeft : '-100%'
                  });
              
          $('.artMid>.left').click(function(){
              artGroup.stop().animate({
                marginLeft : 0
            },function(){
              artGroup.find('.article:last').prependTo(artGroup);
                  artGroup.css({
                      marginLeft : '-100%'
                  });
              });
          
          });

         $('.artMid>.right').click(function(){
             artGroup.stop().animate({
               marginLeft : '-200%'
           },function(){
             artGroup.find('.article:first').appendTo(artGroup);
                 artGroup.css({
                     marginLeft : '-100%'
                 });
             });
         
         });
     
         $('.section>.paging>li').click(function(){
             var ind = $(this).index();
             artGroup.animate({
                 marginLeft : (ind)*-100+'%'
             });

             $('.section>.paging>li').removeClass('on');
             $(this).addClass('on');
         });

            // 투탑
            toTop.fadeOut(0);
        }




});
  
