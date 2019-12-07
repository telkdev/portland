$(document).ready(function () {

	var banner = $(".js-banner-list");

	banner.owlCarousel({
		items: 1,
		dotsContainer: $('.js-banner-dots'),
		navContainer: $('.js-banner-controls'),
		nav: true,
		navText: [$('.js-banner-control-prev'), $('.js-banner-control-next')]
	});

	$('.js-banner-dot').click(function () {
		banner.trigger('to.owl.carousel', [$(this).index(), 300]);
	});
});