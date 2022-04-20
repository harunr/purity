
;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
		
        if (navigator.userAgent.indexOf('Safari') != -1 && 
            navigator.userAgent.indexOf('Chrome') == -1) {
            $("body").addClass("safari");
        }
        
        $('.main-nav ul li').find('.dropdown-item-wrap').parent().addClass('hasSubnav')
        $('.aside-nav ul li').find('ul').parent().addClass('hasSubnav')
        
        $('#phone-nav').click(function(){
            $('.main-nav').slideToggle();
            $(".dropdown-item-wrap").slideUp()
            $(".main-nav ul li").removeClass('subnavExpanded')
        })

        if($(window).width() < 992){
            $(".main-nav ul li.hasSubnav >a").click(function(e){
                e.preventDefault()
                $(".dropdown-item-wrap").slideToggle()
                $(this).parent().toggleClass('subnavExpanded')
            })
        }
        
        
        $("div.aside-nav .hasSubnav >a").click(function(e){
            e.preventDefault()
            $(this).parent().find("ul").slideToggle();
            $(this).parent().toggleClass('subnavExpanded')
        })

        if($("section.popular-article-section").length){
            $('body').addClass('home-content-body')
        }
            
        
        $('div.question .answer').hide()
        $('.accordion div.question > h6').click(function(){

            $('.accordion div.question').removeClass('active')
            $(this).parent().addClass('active')
            $('div.question').find('.answer:visible').slideUp()
            
            if( $(this).parent().find('.answer:visible').length){
                $('.accordion div.question > .answer').slideUp()
                $('.accordion div.question').removeClass('active')
            }
            else{
                $(this).parent().find('.answer').slideDown()
                $(this).parent().addClass('active')
            }
        })
        
        //aside tab function 
        $("#asideTabs >li:nth-last-child(2)").addClass('active')
        $("#tab-contents >.faq-tab-content").hide()
        $("#tab-contents >.faq-tab-content:nth-last-child(2)").show()
        
        $("#asideTabs >li").each(function(i){
            $(this).click(function(){
        
                if($(this).hasClass('active')) return false
                else{
                    $("#asideTabs >li").removeClass('active')
                    $(this).addClass('active')
                    $("#tab-contents >.faq-tab-content").hide()
                    $("#tab-contents >.faq-tab-content").eq(i).show()
                }
            })
        })
        
        //second step function
        $(".faq-tab-content").each(function(){
            var _this = $(this)

            _this.find(".accordion-wrap >.accordion").hide()
            _this.find(".accordion-wrap >.accordion").eq(0).show()

            _this.find(".faq-subTab >li").each(function(i){
                $(this).click(function(){
                    
                    if($(this).hasClass('active')) return false
                    else{
                        _this.find(".faq-subTab >li").removeClass('active')
                        $(this).addClass('active')
                        _this.find(".accordion-wrap >.accordion").hide()
                        _this.find(".accordion-wrap >.accordion").eq(i).show()
                    }
                })
            })
        })
        
        $("#newsletterTriger").click(function(){
            $("#popup-section").fadeIn()
            if($(window).width() < 992){
                $(".main-nav").slideUp()
            }
        })
        
        $("#close-btn").click(function(){
            $("#popup-section").fadeOut()
        })


	})// End ready function.

	$(window).load(function(){
        // Begin common slider
        if ( $('div.home-slider-wrap').length == 0 ) return false

        $('div.home-slider-wrap').flexslider({
            animation:"slide",
            slideshow: true,
            directionNav: true,
            controlNav:true,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        })	

        //$('div.home-slider-wrap video').trigger('play');

    })
	

})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})