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
                                        src: 'fas fa-bell'
                                    },
                                    {
                                        id: 1,
                                        Nome: "Eventos",
                                        src: 'far fa-calendar-alt'
                                    },
                                    {
                                        id: 2,
                                        Nome: "Assembléias",
                                        src: 'fas fa-users'
                                    },
                                    {
                                        id: 3,
                                        Nome: "Manutenções",
                                        src: 'fas fa-tools'
                                    },
                                    {
                                        id: 4,
                                        Nome: "O condomínio",
                                        src: 'fas fa-building'
                                    },
                                    {
                                        id: 5,
                                        Nome: "Regimentos",
                                        src: 'fas fa-pencil-ruler'
                                    },
                                ];

                                let listaitensunidade = [
                                    {
                                        id: 0,
                                        Nome: "Solicitações",
                                        src: 'fas fa-chalkboard-teacher'
                                    },
                                    {
                                        id: 1,
                                        Nome: "Reservas",
                                        src: 'far fa-calendar-check'
                                    },
                                    {
                                        id: 3,
                                        Nome: "Reformas",
                                        src: 'fas fa-hammer'
                                    },
                                    {
                                        id: 4,
                                        Nome: "Mudanças",
                                        src: 'fas fa-truck'
                                    },
                                    {
                                        id: 5,
                                        Nome: "Correios",
                                        src: 'fas fa-envelope-open'
                                    },
                                    {
                                        id: 6,
                                        Nome: "Notificações",
                                        src: 'fas fa-comment-alt'
                                    },
                                    {
                                        id: 7,
                                        Nome: "Aluguel",
                                        src: 'fas fa-handshake'
                                    },
                                ];

                                    let listainfocondominio = new dhtmlXList({
                                    container: document.getElementById('lista-info'),
                                    type: {
                                        template: "<i class='#src# menu-perfil-img' alt='#Nome#' src='#src#'></i><span>#Nome#</span>",
                                        height: 40
                                    },
                                });
                                listainfocondominio.parse(listaitenscondominio, 'json');

                                let listaoperacoesunidade = new dhtmlXList({
                                    container: document.getElementById('lista-opunidade'),
                                    type: {
                                        template: "<i class='#src# menu-perfil-img' alt='#Nome#' src='#src#'></i><span>#Nome#</span>",
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