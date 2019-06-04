let loggedUser, popupObj = new dhtmlXPopup();

(function () {

    console.info('Verticals Versão 1.0');

    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(function (user) {

        loggedUser = user;
        if (user)
            UsuarioLogado(user);

    });

    $("#inicio").bind("click", MainFeeds);
    $("#correios, #notificacoes, #ajuda, #login").bind("click", function () {
        showPopup(this);
    });

    new MainFeeds();


})();

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

        case 'login':
            target = LoginSet();
            break;
    }

    let x = window.dhx.absLeft(inp) + (inp.clientWidth / 2);
    let y = window.dhx.absTop(inp) + (inp.clientHeight - 7);
    let width = target.offsetWidth;
    let height = target.offsetHeight;

    popupObj.show(x, y, width, height);
}

let UsuarioLogado = function (user) {

    console.clear();
    user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
    });

    document.getElementById('correiosnologin').style.display = 'none';
    document.getElementById('correiosnomsg').style.display = 'block';
    document.getElementById('notificacoesnologin').style.display = 'none';
    document.getElementById('notificacoesnomsg').style.display = 'block';
    document.getElementById('nomecompleto').textContent = user.displayName;
    document.getElementById('primeironome').textContent = user.displayName.split(' ')[0];
    document.getElementById('nomecompleto').addEventListener("click", teste);

    function teste() {
        console.clear();
        console.debug(this);
    }

    if (user.photoURL) {
        var photoURL = user.photoURL;
        if ((photoURL.indexOf('googleusercontent.com') !== -1) || (photoURL.indexOf('ggpht.com') !== -1)) {
            photoURL = photoURL + '?sz=' + document.getElementById('imgperfil').clientHeight;
        }

        $('#user-cicle').hide();
        document.getElementById('usertb').src = photoURL;
        $('#usertb').show(300);
        document.getElementById('imgperfil').src = photoURL;
    }

    new MainFeeds();
};

function LoginSet() {

    let target;

    if (loggedUser) {

        target = document.getElementById('popupUnidade');
        popupObj.attachHTML(target.innerHTML);

    } else {

        target = document.getElementById('popupLogin');
        popupObj.attachHTML(target.innerHTML);

        $("#google, #face, #email").bind("click", function () {

            if (this.id === 'google') {

                let provider = new firebase.auth.GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

                firebase.auth().languageCode = 'pt';
                firebase.auth().signInWithRedirect(provider);
                firebase.auth().getRedirectResult().then(function (result) {
                    if (result.credential) {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = result.credential.accessToken;
                        console.debug(token);
                        // ...
                    }
                    // The signed-in user info.
                    var user = result.user;

                    console.debug(user);

                }).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                });


            } else if (this.id === 'face') {

                let provider = new firebase.auth.FacebookAuthProvider();
                provider.addScope('public_profile');
                provider.addScope('email');

                firebase.auth().languageCode = 'pt';
                firebase.auth().signInWithRedirect(provider);
                firebase.auth().getRedirectResult().then(function (result) {
                    if (result.credential) {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = result.credential.accessToken;
                        console.debug(token);
                        // ...
                    }
                    // The signed-in user info.
                    var user = result.user;

                    console.debug(user);

                }).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                });


            } else if (this.id === 'email') {
                window.location = 'auth';
            }

        });


    }

    return target;

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