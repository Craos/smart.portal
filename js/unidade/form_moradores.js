let FormMoradores = function () {

    let that = this;

    this.CarregaForm = function () {
        $.ajax('./html/unidade/form_moradores.html',
            { type: 'GET',
                data: {
                },
                success: function (data) {
                    $(".error_msg").text(data);

                    let div1 = document.createElement('div');
                    div1.innerHTML = data;
                    document.getElementById('maincontainer').innerHTML = div1.innerHTML;

                    that.ListaMoradores();

                    new FormVisitantes().ListaVisitantes();
                    hidePopup();

                }
            }
        );
    };

    this.ListaMoradores = function () {

        let containermoradores = document.getElementById('lista-moradores');

        let myList = new dhtmlXList({
            container:containermoradores,
            type:{
                template:"#Nome#<br/><span style='color: darkgrey'>#Tipocadastro#</span>"
            }
        });

        myList.add({
            Nome:"Maria Helena",
            Tipocadastro:"Mãe"
        });

        myList.add({
            Nome:"Leandra Brito",
            Tipocadastro:"Irmã"
        });

        myList.add({
            Nome:"Andreia Cristina",
            Tipocadastro:"Cônjuge"
        });

        myList.add({
            Nome:"Lucas Abner",
            Tipocadastro:"Filho(a)"
        });

        myList.add({
            Nome:"Vinícius Oliveira",
            Tipocadastro:"Filho(a)"
        });

        myList.add({
            Nome:"Helena Oliveira",
            Tipocadastro:"Filho(a)"
        });


    }

};