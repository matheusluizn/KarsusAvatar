//declarando inimigos
var principal = spawnar(charStats, charList.indexOf(window.localStorage.getItem('char')));
document.getElementById('nomeChar').innerHTML = capitalize(principal.nome);
document.getElementById('hp2').max = principal.fullhp;
document.getElementById('hp2').value = principal.hp;
var hp1 = document.createElement('p');
hp1.innerHTML = `${principal.hp}/${principal.fullhp}`;
hp1.id = principal.nome;
document.getElementById('hpChar').appendChild(hp1);


//infos inimigo
var inimigo = spawnar(enemyStats,2);
document.getElementById('TituloBatalha').innerHTML = capitalize(inimigo.nome);
document.getElementById('hp1').max = inimigo.fullhp;
document.getElementById('hp1').value = inimigo.hp;
var hp2 = document.createElement('p');
hp2.innerHTML = `${inimigo.hp}/${inimigo.fullhp}`;
hp2.id = inimigo.nome;
document.getElementById('hpEnemy').appendChild(hp2);


//Função atacar
function escolherAtaque(){
    desligarBotao();
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



function vitoria(){
    hp2.innerHTML = `0/${inimigo.fullhp}`;
    alert(`Parabéns! Você venceu Karsus, ${capitalize(localStorage.getItem('nome'))}`);
    alert('A integridade deste universo foi mantida por você!');
    location.replace('etapa3.html');
};

function derrota(){
    hp1.innerHTML = `0/${principal.fullhp}`;
    alert(`Você foi derrotado, ${capitalize(localStorage.getItem('nome'))}, Karsus está livre para roubar o poder dos deuses!`);
    location.replace('index.html');
};

