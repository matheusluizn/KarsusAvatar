document.write('')

//Escrevendo no documento

// Declarando variáveis de stats dos personagens
var charList = ['electra','abigail','zion'];

var charStats = [
	['electra',[40,70,60,30],[['Golpe nas Sombras', 12], ['Flecha Amaldiçoada',13], ['Vitalidade Sombria',10], ['Velocidade Inalcançável: Sandálias de Hermes',0]] ],
	['abigail',[30,50,90,30],[ ['Bola de Fogo',10], ['Chamas Negras',10], ['Meteoro das Sombras',10], ['Golpe Furtivo: Capa da Invisibilidade',0]] ],
	['zion',[80,40,40,40], [ ['Golpe Sombrio',10], ['Sifão da Morte',10], ['Pacto Sombrio',10], ['Lâmina Arrebatadora: Excalibur',10]]]	
]

var enemyStats = [
	['gizem',[50,10,70,40],[['Golpe nas Sombras',10], ['Flecha Amaldiçoada',10], ['Ultimo Suspiro',10]]],
	['faceless',[60,10,80,20],['Míssil Arcano', 'Confusão', 'Inumano']],
	['karsus',[80,50,100+20,10], ['Golpe Multidimencional', 'Buraco Negro', 'Tomo do Poder']]	
]

// Criando stats dos personagens

class Guerreiro{
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

function capitalize(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}

//Funções do sistema de combate

function spawnar(listaChar, indexChar){
let c = listaChar[indexChar];
var personagemPrincipal = new Guerreiro(c[0], c[1][0] * 20, (c[1][1] + c[1][3]/2)  * 0.5, c[1][1] + c[1][2] * 1.3, c[1][3] * 0.5, c[2]);
return personagemPrincipal; 
}


function ataque(habilidade, atacante, receiver){
	
	var comment = document.getElementById('comentarios');
	comment.innerHTML = `O lutador ${capitalize(atacante.nome)} utilizou a habilidade ${habilidade[0]}!`;
	
	if(Math.random() < receiver.esquiva){

		let poder = atacante.dano/4 * Math.floor(Math.random()*habilidade[1]);
		console.log(poder, atacante.nome)

		receiver.hp -= Math.floor(poder);

		document.getElementById(receiver.nome).innerHTML = `${receiver.hp}/${receiver.fullhp}`;  
	} else{
		comment.innerHTML = `<p> O combatente ${capitalize(receiver.nome)} desviou do ataque!</p>`;
	}
	document.getElementById('hp1').value = inimigo.hp;
	document.getElementById('hp2').value = principal.hp;
	checarVencedor(receiver.hp);
};


function checarVencedor(hp){
	if(principal.hp == 0){
		document.getElementById(principal.nome).innerHTML = `0/${principal.fullhp}`
	} else if(inimigo.hp == 0){
		document.getElementById(principal.nome).innerHTML = `0/${inimigo.fullhp}`
	} 

}

var principal = spawnar(charStats, charList.indexOf(window.localStorage.getItem('char')));

document.getElementById('nomeChar').innerHTML = capitalize(principal.nome);
document.getElementById('hp2').max = principal.fullhp;
document.getElementById('hp2').value = principal.hp;
var hp1 = document.createElement('p');
hp1.innerHTML = `${principal.hp}/${principal.fullhp}`;
hp1.id = principal.nome;
document.getElementById('hpChar').appendChild(hp1);


//infos inimigo
var inimigo = spawnar(enemyStats,0);
document.getElementById('TituloBatalha').innerHTML = capitalize(inimigo.nome);
document.getElementById('hp1').max = inimigo.fullhp;
document.getElementById('hp1').value = inimigo.hp;

var hp2 = document.createElement('p');
hp2.innerHTML = `${inimigo.hp}/${inimigo.fullhp}`;
hp2.id = inimigo.nome;
document.getElementById('hpEnemy').appendChild(hp2);



//Escolha de ataque no prompt
function escolherAtaque(){
	var escolha = prompt(`Escolha o número do seu ataque, ${window.localStorage.getItem('nome')}`);
	if (escolha == 1){
		ataque(principal.habilidades[0], principal, inimigo);
		setTimeout(ataque,2000,inimigo.habilidades[1], inimigo, principal);
	} else if (escolha == 2){
		ataque(principal.habilidades[1], principal, inimigo);
		setTimeout(ataque,2000,inimigo.habilidades[1], inimigo, principal);
	} else if (escolha == 3){
		ataque(principal.habilidades[2], principal, inimigo);
		setTimeout(ataque,2000,inimigo.habilidades[1], inimigo, principal);
	} else if (escolha == 4){
		ataque(principal.habilidades[3], principal, inimigo);
		setTimeout(ataque,2000,inimigo.habilidades[1], inimigo, principal);
	} else{
		alert('Esse ataque não existe! Por favor selecione novamente.')
		escolherAtaque();
	}

}



//Declarando Páginas 

//Chamando funções

document.write()