$('form').on('submit',function(e){
    e.preventDefault(e);
    const  novoItem = $('<li></li>')
    const oinput = $('#valor').val().trim();
    
    $(` <li>${oinput}</li>`).appendTo(novoItem)

    
    $(novoItem).appendTo('ul')
    $('#valor').val('').trim();
    
})
$('ul').on('click','li',function() {
    $(this).toggleClass('riscado');
    
    
});





/*const valul = $('#riscado').val();*/
