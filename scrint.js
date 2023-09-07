window.onload = function () {
    let textName = document.createElement('div');
    textName.className = "name";
    textName.innerHTML = "g";
    
    let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

    tg.expand(); //расширяем на все окно  
    tg.initDataUnsafe.user.language_code
    tg.MainButton.text = "Отправить сведения"; //изменяем текст кнопки 
    tg.MainButton.isVisible = true;
    tg.MainButton.onClick(() => {
        //window.Telegram.WebApp.MainButton.text = "Отправить сведен";
        window.Telegram.WebApp.sendData("str")
        //window.Telegram.WebApp.MainButton.text = "Rtr";
    });
    //tg.MainButton.onClick(GetCallback)
    // tg.MainButton.onClick(function () {
    // tg.sendData(GetCallback());
    //при клике на основную кнопку отправляем данные в строковом виде
    // });
};
