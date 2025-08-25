// aqui e a minha função contrutora do produto , onde tem seus atributos como marca, modelo etc.. e seus argumentos que estão dentro dos parenteses
function Aparelho (marca,modelo,armazenamento,preço) {
    this.marca = marca;
    this.modelo = modelo;
    this.armazenamento = armazenamento;
    this.preço = preço;
}

// essa função contrutura e a que eu chamo minhas instancias 
function DadosCompra (nome,marca,modelo,armazenamento,preço){
    this.nome = nome;

    Aparelho.call(this,marca,modelo,armazenamento,preço) // Aqui eu chamo a herança da funçao Aparelho 
}

const compra1 = new DadosCompra('Thiago','apple', 'iphone 13',128,3500); // e aqui chamo a instancia da função construtura principal que e a DadosCompra
console.log(compra1)