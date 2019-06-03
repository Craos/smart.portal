let FormPerfil = function () {

    $.ajax('./html/unidade/form_perfil.html',
        {
            type: 'GET',
            data: {},
            success: function (data) {

                $(".error_msg").text(data);

                let div1 = document.createElement('div');
                div1.innerHTML = data;
                document.getElementById('maincontainer').innerHTML = div1.innerHTML;

                let moradores = new FormMoradores();
                moradores.ListaMoradores();

                let listaperfiloperacoes = [
                    {
                        id: 1,
                        Nome: "Perfil",
                        src: 'img/menuleft/comunicados.png',
                        container: '#perfil'
                    },
                    {
                        id: 2,
                        Nome: "Conta de acesso",
                        src: 'img/menuleft/eventos.png',
                        container: '#conta'
                    },
                    {
                        id: 3,
                        Nome: "Emails",
                        src: 'img/menuleft/assembleias.png',
                        container: '#emails'
                    },
                    {
                        id: 4,
                        Nome: "Notificações",
                        src: 'img/menuleft/manutencoes.png',
                        container: '#chnotificacoes'
                    }
                ];

                let lista = new dhtmlXList({
                    container: document.getElementById('lista-cadastros'),
                    type: {
                        template: "<img class='menu-perfil-img' alt='#Nome#' src='#src#'><span>#Nome#</span>",
                        height: 40
                    },
                });

                lista.parse(listaperfiloperacoes, 'json');

                lista.attachEvent("onItemClick", function (id) {
                    $('.alt').hide();
                    $(lista.get(id).container).show(300);
                    return true;
                });

                document.getElementById('atualizarperfil').addEventListener('click', AtualizarPerfil);

                hidePopup();

            }
        }
    );

    function AtualizarPerfil() {
        $('sucesso').show(300);
    }

};