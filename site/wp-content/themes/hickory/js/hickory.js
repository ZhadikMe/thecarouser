var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
jQuery(document).ready(function($) {

	"use strict";

	// Tabs

	//When page loads...
	$('.tabs-wrapper').each(function() {
		$(this).find(".tab_content").hide(); //Hide all content
		$(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(this).find(".tab_content:first").show(); //Show first tab content
	});
	
	//On Click Event
	$("ul.tabs li").click(function(e) {
		$(this).parents('.tabs-wrapper').find("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(this).parents('.tabs-wrapper').find(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(this).parents('.tabs-wrapper').find(activeTab).fadeIn(); //Fade in the active ID content
		
		e.preventDefault();
	});
	
	$("ul.tabs li a").click(function(e) {
		e.preventDefault();
	})
	
	/** Mobile specific */
	if( $('body.responsive').length ) {

		// Mobile menu
		jQuery(document).ready(function () {
			jQuery('#navigation').meanmenu({
			meanScreenWidth: "960",
			meanRevealPosition: "left"
			});
		});
		
	}
	
	/*** Gallery ***/
    jQuery('a.post-gallery').colorbox({rel:"gallery-group"});

    // Flex Slider
    jQuery(window).load(function($){
    	
		if(hick.is_single) {
		jQuery('.flexslider').flexslider({
			animation: "slide",
			controlNav: 'thumbnails',
		});
		} else {
		jQuery('.main-slider').flexslider({
			animation: "slide",
			controlNav: false,
		});
		}
		
		jQuery('.short-slider').flexslider({
			animation: "slide",
			directionNav: true,
			controlNav: true,
		});
		
	});

	// Google Plus Button
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	po.src = 'https://web.archive.org/web/20180616205911/https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	
	// Search
	
	$('#top_search a').on('click', function ( e ) {
		e.preventDefault();
    	$('.show-search').slideToggle('fast');
    });
	
});
}

/*
     FILE ARCHIVED ON 20:59:11 Jun 16, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:21:30 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.631
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.012
  cdx.remote: 65.291
  LoadShardBlock: 101.898 (3)
  PetaboxLoader3.datanode: 83.332 (4)
  PetaboxLoader3.resolve: 96.35 (2)
  load_resource: 122.034
*/