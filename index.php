<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Smart Portal</title>

    <meta name="description" content="Verticals">
    <meta name="author" content="Oberdan Brito">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script type="text/javascript" src="../smt/lib/dhtmlx/codebase/dhtmlx.js?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="../smt/lib/moment/moment.js?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="../smt/lib/moment/moment-with-locales.js?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="../smt/webservice/webservice.js?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="../smt/unidade/geral/Unidade.js?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="../smt/unidade/moradores/Morador.js?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

    <script type="text/javascript" src="js/unidade/form_funcionarios.js?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="js/unidade/form_moradores.js?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="js/unidade/form_perfil.js?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="js/unidade/form_pets.js?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="js/unidade/form_unidade.js?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="js/unidade/form_veiculos.js?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="js/unidade/form_visitantes.js?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="js/feeds.js?<?php echo time(); ?>"></script>

    <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
    <link type="text/css" rel="stylesheet" href="../smt/lib/dhtmlx/skins/portal/dhtmlx.css?<?php echo time(); ?>">
    <link type="text/css" rel="stylesheet" href="css/normalize.css">
    <link type="text/css" rel="stylesheet" href="css/skeleton.css">
    <link type="text/css" rel="stylesheet" href="css/index.css?<?php echo time(); ?>">
</head>
<body>
<div id="corpo" class="container">
    <header style="position: marker">
        <div class="header u-full-width">
            <div class="container">
                <div class="one column">
                    <img class="imglogo u-pull-left u-max-full-width" src="img/logo.png">
                </div>
                <input class="u-pull-right button-primary" type="submit" value="Registre-se">
                <div class="nine columns toolbar u-pull-right">
                    <div class="u-pull-right" id="tbusuario">
                        <img src="img/toolbar/usuario.png" /><span>Oberdan</span>
                    </div>
                    <div class="u-pull-right" id="ajuda">
                        <img src="img/toolbar/ajuda.png" /><span>Ajuda</span>
                    </div>
                    <div class="u-pull-right" id="notificacoes">
                        <img src="img/toolbar/mensagens.png" /><span>Notificações</span>
                    </div>
                    <div class="u-pull-right" id="correios">
                        <img src="img/toolbar/correios.png" /><span>Correios</span>
                    </div>
                    <div class="u-pull-right" id="inicio">
                        <img src="img/toolbar/iniciar.png" /><span>Iniciar</span>
                    </div>
                    <div class="three columns u-pull-right" style="display: none">
                        <input type="submit" id="login" value="Acessar">
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="row banner"></div>
    <div id="maincontainer" class="row">
    </div>
<div id="popupCorreiosOff" class="popupbox">
    <p><strong>Correios</strong></p>
    <p>Aqui você recebe notificações do<br>departamento dos correios do seu<br>condomínio. Para começar, faça o<br>seu registro ou faça <a>log-in</a>
    </p>
    <div class="one columns"><input class="button-primary" type="submit" value="Registro"></div>
</div>
<div id="popupNotificacoesOff" class="popupbox">
    <p><strong>Notificações e Multas</strong></p>
    <p>Fique atento as regras e não fique irregular.<br>Verifique se existe alguma notificação ou<br>multa para sua unidade. Para começar, faça o<br>seu registro ou faça <a>log-in</a>
    </p>
    <div class="one columns"><input class="button-primary" type="submit" value="Registro"></div>
</div>
<div id="popupAjuda" class="popupbox">
    <div class="row docs-section"><a>Tour</a><p>Comece aqui, para obter<br>uma visão geral e rápida do site</p></div>
    <div class="row"><a>Central de ajuda</a><p>Respostas detalhadas a qualquer<br>pergunta que você tiver</p></div>
</div>
<div id="popupUnidade" class="popupbox">

    <div class="row docs-section" id="form_perfil" onclick="showForm(this)">
        <div class="row">
            <div class="three columns"><img class="img-perfil" src="img/toolbar/pessoa.png"></div>
            <div class="row">
                <p><a>Oberdan Brito</a><br>Proprietário da unidade</p>
            </div>
        </div>
    </div>

    <div class="row menu-left docs-section" id="form_unidade" onclick="showForm(this)">
        <a><div class="row"><img class="menu-perfil-img" src="img/toolbar/unidade.png" />Minha Unidade</div></a>
        <div class="row menu-unidade">Forneça informações a respeito da sua unidade</div>
    </div>

    <div class="row menu-left docs-section" id="form_moradores" onclick="showForm(this)">
        <a><div class="row"><img class="menu-perfil-img" src="img/toolbar/moradores.png" />Moradores</div></a>
        <div class="row menu-unidade">Cadastre as pessoas que moram nesta unidade</div>
    </div>

    <div class="row menu-left docs-section" id="form_veiculos" onclick="showForm(this)">
        <a><div class="row"><img class="menu-perfil-img" src="img/toolbar/veiculos.png" />Veículos</div></a>
        <div class="row menu-unidade">Cadastro de automóveis, motos e bicicletas</div>
    </div>

    <div class="row menu-left docs-section" id="form_visitantes" onclick="showForm(this)">
        <a><div class="row"><img class="menu-perfil-img" src="img/toolbar/visitantes.png" />Visitantes pré-autorizados</div></a>
        <div class="row menu-unidade">Autorize familiares e amigos na entrada de forma descomplicada<br></div>
    </div>

    <div class="row menu-left docs-section" id="form_pets" onclick="showForm(this)">
        <a><div class="row"><img class="menu-perfil-img" src="img/toolbar/animais.png" />Animais domésticos</div></a>
        <div class="row menu-unidade">Cadastro de pets</div>
    </div>

    <div class="row menu-left docs-section" id="form_funcionarios" onclick="showForm(this)">
        <a><div class="row"><img class="menu-perfil-img" src="img/toolbar/funcionarios.png" />Funcionários da unidade</div></a>
        <div class="row menu-unidade">Diaristas e prestadores de serviço</div>
    </div>

    <div class="row menu-left" id="form_sair" onclick="showForm(this)">
        <a><img id="saida" class="menu-perfil-img" src="img/toolbar/sair.png" />Sair</a>
    </div>
</div>
</body>
<script type="text/javascript" src="js/main.js?<?php echo time(); ?>"></script>
</html>