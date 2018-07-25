$(document).ready(function(){
  $('#sizePicker').submit(function makeGrid(grid) {
    $('table tr').remove();
        let rows = $('#inputHeight').val(); //input number of rows
        let columns = $('#inputWidth').val(); //input number of columns
           for (let m = 1; m <= rows; m++){
              $('table').append('<tr></tr>');
              $('tr').css('height');
                for (let n = 1; n <= columns; n++) {
                  $('tr:last').append('<td></td>');
                  $('td').css('width');
                  $('td').attr('class','cells');
              }
        }
    grid.preventDefault();

    $("#pixel_canvas").on("mousedown mouseover", "td", function(e){
        if (e.buttons === 1){
          $(this).css("background-color", $("#colorPicker").val());
        }
    });

 $('.cells').contextmenu(function(event){
     $(event.target).css('background-color', 'white')
   return false;
       });
     });
});

