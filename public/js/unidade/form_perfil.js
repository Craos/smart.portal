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

                let opcoes = [
                    {
                        id: 0,
                        Nome: "Perfil",
                        src: 'img/menuleft/comunicados.png'
                    },
                    {
                        id: 1,
                        Nome: "Acesso",
                        src: 'img/menuleft/eventos.png'
                    },
                    {
                        id: 2,
                        Nome: "Emails",
                        src: 'img/menuleft/assembleias.png'
                    },
                    {
                        id: 3,
                        Nome: "Emails",
                        src: 'img/menuleft/manutencoes.png'
                    }
                ];

                let lista = new dhtmlXList({
                    container: document.getElementById('lista-cadastros'),
                    type: {
                        template: "<img class='menu-perfil-img' alt='#Nome#' src='#src#'><span>#Nome#</span>",
                        height: 40
                    },
                });

                lista.parse(opcoes, 'json');

                hidePopup();

            }
        }
    );


};