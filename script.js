window.onload = function () {

    
    let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

    tg.expand(); //расширяем на все окно  
    
    tg.MainButton.text = "Отправить сведения"; //изменяем текст кнопки 
    tg.MainButton.isVisible = true;
    tg.MainButton.onClick(() => {
        //window.Telegram.WebApp.MainButton.text = "Отправить сведен";
        window.Telegram.WebApp.sendData("str")
        //window.Telegram.WebApp.MainButton.text = "Rtr";
    });
    let textName = document.createElement('div');
    textName.className = "name";
    textName.innerHTML = tg.initDataUnsafe.query_id;
    document.body.append(textName);

};
