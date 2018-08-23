$(".btnOne").click(function(){

    if ($(this).hasClass('active') ) {
    	
    	console.log('1');
    	$(this).removeClass('active');
    	$(this).find('svg.fa-chevron-up').addClass('d-none').removeClass('d-block');
    	$(this).find('svg.fa-chevron-down').addClass('d-block').removeClass('d-none');

    } else {
    	console.log('2');
    	$(this).addClass('active');
    	$(this).find('svg.fa-chevron-up').addClass('d-block').removeClass('d-none');
    	$(this).find('svg.fa-chevron-down').addClass('d-none').removeClass('d-block');;
    }
    
});

$(".nav-item").click(function(){

    $('ul.prueba').find('li.active').removeClass('active');
    $(this).addClass('active');

});