// Declarando variáveis de stats dos personagens
var charList = ['electra', 'abigail', 'zion'];

var charStats = [
	['electra', [40, 70, 60, 30], [['Golpe nas Sombras', 25], ['Flecha Amaldiçoada', 25], ['Vitalidade Sombria', 10], ['Velocidade Inalcançável: Sandálias de Hermes', 0]]],
	['abigail', [30, 50, 90, 30], [['Bola de Fogo', 10], ['Chamas Negras', 10], ['Meteoro das Sombras', 40], ['Golpe Furtivo: Capa da Invisibilidade', 0]]],
	['zion', [80, 40, 40, 40], [['Golpe Sombrio', 20], ['Sifão da Morte', 10], ['Pacto Sombrio', 10], ['Lâmina Arrebatadora: Excalibur', 40]]]
]

var enemyStats = [
	['gizem', [50, 10, 70, 40], [['Golpe nas Sombras', 10], ['Flecha Amaldiçoada', 10], ['Ultimo Suspiro', 20]]],
	["kael'thas", [60, 10, 80, 20], [['Tentaculo Mágico', 20], ['Míssil Arcano', 10], ['Míssil Arcano', 20]]],
	['karsus', [130, 50, 100 + 20, 10], [['Golpe Multidimencional', 15], ['Buraco Negro', 20], ['Míssil Arcano', 10]]]
]

// Criando stats dos personagens

class Guerreiro {
	constructor(nome, hp, esquiva, dano, critico, habilidades) {
		this.nome = nome;
		this.esquiva = esquiva;
		this.dano = dano;
		this.hp = hp;
		this.fullhp = hp;
		this.critico = critico;
		this.habilidades = habilidades;
	}
};

//primeira letra maiuscula

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

//Funções do sistema de combate

function spawnar(listaChar, indexChar){
	let c = listaChar[indexChar];
	var personagemPrincipal = new Guerreiro(c[0], c[1][0] * 20, (c[1][1] + c[1][3] / 2) * 0.5, c[1][1] + c[1][2] * 1.3, c[1][3] * 0.5, c[2]);
	return personagemPrincipal;
}


function ataque(habilidade, atacante, receiver){

	var comment = document.getElementById('comentarios');
	comment.innerHTML = `O lutador ${capitalize(atacante.nome)} utilizou a habilidade ${habilidade[0]}!`;

	if (Math.random() < receiver.esquiva) {

		let poder = atacante.dano / 4 * Math.floor(Math.random() * habilidade[1]);
		receiver.hp -= Math.floor(poder);

		document.getElementById(receiver.nome).innerHTML = `${receiver.hp}/${receiver.fullhp}`;
	} else {
		comment.innerHTML = `<p> O combatente ${capitalize(receiver.nome)} desviou do ataque!</p>`;
	}
	document.getElementById('hp1').value = inimigo.hp;
	document.getElementById('hp2').value = principal.hp;

	if(inimigo.hp <=0){
		vitoria();
	} else if( principal.hp <= 0){
		derrota();
	}

};

function desligarBotao(){
	var b = document.getElementById('botaoAtaque');
	b.disabled = true;
	setTimeout(()=>{
			b.disabled = false;
	}, 3000)
}

function loopMusica(id){
	document.querySelector(id).loop = 'true';
	document.querySelector(id).play();
}




