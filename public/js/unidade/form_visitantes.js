let FormVisitantes = function () {

    let that = this;

    this.CarregaForm = function () {
        $.ajax('./html/unidade/form_visitantes.html',
            { type: 'GET',
                data: {
                },
                success: function (data) {
                    $(".error_msg").text(data);

                    let div1 = document.createElement('div');
                    div1.innerHTML = data;
                    document.getElementById('maincontainer').innerHTML = div1.innerHTML;

                    popupObj.hide();

                }
            }
        );
    };

    this.ListaVisitantes = function () {

        let myList = new dhtmlXList({
            container:document.getElementById('lista-visitantes'),
            type:{
                template:"#Nome#<br/><span style='color: darkgrey'>#Tipocadastro#</span>"
            }
        });

        myList.add({
            Nome:"João Pedro",
            Tipocadastro:"Amigo"
        });

        myList.add({
            Nome:"Vitor Luiz de Souza",
            Tipocadastro:"Cunhado"
        });

        myList.add({
            Nome:"Maristela",
            Tipocadastro:"Sogra"
        });

        myList.add({
            Nome:"Marcio de Andrade",
            Tipocadastro:"Amigo"
        });

        myList.add({
            Nome:"Sandra de Sá",
            Tipocadastro:"Amiga"
        });

        myList.add({
            Nome:"Paulo da Silva",
            Tipocadastro:"Amigo"
        });


    }

};