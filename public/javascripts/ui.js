
$(".modal-wide").on("show.bs.modal", function () {
    var height = $(window).height() - 200;
    $(this).find(".modal-body").css("max-height", height);
});

function loadModal() {

    document.getElementById("current_fen").value = board.get_fen();
    $('#myModal').modal('show');
}

$(document).ready(function () {
    $('select,input').addClass('form-control');
    for (var i = 1; i < 3; i++) {
        $('.table_row_' + i).addClass('row');
        $('.table_row_' + i).removeClass('tr table_row_' + i);

        $('.table_cell_' + i + '_0').addClass('col-md-3');
        $('.table_cell_' + i + '_2').addClass('col-md-3');
        $('.table_cell_' + i + '_0').removeClass('td table_cell_' + i + '_0 table_cell_' + i + '_2');
        $('.table_cell_' + i + '_2').removeClass('td table_cell_' + i + '_0 table_cell_' + i + '_2');

        $('.table_cell_' + i + '_1').addClass('col-md-6');
        $('.table_cell_' + i + '_1').removeClass('td table_cell_' + i + '_1');

    }


    $('.table').removeClass('table');
    $('.center_el').html('&nbsp;');
//    $('.ratingContainer').css('height','100%');
//    $('.chess_board').css('width','100%');
//    $('.chess_board').css('height','100%');
});