window.onload = function () {


    let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

    tg.expand(); //расширяем на все окно  

    tg.MainButton.text = 'Отправить сведения'; //изменяем текст кнопки 
    tg.MainButton.isVisible = true;
    tg.MainButton.onClick(() => {
        let data = {
            "web_app_query_id": window.Telegram.WebApp.initDataUnsafe.query_id,
            "results": JSON.stringify(
                {
                    "type": "article",
                    "id": "1",
                    "title": "заголовок",
                    "input_message_content": {
                        "message_text": "текст"
                    }
                })
        }
        var options = {
            'method': 'post',
            'contentType': 'application/json',
            'payload': JSON.stringify(data)
        };
        var responselk = UrlFetchApp.fetch('https://api.telegram.org/botAAHSljPXCfNNFXZ4dBBwkc9G8MDXvrrVjC4/answerWebAppQuery', options);
        // let back = "{'web_app_query_id': " + tg.initDataUnsafe.query_id + ", 'result': '{'type': 'article', 'id': '5', 'title': 'RESULT 1', 'input_message_content': {'message_text': 'TEXT 1'}}'}"
        //window.Telegram.WebApp.MainButton.text = 'Отправить сведен';

        // window.Telegram.WebApp.sendData('str')
        //window.Telegram.WebApp.MainButton.text = 'Rtr';
    });
    let textName = document.createElement('div');
    textName.className = 'name';
    
    textName.innerHTML = tg.initDataUnsafe.query_id;
    document.body.append(textName);

};

