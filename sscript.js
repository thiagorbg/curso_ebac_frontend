$('form').on('submit',function(e){
    e.preventDefault(e);
    const  novoItem = $('<li></li>')
    const oinput = $('#valor').val().trim();
    
    $(` <li>${oinput}</li>`).appendTo(novoItem)

    
    $(novoItem).appendTo('ul')
    $('#valor').val('').trim();
    
})
$('ul').on('click','li',function() { /*nessa primeira linha fala quando clicar no li dentro do ul faça*/
    $(this).toggleClass('riscado');
    
    
});





/*text-decoration: line-through ;
} evendo de clicar e marcar como concluir de lista de tarefas*/
