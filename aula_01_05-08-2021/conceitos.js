// /**
//  * hoisting: pode declarar as variáveis depois de usar, elas serão trazidas
//  * para o topo (detecta var/let e etc e traz pra cima)
//  */

// // VERSÃO 1
// nome = 'Maby';
// console.log(nome);
// var nome;
// // console: Maby

// // VERSÃO 2 (declaração sofre hoisting, atribuição de valores não)
// console.log(nome);
// var nome;
// nome = 'Maby';
// // console: undefined

// // VERSÃO 2.1 (declarações sofrem hoisting, atribuições de valores não)
// if (n1 < n2) {
//     console.log('hehe');
// }

// var n1 = 10;
// var n2 = 20;
// // console: (sem retorno, não entra no if)

// /**
//  * VAR x LET
//  * VAR seria global, pode fugir dos escopos, já LET fica presa ao escopo
//  * em que foi declarada e não pode ser acessada fora dele
//  */

// if (true) {
//     var nome = 'Maby';
//     console.log(nome);
// }
// console.log(nome);
// // os dois log serão 'Maby'

// let nome = 'Maby';
// if (true) {
//     let nome = 'Maria';
//     console.log(nome);
// }
// console.log(nome);
// // console: Maria Maby

// /**
//  * CONST
//  * Quado se declara uma constante, já deve ser atribuído algum valor que
//  * será imutável
//  */

// const nome = 'Maby';

// /**
//  * TIPOS DE DADOS
//  */

// const apelido = 'Maby'; // String
// const idade = 19; // Number
// const baixinha = true; // Boolean
// const maria = { apelido: 'Maby', idade: 19, baixinha: true }; // Object
// const indefinido; // undefined / any

// function
const funcao = function() {
    console.log('Sou uma função');
};

function potencia(base, expoente) {
    return base ** expoente;
}

const pot = new Function('base, expoente', 'return base ** expoente');

console.log(funcao());
console.log(potencia(2, 3));
console.log(pot(2, 3));
// console: Sou uma função Undefined 8 8 (??????????????????)
// -> tinha uma função dentro de outra função (console.log(console.log('...')))
// mudar para:

const funcao = function() {
    return 'Sou uma função';
};

// objeto: tem atributos/propriedades e métodos/funções
// const eu = {
//   apelido: 'Maby',
//   idade: 19,
//   detalhe: function () {
//     return 'Apelido: ' + this.apelido + ' e idade: ' + this.idade;
//   },
// };

// console.log(eu.detalhe());