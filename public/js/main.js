let loggedUser;

// Inicialize o FirebaseUI Widget usando o Firebase.
let ui = new firebaseui.auth.AuthUI(firebase.auth());

// Desabilita o auto-sign in.
ui.disableAutoSignIn();

(function () {

    console.info('Verticals Versão 1.0');

    let login = document.getElementById('login');


    firebase.auth().onAuthStateChanged(function (user) {
        loggedUser = user;
        if (user === null) {

            login.classList.add('visible');
            login.addEventListener('click', Exibelogin);
        } else {
            UsuarioLogado(user);
        }
    });


})();


let popupObj = new dhtmlXPopup();

dhtmlxEvent(window, 'load', function () {

    new SmartPortal();

});

function showPopup(inp) {

    let target;

    switch (inp.id) {

        case 'correios':
            target = document.getElementById('popupCorreiosOff');
            popupObj.attachHTML(target.innerHTML);
            break;

        case 'notificacoes':
            target = document.getElementById('popupNotificacoesOff');
            popupObj.attachHTML(target.innerHTML);
            break;

        case 'ajuda':
            target = document.getElementById('popupAjuda');
            popupObj.attachHTML(target.innerHTML);
            break;

        case 'tbusuario':
            target = document.getElementById('popupUnidade');
            popupObj.attachHTML(target.innerHTML);
            break;
    }

    let x = window.dhx.absLeft(inp)+(inp.clientWidth/2);
    let y = window.dhx.absTop(inp)+(inp.clientHeight-7);
    let width = target.offsetWidth;
    let height = target.offsetHeight;

    popupObj.show(x, y, width, height);
}

function hidePopup() {
    popupObj.hide();
}

function showForm(item) {

    switch (item.id) {

        case 'form_funcionarios':
            new FormFuncionarios().CarregaForm();
            break;

        case 'form_moradores':
            new FormMoradores().CarregaForm();
            break;

        case 'form_perfil':
            new FormPerfil();
            break;

        case 'form_pets':
            new FormPets().CarregaForm();
            break;

        case 'form_unidade':
            new FormUnidade();
            break;

        case 'form_veiculos':
            new FormVeiculos().CarregaForm();
            break;

        case 'form_visitantes':
            new FormVisitantes().CarregaForm();
            break;

        case 'form_sair':
            firebase.auth().signOut();
            new MainFeeds();
            break;

    }
}

let SmartPortal = function () {

    let that = this;

    let inicio =  document.getElementById('inicio');

    inicio.addEventListener('click', function () {
        new MainFeeds();
    });


    let correios =  document.getElementById('correios');

    correios.addEventListener('click', function () {
        showPopup(this);
    });

    correios.addEventListener('onblur', function () {
        hidePopup();
    });


    let notificacoes =  document.getElementById('notificacoes');

    notificacoes.addEventListener('click', function () {
        showPopup(this);
    });

    notificacoes.addEventListener('onblur', function () {
        hidePopup();
    });


    let ajuda =  document.getElementById('ajuda');

    ajuda.addEventListener('click', function () {
        showPopup(this);
    });

    ajuda.addEventListener('onblur', function () {
        hidePopup();
    });

    let tbusuario =  document.getElementById('tbusuario');

    if (tbusuario !== null) {
        tbusuario.addEventListener('click', function () {
            showPopup(this);
        });

        tbusuario.addEventListener('onblur', function () {
            hidePopup();
        });
    }

    this.ExibirArtigos = function () {
        new MainFeeds();
    };

    that.ExibirArtigos();

};