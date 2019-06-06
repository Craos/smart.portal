let MainFeeds = function () {

    let listafeeds = [
        {
            arquivo: './html/feeds/artigo1.html',
            titulo: 'O que caracteriza Alteração de Fachada do condomínio.',
            resumo:'Regras que devem ser seguidas para garantir a harmonia estética do condomínio',
            img:'./html/feeds/fachada_956_667.jpg',
            lancamento: '12/01/2019',
            origem: 'por: Oberdan Brito'
        },
        {
            arquivo: './html/feeds/artigo2.html',
            titulo: 'Guia sobre animais (cães, gatos,..) em condomínio.',
            resumo:'Cães circulando em áreas coletivas do condomínio e latindo durante a madrugada correspondem a aproximadamente 15% dos conflitos entre moradores.',
            img:'./html/feeds/cachorro_956_667.jpg',
            lancamento: '09/02/2019',
            origem: 'por: Marcos Freitas'
        },
        {
            arquivo: './html/feeds/artigo3.html',
            titulo: 'Guia sobre Barulho em Condomínios.',
            resumo:'Todas as informações necessárias sobre barulho de festa, de bagunça de criança nas áreas comuns em horários proibidos',
            img:'./html/feeds/barulho_956_667.jpg',
            lancamento: '18/03/2019',
            origem: 'por: Felipe Farsano'
        },
    ];

    let listaitenscondominio = [
        {
            id: 1,
            Nome: "Comunicados",
            img: 'fas fa-bell',
            arquivo: './html/page_condominio/page_comunicados.html',
        },
        {
            id: 2,
            Nome: "Eventos",
            img: 'far fa-calendar-alt',
            arquivo: './html/page_condominio/page_eventos.html',
        },
        {
            id: 3,
            Nome: "Assembléias",
            img: 'fas fa-users',
            arquivo: './html/page_condominio/page_comunicados.html',
        },
        {
            id: 4,
            Nome: "Manutenções",
            img: 'fas fa-tools',
            arquivo: './html/page_condominio/page_manutencoes.html',
        },
        {
            id: 5,
            Nome: "O condomínio",
            img: 'fas fa-building',
            arquivo: './html/page_condominio/page_condominio.html',
        },
        {
            id: 6,
            Nome: "Regimentos",
            img: 'fas fa-pencil-ruler',
            arquivo: './html/page_condominio/page_regimento.html',
        },
        {
            id: 7,
            Nome: "Campanhas",
            img: 'fas fa-ribbon',
            arquivo: './html/page_condominio/page_campanhas.html',
        },
    ];

    let listaitensunidade = [
        {
            id: 1,
            Nome: "Solicitações",
            img: 'fas fa-chalkboard-teacher',
            arquivo: './html/unidade/form_solicitacoes.html',
        },
        {
            id: 2,
            Nome: "Reservas",
            img: 'far fa-calendar-check',
            arquivo: './html/unidade/form_reservas.html',
        },
        {
            id: 3,
            Nome: "Reformas",
            img: 'fas fa-hammer',
            arquivo: './html/unidade/form_reforma.html',
        },
        {
            id: 4,
            Nome: "Mudanças",
            img: 'fas fa-truck',
            arquivo: './html/unidade/form_mudanca.html',
        },
        {
            id: 5,
            Nome: "Correios",
            img: 'fas fa-envelope-open',
            arquivo: './html/unidade/form_correios.html',
        },
        {
            id: 6,
            Nome: "Notificações",
            img: 'fas fa-comment-alt',
            arquivo: './html/unidade/form_notificacoes.html',
        },
        {
            id: 7,
            Nome: "Aluguel",
            img: 'fas fa-handshake',
            arquivo: './html/unidade/form_aluguel.html',
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
                PreparaArtigos();
                PreparaListaRecentes();


            }
        }
    );

    function PreparaArtigos() {

        $.each(listafeeds, function (i, u) {

            // Abre o arquivo com o artigo
            // TODO: Verificar o espaçamento entre os artigos
            if (i < 5) { // Limitado a 5 artigos na página principal
                $.ajax(u.arquivo,
                    {
                        type: 'GET',
                        data: {},
                        success: function (data) {

                            let div1 = document.createElement('div');
                            div1.innerHTML = data;
                            $(div1).appendTo('#artigos').show(400);
                        }
                    }
                );
            }

        });

    }

    function PreparaListaRecentes() {

        $.each(listafeeds, function (i, u) {

            if ('content' in document.createElement('template')) {

                let template = document.getElementById('itemartigorecente');

                let clon = template.content.cloneNode(true);
                clon.getElementById('imgitemartigo').src = u.img;

                let link = clon.getElementById('tituloartigosrecente');
                link.textContent = u.titulo;
                link.addEventListener('click', function () {
                    AbreItem(u);
                });

                clon.getElementById('artigosrecentesresumo').textContent = u.resumo;
                clon.getElementById('artigosorigem').textContent = 'Por ' + u.origem + ', em:' + u.lancamento;

                document.getElementById('artigosrecentes').appendChild(clon);

            }

        });


    }

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

        console.debug(item);

        $.ajax(item.arquivo,
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