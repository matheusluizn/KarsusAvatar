document.getElementById('jogador').innerHTML = window.localStorage.getItem('nome')+' e '+capitalize(localStorage.getItem('char'));

if(window.localStorage.getItem('end') == 'w'){
    document.getElementById('true').style.display = 'flex';
} else if(window.localStorage.getItem('end') == 'l'){
    document.getElementById('false').style.display = 'flex';
    setTimeout(() => {
        location.replace('etapa2.html')
    }, 5000);
}



