// cancel out done todos
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed')
})

// delete todos
$('ul').on('click', 'span', function (event) {
    $(this).parent().fadeOut(250, function () {
        $(this).remove(); //'this' here refers to the li parent not the span
    }) //the reason for this was to fadeout the span and then it's parent element;
    event.stopPropagation();
})

// create todo
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // grab new todo text from input
        var todoText = $(this).val();
        // clear input after grabbing
        $(this).val('');
        //create a new li and add to ul
        $('ul').append("<li><span><i class='fas fa-trash'></i></span>"+ todoText +"</li>")
    } 
})

// toggle new todo
$('.fa-plus').click(function(){
    $("input[type='text']").fadeToggle();
})