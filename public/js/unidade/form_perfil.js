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
                    $('.sucesso').hide();
                    $('.falha').hide();
                    $('.alt').hide();
                    $(lista.get(id).container).show(300);
                    return true;
                });

                $("#atualizarperfil").bind("click", AtualizarPerfil);
                $("#atualizasenha").bind("click", AtualizarPerfil);
                $("#atualizaemailprimario").bind("click", AtualizarPerfil);
                $("#atualizaemailopcional").bind("click", AtualizarPerfil);
                $("#atualizaemailcorrespondencia").bind("click", AtualizarPerfil);

                $('#notificarmultas').on('change', AtualizaNotificacoes);
                $('#notificaregras').on('change', AtualizaNotificacoes);
                $('#notificaassembleias').on('change', AtualizaNotificacoes);
                $('#notificamanutencoes').on('change', AtualizaNotificacoes);

                popupObj.hide();

            }
        }
    );

    function AtualizarPerfil() {
        $('#sucesso').show(300);
    }

    function AtualizaNotificacoes() {
        $('#sucesso').show(300);
    }

};