let FormUnidade = function () {

    let that = this;

    this.Abrir = function(local, callback) {

        $.ajax(local,
            { type: 'GET',
                data: {
                },
                success: function (data) {
                    $(".error_msg").text(data);
                    hidePopup();
                    callback(data);
                }
            }
        );
    };

    function PaginaPrincipalUnidade(data) {

        // Carrega o conteúdo do arquivo no div principal da página
        let div1 = document.createElement('div');
        div1.innerHTML = data;
        document.getElementById('maincontainer').innerHTML = div1.innerHTML;

        // Carrega o formulario de identificação na página
        let form_identificacao = document.getElementById('form_identificacao');
        document.getElementById('base-formularios').innerHTML = form_identificacao.innerHTML;

        // Carrega os eventos do navegador lateral
        CarregaEvento('identificacao', 'form_identificacao');
        CarregaEvento('contato', 'form_contato');
        CarregaEvento('aluguel', 'form_aluguel');


        let moradores = new FormMoradores();
        moradores.ListaMoradores();

    }

    function CarregaEvento(id, form) {
        let item =  document.getElementById(id);
        item.data = form;

        if (item !== null) {

            item.onclick = function () {
                let form = document.getElementById(this.data);
                document.getElementById('base-formularios').innerHTML = form.innerHTML;
            };
        }
    }

    that.Abrir('./html/unidade/form_unidade.html', PaginaPrincipalUnidade);


};