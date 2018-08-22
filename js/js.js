$("#btnOne").click(function(){

	// e.preventDefault();

    $(this).closest('.btn-link').find('d-none').removeClass('d-none').addClass('to-hide');
    $(this).closest('.accordionExample').find('.to-hide').addClass('d-none');

    console.log($(this).closest('.btn-link'));

});

$(".nav-item").click(function(){

	// e.preventDefault();

    // $(this).closest('.box-content').find('active').removeClass('active').addClass('to-hide');
    // $(this).closest('.accordionExample').find('.to-hide').addClass('d-none');

    $('ul.prueba').find('li.active').removeClass('active');
    $(this).addClass('active');

    // console.log($(this).closest('.nav-tabs').find('active').addClass('to-hide2'));

});