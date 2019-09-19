$(function () {
    $('.table_for_club .arm').css({
        display: 'block'
    });
    $(".main_for_select select").on('input', function () {
        if ($(this).val() == 'ARM') {
            $('.table_block>.table_for_club div').hide();
            $(".table_for_club .arm").show();
            $('.logo_img').css({ backgroundImage:"url('img/598px-football_federation_of_armenia.svg_.png')" })
        } else if ($(this).val() == 'ES') {
            $('.table_block>.table_for_club div').hide();
            $(".table_for_club .es").show();
            $('.logo_img').css({ backgroundImage:"url('ste nkari anunn gra')" })
        } else if ($(this).val() == 'EN') {
            $('.table_block>.table_for_club div').hide();
            $(".table_for_club .en").show();
            $('.logo_img').css({ backgroundImage:"url('ste nkari anunn gra')" })
        } else if ($(this).val() == 'IT') {
            $('.table_block>.table_for_club div').hide();
            $(".table_for_club .it").show();
            $('.logo_img').css({ backgroundImage:"url('ste nkari anunn gra')" })
        } else if ($(this).val() == 'FAR') {
            $('.table_block>.table_for_club div').hide();
            $(".table_for_club .far").show();
            $('.logo_img').css({ backgroundImage:"url('ste nkari anunn gra')" })
        } else {
            $('.table_block>.table_for_club div').hide();
            $(".table_for_club .de").show();
            $('.logo_img').css({ backgroundImage:"url('ste nkari anunn gra')" })
        }
    })
})
