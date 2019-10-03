//owl carousel
$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		margin: 10,
		nav: true,
		loop: true,
		dots: true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:false,
		navText: [
			'<span aria-label="' + 'Previous' + '"><i class="ti-angle-left"></i></span>',
			'<span aria-label="' + 'Next' + '"><i class="ti-angle-right"></i></span>'
		],
		responsive: {
			0: {
				items: 1
			}
		}
	});
});

//cart drawer
$(document).ready(function() {
	$("#cartdrawer").on("click", function(e) {
		$(".offcanvas-wrap").toggleClass("cartdrawer-active");
		e.stopPropagation()
	});
	$(document).on("click", function(e) {
		if ($(e.target).is(".cartdrawer, .cartdrawer * ") === false || $(e.target).is(".cartdrawer .hide") === true) {
			$(".offcanvas-wrap").removeClass("cartdrawer-active");
		}
	});
});

//menu drawer
$(document).ready(function() {
	$("#menudrawer").on("click", function(e) {
		$(".offcanvas-wrap").toggleClass("menudrawer-active");
		e.stopPropagation()
	});
	$(document).on("click", function(e) {
		if ($(e.target).is(".menudrawer, .menudrawer * ") === false || $(e.target).is(".menudrawer .hide") === true) {
			$(".offcanvas-wrap").removeClass("menudrawer-active");
		}
	});
});

//scroll up
$('.scrollup').on('click', function(){
	$('html,body').animate({scrollTop:0}, 500);
	return false;
});

function scrollToID(theID) {
	$('html,body').animate({scrollTop: $("#"+theID).offset().top},500);
};

//search
$(".search-button").click(function() {
	var $this = $(this);
	if ($this.parents('.search__tab').hasClass('open')) {

		if ($this.parent().find('.search-box').val().length > 0) {

			$this.find('.ti-search').toggleClass('ti-search').toggleClass('ti-check');
			return;
		}
	}
	if ($this.parent().find('.search-box').val().length < 1) {
		$this.find('.ti-check').toggleClass('ti-check').toggleClass('ti-search');
	}
	$this
	.parents('.search__tab')
	.toggleClass("open");	
});

//fancy box (gallery popup)
$('[data-fancybox="images"]').fancybox({
	thumbs : {
		autoStart : true,
		axis      : 'x'
	}
});

$('.collapse').on('shown.bs.collapse', function(){
	$(this).parent().find(".ti-plus").removeClass("ti-plus").addClass("ti-minus");
	}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".ti-minus").removeClass("ti-minus").addClass("ti-plus");
});