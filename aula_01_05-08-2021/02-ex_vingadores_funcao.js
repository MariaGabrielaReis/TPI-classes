/**
 * Exercício de Fixação: Vindagores
 * Desenvolva um projeto, em JavaScript, para criar objetos que representem
 * personagens do universo Marvel, especificamente os vingadores.
 *
 * OBS: Você deve criar objetos para todos os super-heróis e seu principal
 * rival, o Thanos. Todos os personagens deverão ser colocados em um Array.
 *
 * Desenvolva um código que faça a comparação entre cada personagem, ou seja,
 * seus atributos. Utilize estruturas de repetição (ex: for) para percorrer
 * cada elemento do Array e fazer a comparação. Por fim, seu projeto deve
 * imprimir a descrição de cada personagem que esta sendo comparado e também
 * apontar onde um personagem “vence” (possui um valor maior)
 */

// Criação dos personagens
const personagens = [{
        nome: 'Steve Rogers',
        codinome: 'Capitão América',
        armaPrincipal: 'Escudo',
        armaSecundaria: 'Força',
        velocidade: 85, // de 0 a 100
        forca: 75, // de 0 a 100
        resistencia: 80, // de 0 a 100
        descricao: function() {
            return (
                `Nome do personagem: ${this.nome} \n` +
                `Codinome do personagem: ${this.codinome} \n` +
                `Arma principal: ${this.armaPrincipal} \n` +
                `Arma secundária: ${this.armaSecundaria} \n` +
                `Nível de força: ${this.forca} \n` +
                `Nível de velocidade: ${this.velocidade} \n` +
                `Nível de resistencia: ${this.resistencia}`
            );
        },
    },
    {
        nome: 'Tony Stark',
        codinome: 'Homem de Ferro',
        armaPrincipal: 'Dinheiro',
        armaSecundaria: 'Inteligência',
        velocidade: 100, // de 0 a 100
        forca: 80, // de 0 a 100
        resistencia: 40, // de 0 a 100
        descricao: function() {
            return (
                `Nome do personagem: ${this.nome} \n` +
                `Codinome do personagem: ${this.codinome} \n` +
                `Arma principal: ${this.armaPrincipal} \n` +
                `Arma secundária: ${this.armaSecundaria} \n` +
                `Nível de força: ${this.forca} \n` +
                `Nível de velocidade: ${this.velocidade} \n` +
                `Nível de resistencia: ${this.resistencia}`
            );
        },
    },
    {
        nome: 'Thor Odinson',
        codinome: 'Thor',
        armaPrincipal: 'Martelo',
        armaSecundaria: 'Raios',
        velocidade: 100, // de 0 a 100
        forca: 100, // de 0 a 100
        resistencia: 90, // de 0 a 100
        descricao: function() {
            return (
                `Nome do personagem: ${this.nome} \n` +
                `Codinome do personagem: ${this.codinome} \n` +
                `Arma principal: ${this.armaPrincipal} \n` +
                `Arma secundária: ${this.armaSecundaria} \n` +
                `Nível de força: ${this.forca} \n` +
                `Nível de velocidade: ${this.velocidade} \n` +
                `Nível de resistencia: ${this.resistencia}`
            );
        },
    },
    {
        nome: 'Bruce Banner',
        codinome: 'Hulk',
        armaPrincipal: 'Raiva',
        armaSecundaria: 'Inteligência',
        velocidade: 60, // de 0 a 100
        forca: 100, // de 0 a 100
        resistencia: 100, // de 0 a 100
        descricao: function() {
            return (
                `Nome do personagem: ${this.nome} \n` +
                `Codinome do personagem: ${this.codinome} \n` +
                `Arma principal: ${this.armaPrincipal} \n` +
                `Arma secundária: ${this.armaSecundaria} \n` +
                `Nível de força: ${this.forca} \n` +
                `Nível de velocidade: ${this.velocidade} \n` +
                `Nível de resistencia: ${this.resistencia}`
            );
        },
    },
    {
        nome: 'Natasha Romanoff',
        codinome: 'Viúva Negra',
        armaPrincipal: 'Artes Marciais',
        armaSecundaria: 'Sedução',
        velocidade: 40, // de 0 a 100
        forca: 50, // de 0 a 100
        resistencia: 30, // de 0 a 100
        descricao: function() {
            return (
                `Nome do personagem: ${this.nome} \n` +
                `Codinome do personagem: ${this.codinome} \n` +
                `Arma principal: ${this.armaPrincipal} \n` +
                `Arma secundária: ${this.armaSecundaria} \n` +
                `Nível de força: ${this.forca} \n` +
                `Nível de velocidade: ${this.velocidade} \n` +
                `Nível de resistencia: ${this.resistencia}`
            );
        },
    },
    {
        nome: 'Clint Barton',
        codinome: 'Gavião Arqueiro',
        armaPrincipal: 'Arco e Flecha',
        armaSecundaria: '',
        velocidade: 60, // de 0 a 100
        forca: 60, // de 0 a 100
        resistencia: 50, // de 0 a 100
        descricao: function() {
            return (
                `Nome do personagem: ${this.nome} \n` +
                `Codinome do personagem: ${this.codinome} \n` +
                `Arma principal: ${this.armaPrincipal} \n` +
                `Arma secundária: ${this.armaSecundaria} \n` +
                `Nível de força: ${this.forca} \n` +
                `Nível de velocidade: ${this.velocidade} \n` +
                `Nível de resistencia: ${this.resistencia}`
            );
        },
    },
    {
        nome: 'Thanos',
        codinome: 'Thanos',
        armaPrincipal: 'Jóias do infinito',
        armaSecundaria: 'Força',
        velocidade: 70, // de 0 a 100
        forca: 100, // de 0 a 100
        resistencia: 100, // de 0 a 100
        descricao: function() {
            return (
                `Nome do personagem: ${this.nome} \n` +
                `Codinome do personagem: ${this.codinome} \n` +
                `Arma principal: ${this.armaPrincipal} \n` +
                `Arma secundária: ${this.armaSecundaria} \n` +
                `Nível de força: ${this.forca} \n` +
                `Nível de velocidade: ${this.velocidade} \n` +
                `Nível de resistencia: ${this.resistencia}`
            );
        },
    },
];

// Comparação entre personagens (com função e laço de repetição)
const resultadoComparacao = (personagem1, personagem2) => {
    let personagem1Pontuacao = 0;
    let personagem2Pontuacao = 0;

    if (personagem1.forca > personagem2.forca) {
        personagem1Pontuacao += 1;
    } else if (personagem1.forca < personagem2.forca) {
        personagem2Pontuacao += 1;
    }

    if (personagem1.velocidade > personagem2.velocidade) {
        personagem1Pontuacao += 1;
    } else if (personagem1.velocidade < personagem2.velocidade) {
        personagem2Pontuacao += 1;
    }

    if (personagem1.resistencia > personagem2.resistencia) {
        personagem1Pontuacao += 1;
    } else if (personagem1.resistencia < personagem2.resistencia) {
        personagem2Pontuacao += 1;
    }

    if (personagem1Pontuacao > personagem2Pontuacao) {
        console.log(`| - Resultado final: ${personagem1.codinome} vence`);
    } else if (personagem1Pontuacao < personagem2Pontuacao) {
        console.log(`| - Resultado final: ${personagem2.codinome} vence`);
    } else {
        console.log('| - Resultado final: Deu empate!');
    }
};

personagens.forEach(personagem => {
    for (let i = 0; i < personagens.length; i++) {
        if (personagem.nome !== personagens[i].nome) {
            console.log('+--------------------------------------------+');
            console.log('| ' + personagem.codinome + ' x ' + personagens[i].codinome);

            console.log(`| Força: ${personagem.forca} x ${personagens[i].forca}`);
            console.log(
                `| Velocidade: ${personagem.velocidade} x ${personagens[i].velocidade}`
            );
            console.log(
                `| Resistência: ${personagem.resistencia} x ${personagens[i].resistencia}`
            );

            resultadoComparacao(personagem, personagens[i]);

            console.log('+--------------------------------------------+');
        }
    }
});