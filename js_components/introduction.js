
var listaChar = ['electra','abigail','zion'];
	
	if(window.localStorage.getItem('nome') != undefined){
			document.getElementById('identificação').style.display = 'none';
			telaInicial();
		} else{
			document.getElementById('identificação').style.display = 'flex';
		}

	var textoCont = 0;

	var textoIntrodução1 = 'Seja bem vindo ao planeta Toril, '+ window.localStorage.getItem('nome')+'. Nós, habitantes desse universo estamos sofrendo bastante. Eu, criador deste universo, prevejo uma crise eminente gerada pela ganância de um homem. Esse ser está tentando mexer com o tecido mágico que compõe toda a energia vital dos seres vivos de nosso universo.';

	var textoIntrodução2 = 'Este homem é um Archimago, e deseja utilizar todo o conhecimento escondido na cidade de Netheril para roubar os poderes dos deuses e se tornar o mago mais poderoso do mundo.'
	//var textoIntrodução2 = 'Pactos podem ocorrer por necessidade, fome de conhecimento ou por poderes herdados hereditariamente.';

	var textoIntrodução3 = 'Para combater esse ser maligno convoquei-lhe e selecionei 3 bruxos altamente poderosos para que sejam guiados por você.';
	//var textoIntrodução3 = 'Os pactos são feitos juntamente com entidades extremamente poderosas denominadas Patronos. Nesse pacto elas concedem um pouco de seu poder e sabedoria em troca de respeito e servitude eterna.';
	var textoIntrodução4 = window.localStorage.getItem('nome')+ ', eu clamo a ti que escolha seu bruxo preferido e acabe com as atrocidades que virão!';

	var textoIntrodução5 = "Não se preocupe! Antes da nossa aventura começar eu vou te levar ao deus Patrono dos Bruxos, N'Zoth, e lá todas as suas dúvidas sobre este mundo serão sanadas. Muito obrigado pela ajuda,"+window.localStorage.getItem('nome')+'!'; 


	var textoNzoth1 = 'Mortal imundo! O que faz no meu plano, ser inferior?'

	var textoNzoth2 = 'Espere! Você deve ser o ser que o criador deste universo patético enviou para parar os planos malignos de Karsus, não é mesmo?'
	var textoNzoth3 = 'Seu nome é '+ window.localStorage.getItem('nome')+ ', se eu não me engano. Quer dizer, EU NUNCA ME ENGANO! HAHAHAH!'

	var textoNzoth4 = 'Então, ser pútrido de abjeta fedentida, eu irei explicar os detalhes sobre o vasto mundo de Toril e cidade mágica de Netheril!';

	var textoNzoth5 = 'Netheril é uma cidade flutuante que se situa no norte do continente de Faerûm.';

	var textoNzoth6 = 'Nessa cidade existem hierarquias que são definidas pelas suas habilidades em magia, e vários magos prepotentes disputam em combates até chegar ao topo. O campeão permanente e dono da cidade é o Archimago Karsus.';

	var textoNzoth7 = 'Karsus é um ser humano extremamente formidável, e está utilizando todo o ouro gerado pela cidade para criar um feitiço capaz de robar o poder dos deuses. Para manter a hierarquia firme ele promove batalhas de magia sazonalmente, e é aí que o seu papel se desenvolve.';
	var textoNzoth8 = window.localStorage.getItem('nome')+', sua missão é se infiltrar neste torneio e derrotar o grande mago Karthus. Ao derrotá-lo. Você terá em seu arsenal 3 de meus lacaios bruxos mais devotos, e assim poderá pedir meu auxílio sempre quando necessário.'; 
	var textoNzoth9 = 'A seguir escolha entre os bruxos Abigail, Zion e Electra. Os 3 são bruxos formidáveis e com sua ajuda poderão dar conta de qualquer serviço, mas cuidado, cada um carrega uma arma especial e característica diferente. Escolha Sabiamente!';


	// BOTAO DE TROCA DE BRUXOS
	function verBruxo(aparecer,ba,bb){
		 document.querySelector(aparecer).style.display = 'flex';
		document.querySelector(ba).style.display = 'none';
		 document.querySelector(bb).style.display = 'none';
	}

	//BOTAO ESCOLHER PERSONAGEM
	function escolherChar(){
		var char = prompt('Escolha entre os bruxos 1, 2 ou 3! Você também pode digitar o nome deles')
		if (char == 1){
			window.localStorage.setItem('char', 'electra')
			window.location.replace("etapa2.html")
		}else  if (char == 2){
			window.localStorage.setItem('char', 'abigail')
			window.location.replace("etapa2.html")
		} else  if (char == 3){
			window.localStorage.setItem('char', 'zion')
			window.location.replace("etapa2.html")
		} else if(typeof char == 'string'){
			  if(listaChar.includes(char.toLowerCase())){ 
					window.localStorage.setItem('char',char.toLowerCase())
					window.location.replace("etapa2.html");
				} else alert('Você digitou errado! Por favor digite novamente o bruxo escolhido!')
		} else{
			alert('Você digitou errado! Por favor digite novamente o bruxo escolhido!')
		}
	}

	function limparTexto(){
		document.querySelector('#textoIntrodução').innerHTML = '';
	}

	function escreverDevagar(idElemento, intervalo, texto) {
	let ts = texto.split('');
	var d = document.getElementById(idElemento);
	var intervalow = setInterval(()=>{
		if(!ts.length){
			clearInterval(intervalow)
			setTimeout(()=>{d.innerHTML = ''; return next();}, 4000);
		} else{
			var char = ts.shift();
			d.innerHTML += char;
		}
	}, intervalo);
	
}
function next(){
	textoCont++;
	if (textoCont == 1){
		escreverDevagar('textoIntrodução', 70, textoIntrodução2)
	} else if (textoCont == 2){
		escreverDevagar('textoIntrodução', 70, textoIntrodução3)
	} else if (textoCont == 3){
		escreverDevagar('textoIntrodução', 70,textoIntrodução4)
	} else if (textoCont == 4){
		escreverDevagar('textoIntrodução', 70,textoIntrodução5)
	} else if (textoCont == 5){
		pausarAudios('#introdução');
		loopMusica('#nzoth');
		document.getElementById('introducao').style.backgroundImage = "url('./img/introImgs/deuspolvo.jpg')";
		escreverDevagar('textoIntrodução', 70,textoNzoth1);
	} else if (textoCont == 6){
		escreverDevagar('textoIntrodução', 70,textoNzoth2)
	} else if (textoCont == 7){
		escreverDevagar('textoIntrodução', 70,textoNzoth3)
	} else if (textoCont == 8){
		escreverDevagar('textoIntrodução', 70,textoNzoth4)
	} else if (textoCont == 9){
		escreverDevagar('textoIntrodução', 70,textoNzoth5)
	} else if (textoCont == 10){
		escreverDevagar('textoIntrodução', 70,textoNzoth6)
	} else if (textoCont == 11){
		escreverDevagar('textoIntrodução', 70,textoNzoth7)
	} else if (textoCont == 12){
		escreverDevagar('textoIntrodução', 70,textoNzoth8)
	} else if (textoCont == 13){
		escreverDevagar('textoIntrodução', 70,textoNzoth9)
	} else if (textoCont == 14){
		escolhaPersonagem();
	}
}

	function loopMusica(id){
		document.querySelector(id).loop = 'true';
		document.querySelector(id).play();
	}

	function pausarAudios(id){
		document.querySelector(id).pause();
	}

	
	function guardarNome(){

		let n = document.getElementById('nomeJogador').value;
		if(n.length == 0){ 
			console.log('Você não escreveu nada')
		} else {
			window.localStorage.setItem('nome', n); 
			location.reload();
		}
		
	}

	function piscarElemento(elemento, tempo){
		setInterval(()=>{ elemento.hidden = !elemento.hidden }, tempo);
	}


	function proximoDiv(ant, prox){
		document.getElementById(ant).style.display = 'none';
		document.getElementById(prox).style.display = 'flex';

	}


	function telaInicial(){
		document.querySelector('.startButton').hidden = true;
		document.getElementById('telaInicial').style.display = 'flex';
		// Música de Abertura
		loopMusica('#abertura');
		// Escurecimento Tela CSS JS
		let contShadow = 0;
 		let tela = document.getElementById('telaInicial');
 		var intervalo = setInterval(()=>{
 		if (contShadow >= 0.8){
 		tela.style.boxShadow = 'inset 0 0 0 1000px rgba(0,0,0,'+contShadow+')';
 		clearInterval(intervalo);
 			} else {
 		tela.style.boxShadow = 'inset 0 0 0 1000px rgba(0,0,0,'+contShadow+')';
 		contShadow += 0.01;
 		}}, 70);
	
 		setTimeout(()=>{
 				piscarElemento(document.querySelector('.startButton'), 400);
 		},2000);
	}

	function introducao(){

		pausarAudios('#abertura');
		loopMusica('#introdução');
		proximoDiv('telaInicial', 'introducao');
		escreverDevagar('textoIntrodução', 50, textoIntrodução1);
	}

	function escolhaPersonagem(){
		pausarAudios('#nzoth');
		loopMusica('#escolheChar');
		proximoDiv('introducao','escolhaPersonagem');


	}
