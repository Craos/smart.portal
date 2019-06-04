let MainFeeds = function () {

    $.ajax('./html/main.html',
        { type: 'GET',
            data: {
            },
            success: function (data) {
                $(".error_msg").text(data);

                let div1 = document.createElement('div');
                div1.innerHTML = data;
                document.getElementById('maincontainer').innerHTML = div1.innerHTML;


                let urls = [
                    './html/feeds/artigo1.html',
                    './html/feeds/artigo2.html',
                    './html/feeds/artigo3.html'
                ];

                $.each(urls, function(i,u){
                    $.ajax(u,
                        { type: 'GET',
                            data: {
                            },
                            success: function (data) {
                                $(".error_msg").text(data);

                                let div1 = document.createElement('div');
                                div1.innerHTML = data;

                                $(div1).appendTo('#artigos').show(400);


                                let listaitenscondominio = [
                                    {
                                        id: 0,
                                        Nome: "Comunicados",
                                        src: 'img/menuleft/comunicados.png'
                                    },
                                    {
                                        id: 1,
                                        Nome: "Eventos",
                                        src: 'img/menuleft/eventos.png'
                                    },
                                    {
                                        id: 2,
                                        Nome: "Assembléias",
                                        src: 'img/menuleft/assembleias.png'
                                    },
                                    {
                                        id: 3,
                                        Nome: "Manutenções",
                                        src: 'img/menuleft/manutencoes.png'
                                    },
                                    {
                                        id: 4,
                                        Nome: "O condomínio",
                                        src: 'img/menuleft/condominio.png'
                                    },
                                    {
                                        id: 5,
                                        Nome: "Regimentos",
                                        src: 'img/menuleft/regimento.png'
                                    },
                                ];

                                let listaitensunidade = [
                                    {
                                        id: 0,
                                        Nome: "Solicitações",
                                        src: 'img/menuleft/solicitacoes.png'
                                    },
                                    {
                                        id: 1,
                                        Nome: "Reservas",
                                        src: 'img/menuleft/reserva.png'
                                    },
                                    {
                                        id: 3,
                                        Nome: "Reformas",
                                        src: 'img/menuleft/reforma.png'
                                    },
                                    {
                                        id: 4,
                                        Nome: "Mudanças",
                                        src: 'img/menuleft/mudanca.png'
                                    },
                                    {
                                        id: 5,
                                        Nome: "Correios",
                                        src: 'img/menuleft/correios.png'
                                    },
                                    {
                                        id: 6,
                                        Nome: "Notificações",
                                        src: 'img/menuleft/notificacoes.png'
                                    },
                                    {
                                        id: 7,
                                        Nome: "Aluguel",
                                        src: 'img/menuleft/aluguel.png'
                                    },
                                ];

                                    let listainfocondominio = new dhtmlXList({
                                    container: document.getElementById('lista-info'),
                                    type: {
                                        template: "<img class='menu-perfil-img' alt='#Nome#' src='#src#'><span>#Nome#</span>",
                                        height: 40
                                    },
                                });
                                listainfocondominio.parse(listaitenscondominio, 'json');

                                let listaoperacoesunidade = new dhtmlXList({
                                    container: document.getElementById('lista-opunidade'),
                                    type: {
                                        template: "<img class='menu-perfil-img' alt='#Nome#' src='#src#'><span>#Nome#</span>",
                                        height: 40
                                    },
                                });
                                listaoperacoesunidade.parse(listaitensunidade, 'json');

                            }
                        }
                    );
                });
            }
        }
    );


};