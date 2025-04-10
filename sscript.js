$('form').on('submit',function(e){
    e.preventDefault(e);
    const  novoItem = $('<li></li>')
    const oinput = $('#valor').val();
    
    $(` <a>${oinput}</a>`).appendTo(novoItem)

    
    $(novoItem).appendTo('ul')
    $('#valor').val('');
    
})

const valul = $('#riscado').val();

$('#riscado').click(function() {
    $(this).css('text-decoration', 'line-through');

    
    $('#riscado').val('text-decoration', 'line-through none');


});