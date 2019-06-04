let FormMoradores = function () {

    let that = this, listamoradores, form;

    this.CarregaForm = function () {
        $.ajax('./html/unidade/form_moradores.html',
            {
                type: 'GET',
                data: {},
                success: function (data) {

                    $(".error_msg").text(data);

                    let div1 = document.createElement('div');
                    div1.innerHTML = data;
                    document.getElementById('maincontainer').innerHTML = div1.innerHTML;

                    hidePopup();
                    that.ListaMoradores('lista-moradores', function (lista) {

                        lista.attachEvent("onItemClick", function (id) {

                            $('.sucesso').hide();
                            $('.falha').hide();
                            $('.alt').hide();
                            $('#perfil').show(300);

                            $.ajax({
                                url: 'https://randomuser.me/api/',
                                dataType: 'json',
                                success: function(data) {

                                    let item = data.results[0];

                                    console.debug(item);

                                    form.setFormData({
                                        id: item.login.uuid,
                                        imagem: item.picture.thumbnail,
                                        nascimento: item.dob.date,
                                        localnascimento: item.location.city,
                                        rg: item.id.value,
                                        cpf: item.cell,
                                        nome: item.name.first,
                                    })
                                }
                            });

                            return true;
                        });

                    });

                    let fullwidth = document.getElementById('artigos').clientWidth * 0.5;

                    let formData = [
                        {type: "settings", labelWidth:200, position: "label-left"},
                        {type: "hidden", name:"id"},
                        {type: "input", name:"nome", label: "Nome", inputWidth: fullwidth},
                        {type: "input", name:"nascimento", label: "Data de nascimento", inputWidth: 150},
                        {type: "input", name:"localnascimento", label: "Local de nascimento"},
                        {type: "input", name:"rg", label: "Documento de identificação"},
                        {type: "input", name:"cpf", label: "CPF"},

                        {type: "button", value: "Atualizar"}
                    ];

                    form = new dhtmlXForm("form-container", formData);


                }
            }
        );
    };

    function AtualizarPerfil() {
        $('#sucesso').show(300);
    }

    function AtualizaNotificacoes() {
        $('#sucesso').show(300);
    }

    this.ListaMoradores = function (target, callback) {

        if (target === undefined || target === null)
            target = 'lista-moradores';

        listamoradores = new dhtmlXList({
            container: document.getElementById(target),
            type: {
                template: "<div class='row'>\n" +
                    "        <div class='three columns'><img alt='Perfil' class='img-perfil' id='imgperfil' src='#imagem#'></div>\n" +
                    "        <div class='row'>\n" +
                    "          <p>#nome#</p>\n" +
                    "        </div>\n" +
                    "      </div>",
                height: 'auto'
            }
        });

        $.ajax({
            url: 'https://randomuser.me/api/?nat=br&results=8',
            dataType: 'json',
            success: function(data) {

                data.results.filter(function (item) {
                    listamoradores.add({
                        id: item.login.uuid,
                        imagem: item.picture.thumbnail,
                        nome: item.name.first,
                    });
                })

            }
        });

        if (callback !== undefined)
            callback(listamoradores);

    }

};