class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        console.log(`${this.nome} está emitindo um som.`);
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log(`${this.nome} está latindo.`);
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log(`${this.nome} está miando.`);
    }
}

// Instâncias das classes herdadas
const cachorro1 = new Cachorro('Rex', 5);
const gato1 = new Gato('Mimi', 3);
const cachorro2 = new Cachorro('Bolt', 2);


console.log(cachorro1)
// Exemplos de uso
cachorro1.emitirSom(); // Rex está latindo.
gato1.emitirSom();     // Mimi está miando.
cachorro2.emitirSom(); // Bolt está latindo.