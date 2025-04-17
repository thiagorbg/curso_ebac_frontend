/*AQUI FIZEMOS O NAV OU HEADER ATIVAR A FENÇÃO DE SUBIR */

$(document).ready(function(){
    
    $('#carrosel').slick({
        autoplay:true
    })
    $('.menuHambur').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask(' (00) 00000-0000') /* AQUI COLOCAMOS A MASCARA PARA TELEFONE OU DE SUA PREFERENCIA */

    $('form').validade({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            opinião: {
                required: true
            }
        },
        messages: {

        }
    })
})