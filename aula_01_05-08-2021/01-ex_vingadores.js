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

// Comparação entre personagens (laço de repetição)
personagens.forEach(personagem => {
    console.log('----------------------------------------------');
    console.log(`Descrição: ${personagem.codinome}`);
    console.log(personagem.descricao());

    for (let i = 0; i < personagens.length; i++) {
        if (personagem.nome !== personagens[i].nome) {
            let lutador1 = 0;
            let lutador2 = 0;
            console.log('----------------------------------------------');
            console.log(`Descrição: ${personagens[i].codinome}`);
            console.log(personagens[i].descricao());
            console.log('+--------------------------------------------+');
            console.log('| ' + personagem.codinome + ' x ' + personagens[i].codinome);

            if (personagem.forca > personagens[i].forca) {
                console.log(
                    `| Força: ${personagem.forca} x ${personagens[i].forca} - ${personagem.codinome} vence`
                );
                lutador1 += 1;
            } else if (personagem.forca < personagens[i].forca) {
                console.log(
                    `| Força: ${personagem.forca} x ${personagens[i].forca} - ${personagens[i].codinome} vence`
                );
                lutador2 += 1;
            } else {
                console.log(
                    `| Força: ${personagem.forca} x ${personagens[i].forca} - Empate!`
                );
            }

            if (personagem.velocidade > personagens[i].velocidade) {
                console.log(
                    `| Velocidade: ${personagem.velocidade} x ${personagens[i].velocidade} - ${personagem.codinome} vence`
                );
                lutador1 += 1;
            } else if (personagem.velocidade < personagens[i].velocidade) {
                console.log(
                    `| Velocidade: ${personagem.velocidade} x ${personagens[i].velocidade} - ${personagens[i].codinome} vence`
                );
                lutador2 += 1;
            } else {
                console.log(
                    `| Velocidade: ${personagem.velocidade} x ${personagens[i].velocidade} - Empate!`
                );
            }

            if (personagem.resistencia > personagens[i].resistencia) {
                console.log(
                    `| Resistência: ${personagem.resistencia} x ${personagens[i].resistencia} - ${personagem.codinome} vence`
                );
                lutador1 += 1;
            } else if (personagem.resistencia < personagens[i].resistencia) {
                console.log(
                    `| Resistência: ${personagem.resistencia} x ${personagens[i].resistencia} - ${personagens[i].codinome} vence`
                );
                lutador2 += 1;
            } else {
                console.log(
                    `| Resistência: ${personagem.resistencia} x ${personagens[i].resistencia} - Empate!`
                );
            }

            if (lutador1 > lutador2) {
                console.log(`| - Resultado final: ${personagem.codinome} vence`);
            } else if (lutador1 < lutador2) {
                console.log(`| - Resultado final: ${personagens[i].codinome} vence`);
            } else {
                console.log('| - Resultado final: Deu empate!');
            }

            console.log('+--------------------------------------------+');
        }
    }
});