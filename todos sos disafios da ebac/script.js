function calculando(){
    const numero1 = document.getElementById("num1");
    let valor1 = numero1.Value
    const numero2 = document.getElementById("num2");
    let valor2 = numero2.Value
    if (valor2 >= valor1){
        alert(" sucesso ! O segundo numero e maior que o primeiro");
        } 
    else {
        alert(" hFracasso ! o primeiro numero e maior que o segundo ");
    }
}