console.log("hello, world!");

let nome="alan";
console.log("nome: " + nome);

let dataNascimento = "08/01/2002";
let idade = 21;

console.log("dataNascimento: " + typeof(dataNasciment));


//obj

var pessoa = {
    nome: "alan",
    dataNascimento: "08/01/2002",
    endereco: "algum lugar",
    cpf: "000.000.000-00",
};

console.log(`o ${pessoa.nome} nasceu em ${pessoa.dataNascimento} e mora em ${pessoa.endereco}`);

var lista = ["sc", "sp", "pr"];

var estado = {
    sc:"Santa Catarina",
    sp:"São Paulo",
    pr:"Paraná"
};

for (chave in estado) {
    console.log(chave);
}

for (chave of lista) {
    console.log(chave +": " +estado[chave]);    
}

function imprimir(elemento) {
    console.log("-> "+elemento);
}

lista.forEach(imprimir);

var x = 10;

console.log(x === '10' ? "igual" : "não igual");