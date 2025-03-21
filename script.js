function calculando(){
    const numero1 = document.getElementById("num1");
    let valor1 = numero1.value
    const numero2 = document.getElementById("num2");
    let valor2 = numero2.value
    
    if (valor1==valor2){
        alert("os numeros não podem ser igual")
    }
    if (valor2 >= valor1){
        alert(" sucesso ! O segundo numero e maior que o primeiro");
        } 
    else {
        alert(" Fracasso ! o primeiro numero e maior que o segundo ");
    }
}