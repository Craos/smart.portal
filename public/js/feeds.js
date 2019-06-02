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
                                document.getElementById('artigos').appendChild(div1);

                            }
                        }
                    );
                });
            }
        }
    );


};