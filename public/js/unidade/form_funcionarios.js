let FormFuncionarios = function () {

    let that = this;

    this.CarregaForm = function () {
        $.ajax('./html/unidade/form_funcionarios.html',
            { type: 'GET',
                data: {
                },
                success: function (data) {
                    $(".error_msg").text(data);

                    let div1 = document.createElement('div');
                    div1.innerHTML = data;
                    document.getElementById('maincontainer').innerHTML = div1.innerHTML;

                    hidePopup();

                }
            }
        );
    };
};