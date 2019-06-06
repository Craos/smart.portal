let MainFeeds = function () {

    let listaitenscondominio = [
        {
            id: 1,
            Nome: "Comunicados",
            img: 'fas fa-bell',
            form: 'page_comunicados.html',
        },
        {
            id: 2,
            Nome: "Eventos",
            img: 'far fa-calendar-alt',
            form: 'page_eventos.html',
        },
        {
            id: 3,
            Nome: "Assembléias",
            img: 'fas fa-users',
            form: 'page_comunicados.html',
        },
        {
            id: 4,
            Nome: "Manutenções",
            img: 'fas fa-tools',
            form: 'page_manutencoes.html',
        },
        {
            id: 5,
            Nome: "O condomínio",
            img: 'fas fa-building',
            form: 'page_condominio.html',
        },
        {
            id: 6,
            Nome: "Regimentos",
            img: 'fas fa-pencil-ruler',
            form: 'page_regimento.html',
        },
        {
            id: 7,
            Nome: "Campanhas",
            img: 'fas fa-ribbon',
            form: 'page_campanhas.html',
        },
    ];

    let listaitensunidade = [
        {
            id: 1,
            Nome: "Solicitações",
            img: 'fas fa-chalkboard-teacher',
            form: 'form_solicitacoes.html',
        },
        {
            id: 2,
            Nome: "Reservas",
            img: 'far fa-calendar-check',
            form: 'form_reservas.html',
        },
        {
            id: 3,
            Nome: "Reformas",
            img: 'fas fa-hammer',
            form: 'form_reforma.html',
        },
        {
            id: 4,
            Nome: "Mudanças",
            img: 'fas fa-truck',
            form: 'form_mudanca.html',
        },
        {
            id: 5,
            Nome: "Correios",
            img: 'fas fa-envelope-open',
            form: 'form_correios.html',
        },
        {
            id: 6,
            Nome: "Notificações",
            img: 'fas fa-comment-alt',
            form: 'form_notificacoes.html',
        },
        {
            id: 7,
            Nome: "Aluguel",
            img: 'fas fa-handshake',
            form: 'form_aluguel.html',
        },
    ];

    $.ajax('./html/main.html',
        {
            type: 'GET',
            data: {},
            success: function (data) {
                $(".error_msg").text(data);

                let div1 = document.createElement('div');
                div1.innerHTML = data;
                document.getElementById('maincontainer').innerHTML = div1.innerHTML;

                PreparaMenuLateral();

                let urls = [
                    './html/feeds/artigo1.html',
                    './html/feeds/artigo2.html',
                    './html/feeds/artigo3.html'
                ];

                $.each(urls, function (i, u) {
                    $.ajax(u,
                        {
                            type: 'GET',
                            data: {},
                            success: function (data) {
                                $(".error_msg").text(data);

                                let div1 = document.createElement('div');
                                div1.innerHTML = data;

                                $(div1).appendTo('#artigos').show(400);
                            }
                        }
                    );
                });
            }
        }
    );

    function PreparaMenuLateral() {

        let listainfocondominio = new dhtmlXList({
            container: document.getElementById('lista-info'),
            type: {
                template: "<i class='#img# menu-perfil-img'></i><span>#Nome#</span>",
                height: 40
            },
        });
        listainfocondominio.parse(listaitenscondominio, 'json');

        let listaoperacoesunidade = new dhtmlXList({
            container: document.getElementById('lista-opunidade'),
            type: {
                template: "<i class='#img# menu-perfil-img'></i><span>#Nome#</span>",
                height: 40
            },
        });
        listaoperacoesunidade.parse(listaitensunidade, 'json');

        listainfocondominio.attachEvent("onItemClick", function (id) {
            AoSelecionar(id);
            return true;
        });

        listaoperacoesunidade.attachEvent("onItemClick", function (id) {
            AoSelecionar(id);
            return true;
        });

    }

    function AoSelecionar(id) {

        if (loggedUser) {

            id = parseInt(id);
            let item = listaitenscondominio.filter(function (item) {
                return (item.id === id) ? item : null;
            });

            if (item.length > 0) {
                AbreItem(item[0]);
            }

        } else {
            Abrepaginadelogin();
        }

    }

    function AbreItem(item) {

        $.ajax('./html/page_condominio/'+item.form,
            {
                type: 'GET',
                data: {},
                success: function (data) {
                    $('#artigos').html(data);

                }
            }
        );

    }


};