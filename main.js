function removecard(botao) {
    botao.closest('.col-md-4').remove();
}

function addcard() {
    let t = document.getElementById('tCard').value;
    let coluna = document.createElement('div');
    coluna.classList.add('col-md-4', 'mb-4');
    if (t != "")
    {
        coluna.innerHTML = `
        <div class="card">
            <img src="https://picsum.photos/150/150?random=${Math.random()}" class="card-img-top" alt="">
            <div class="card-body d-flex align-items-center flex-column">
                <h5 class="card-title">${t}</h5>
                <button class="btn btn-danger" onclick="removecard(this)">Remover</button>
            </div>
        </div>
    `;
    let container = document.getElementById('card');
    container.appendChild(coluna);
    document.getElementById('tCard').value = "";
    }
    else {
        window.alert("Digite um título!")
    }
}

function clearall() {
    const container = document.getElementById('card');
    container.innerHTML = ""; 
}