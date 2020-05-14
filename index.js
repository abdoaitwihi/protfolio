$(document).ready(function () {
    //hide nav on load
    $('.nav-list').hide();



    // setting the nav depanding on where it is left 
    var position = window.pageYOffset;
    $('.section').each(function () {
        var target = $(this).offset().top;
        var name = $(this).attr('id');
        let targetColor = $(this).attr('color');
        var navLinks = $('.nav-link');

        if (position + 250 >= target) {
            navLinks.removeClass('active');
            let item = navLinks.filter(`.${name}`);
            item.addClass('active');
        }
        if (position + 94 >= target) {
            $('.nav-container2').css('background-color', `${targetColor}`);

            if ($(window).width() < 700) {
                $('.nav-list').css('background-color', `${targetColor}`);

            } else {
                $('.nav-list').css('background-color', `${targetColor}`);

            }
        }
        $('title').text(`ait wihi | ${name}`);
    });



    // handling the vav on mobile devices with bars and times
    $('.nav-icon').click(function (e) {

        $('.nav-list').slideToggle(500);
        $(this).fadeOut(200, function () {
            $(this).siblings('.nav-icon').fadeIn();
        });
    });




    //changing the nav depending on the scroll
    $(window).scroll(function () {
        var position = window.pageYOffset;
        $('.section').each(function () {
            var target = $(this).offset().top;
            var name = $(this).attr('id');
            let targetColor = $(this).attr('color');
            var navLinks = $('.nav-link');

            if (position + 250 >= target) {
                navLinks.removeClass('active');
                let item = navLinks.filter(`.${name}`);
                item.addClass('active');
            }
            if (position + 73 >= target) {
                $('.nav-container2').css('background-color', `${targetColor}`);
                if ($(window).width() < 789) {
                    $('.nav-list').css('background-color', `${targetColor}`);

                } else {
                    $('.nav-list').css('background-color', '');

                }
                $('title').text(`ait wihi | ${name}`);

            }


        });

    });




    //selecting dection from the nav bar
    $(".nav-link ").click(function () {
        let sectionID = $(this).text();
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${sectionID}`).offset().top - 71
        }, 300);
        $('.nav-list').fadeOut(300);
        $('.fa-times').fadeOut(200, function () {
            $('.fa-bars').fadeIn(200);
        });



    });




    //going to next section with next button
    $(".button-next ").click(function () {
        let sectionID = $(this).attr('name');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${sectionID}`).offset().top - 70
        }, 300);


    });



    //going to previous section with next button


    $(".button-up ").click(function () {
        let sectionID = $(this).attr('name');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(`#${sectionID}`).offset().top - 72
        }, 300);


    });
    //giving a color to nav-list on resize
    $(window).resize(function () {
        let width = $(window).width();
        if (width < 789) {
            $('.nav-list').css('background-color', 'wheat');

        } else {
            $('.nav-list').css('background-color', '');


        }

    });
    $('#sub-button').click(function (e) {
        e.preventDefault();

        $([document.documentElement, document.body]).animate({
            scrollTop: $('#alert-message').offset().top - 150
        });


        $('#alert-message').css({ 'color': 'red', 'font-weight': 'bold' });
        setTimeout(function () {
            $('#alert-message').css({ 'color': '', 'font-weight': '' });
        }, 3000)
    });
});


