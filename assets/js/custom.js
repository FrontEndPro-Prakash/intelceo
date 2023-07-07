/* fixed header */
$(function(){
	var shrinkHeader = 20;
	$(window).scroll(function() {
		var scroll = getCurrentScroll();
		if ( scroll >= shrinkHeader ) {
			$('header').addClass('shrink');
		}
		else {
			$('header').removeClass('shrink');
		}
	});
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
});
/* /fixed header */


/*---Start city slider---*/
$(document).ready(function(){
	$(".our-services-slider").owlCarousel({
		loop:true,
		margin:75,
		nav:true,
		dots: false,
		nav: true,
		navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g id="Group_1580" data-name="Group 1580" transform="translate(-129 -1161)"><g id="Ellipse_7" data-name="Ellipse 7" transform="translate(129 1161)" fill="none" stroke="#74767d" stroke-width="2"><circle cx="30" cy="30" r="30" stroke="none"/><circle cx="30" cy="30" r="29" fill="none"/></g><path id="if_icon-ios7-arrow-right_211607"d="M160,97.86,161.985,96l16.423,15.339-16.423,15.339L160,124.828l14.429-13.489Z" transform="translate(325.824 1303.312) rotate(180)" fill="#74767d" opacity="0.769"/></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g id="Group_1581" data-name="Group 1581" transform="translate(-129 -1236)"><g id="Ellipse_8" data-name="Ellipse 8" transform="translate(129 1236)" fill="none" stroke="#74767d" stroke-width="2"><circle cx="30" cy="30" r="30" stroke="none"/><circle cx="30" cy="30" r="29" fill="none"/></g><path id="if_icon-ios7-arrow-right_211607" d="M0,28.819l1.985,1.86L18.407,15.339,1.985,0,0,1.85,14.429,15.339Z" transform="translate(150 1251)" fill="#74767d"/></g></svg>'],
		responsive:{
			0:{
				items:1,
				margin:10,
				autoWidth:false
			},
			768:{
				items:10,
				nav: true,
				autoWidth:true,
				margin:40
			},
			992:{
				items:10,
				nav: true,
				autoWidth:true
			}
		}
	})
});
/*---End city slider---*/

/*---Start city slider---*/
$(document).ready(function(){
	$(".see-an-example-slider").owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots: true,
		items: 1,
		autoPlay: true,
		autoplayTimeout:5000,
		/*animateOut: 'fadeOut',
		animateIn: 'fadeIn'*/
	})
});

/*hamburger*/
function toggleSideMenu(){
	var el = $(".menuToggle");
	el.toggleClass("active");
	$(".site-menu").toggleClass("active");
	$("body").toggleClass("no-scroll");
	el.hasClass('active')?$(".overlay").fadeIn():$(".overlay").fadeOut();
}
$(".menuToggle").click(function(){
	toggleSideMenu();
});
$(".overlay").click(function(){
	toggleSideMenu();
});
/*hamburger end*/

/* article slider mobile */
$(document).ready(function(){
	$(".article-slider").owlCarousel({
		loop:true,
		margin:75,
		nav:true,
		dots: false,
		nav: true,
		items: 1,
		navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g id="Group_1580" data-name="Group 1580" transform="translate(-129 -1161)"><g id="Ellipse_7" data-name="Ellipse 7" transform="translate(129 1161)" fill="none" stroke="#74767d" stroke-width="2"><circle cx="30" cy="30" r="30" stroke="none"/><circle cx="30" cy="30" r="29" fill="none"/></g><path id="if_icon-ios7-arrow-right_211607"d="M160,97.86,161.985,96l16.423,15.339-16.423,15.339L160,124.828l14.429-13.489Z" transform="translate(325.824 1303.312) rotate(180)" fill="#74767d" opacity="0.769"/></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><g id="Group_1581" data-name="Group 1581" transform="translate(-129 -1236)"><g id="Ellipse_8" data-name="Ellipse 8" transform="translate(129 1236)" fill="none" stroke="#74767d" stroke-width="2"><circle cx="30" cy="30" r="30" stroke="none"/><circle cx="30" cy="30" r="29" fill="none"/></g><path id="if_icon-ios7-arrow-right_211607" d="M0,28.819l1.985,1.86L18.407,15.339,1.985,0,0,1.85,14.429,15.339Z" transform="translate(150 1251)" fill="#74767d"/></g></svg>']
	})
});

/* /article slider mobile */

$('.move-down-btn').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
  }
});