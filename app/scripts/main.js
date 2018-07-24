$(function () {
    $('.page-navigation__btn').on('click', function () {
        $('.page-navigation__main').slideToggle('slow');
    });

    $('#messageForm').validate();
});
