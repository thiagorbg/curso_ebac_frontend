function modelos (marca,modelo) {
    this.marca = marca
    this.iphone = modelo;
}


// aqui e a minha função contrutora do produto , onde tem seus atributos como marca, modelo etc.. e seus argumentos que estão dentro dos parenteses
function Aparelho (modelo,armazenamento,preço) {
    
    this.armazenamento = armazenamento;
    this.preço = preço;
    //modelos.call(this,marca)
    modelos.call(this,modelo)
}

// essa função contrutura e a que eu chamo minhas instancias 
function DadosCompra (nome,marca,modelo,armazenamento,preço){
    this.nome = nome;
    modelos.call(this,marca)
    //modelos.call(this,modelo)
    Aparelho.call(this,modelo,armazenamento,preço) // Aqui eu chamo a herança da funçao Aparelho 
}

const compra1 = new DadosCompra('thiago','apple','13',128,3500); // e aqui chamo a instancia da função construtura principal que e a DadosCompra
const compra2 = new DadosCompra('julia','apple',12,64, 2000)
//console.log(compra1)
console.log(compra2)