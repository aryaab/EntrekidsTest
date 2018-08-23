// $("#btnOne").click(function(){

// 	// e.preventDefault();

//     $(this).closest('.btn-link').find('d-none').removeClass('d-none').addClass('to-hide');
//     $(this).closest('.accordionExample').find('.to-hide').addClass('d-none');

//     console.log($(this).closest('.btn-link'));

// });

$(".nav-item").click(function(){

    $('ul.prueba').find('li.active').removeClass('active');
    $(this).addClass('active');

});