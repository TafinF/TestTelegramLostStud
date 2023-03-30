const STATE_STUD = { Here: 'Here', Ill: 'Ill', Reason: 'Reason' };

urlAd = document.location.search
// urlAd = "class=1a&p0=112511291524212512-231029121520&p1=1125271928211924-19121024&p2=1210281922391512-1415231914&p3=12193524151228211042-152219181012152910&p4=132210141922192410-152219181012152910&p5=1322101421251210-1219212925271942&p6=1325222512192410-1210281922192810&p7=13272523251210-1219212925271942&p8=1330281512-19121024&p9=1425241934211924-19121024&p10=1430141027151210-2825311942&p11=15272310212512-231932101922&p12=173027101222161210-21192710&p13=211922393415242125-14102419402239&p14=21244218151210-2310271942&p15=2125273530242512-211927192222&p16=21302725322910-29192325311520&p17=22251110242512-141024191922&p18=241921193521192410-1022192810&p19=2425122521361524251210-10221521281024142710&p20=26152927192410-1022192410&p21=2625262512-231021281923&p22=262526251210-102410282910281942&p23=26252915291524192410-2310271942&p24=27251419212512-282915261024&p25=2810203130221924-13152527131920&p26=3115142529251210-252219121942&p27=3225293921192410-15121315241942&p28=35152225312528292512-281527131520&p29=352122421512-1027291623&p30=35301110-1022192410&p31=4214272512-2310211027"
dataArr = urlAd.split("&")
STUD_ARR = [];
for (var i = 1; i < dataArr.length; i = i + 1) {
    d1 = dataArr[i].split("=")
    STUD_ARR.push([decode(d1[1]), STATE_STUD.Here]);

}
CLASS_NAME = dataArr[0].split("=")[1]
console.log(STUD_ARR)

function decode(str) {
    let recipeMap = new Map([
        ['10', 'а'], ['11', 'б'], ['12', 'в'], ['13', 'г'], ['14', 'д'], ['15', 'е'], ['16', 'ё'], ['17', 'ж'], ['18', 'з'], ['19', 'и'], ['20', 'й'], ['21', 'к'], ['22', 'л'], ['23', 'м'], ['24', 'н'], ['25', 'о'], ['26', 'п'], ['27', 'р'], ['28', 'с'], ['29', 'т'], ['30', 'у'], ['31', 'ф'], ['32', 'х'], ['33', 'ц'], ['34', 'ч'], ['35', 'ш'], ['36', 'щ'], ['37', 'ъ'], ['38', 'ы'], ['39', 'ь'], ['40', 'э'], ['41', 'ю'], ['42', 'я']
    ]);
    newStr = ''
    for (var i = 0; i < str.length; i = i + 2) {
        if (str[i] == '-') {
            newStr = newStr + ' '
            i = i - 1
        } else {
            newStr = newStr + recipeMap.get(str[i] + str[i + 1])
        }
    }
    return newStr
}

function ClickButton() {
    buInfoAr = this.id.split("_")
    numberButton = buInfoAr[1]
    state = buInfoAr[0]
    let enversState = state == STATE_STUD.Ill ? STATE_STUD.Reason : STATE_STUD.Ill;
    let secondButton = document.getElementById(enversState + "_" + numberButton);
    if (secondButton.classList.contains("pres")) {
        secondButton.classList.remove("pres");
    }
    if (this.classList.contains("pres")) {
        STUD_ARR[numberButton][1] = STATE_STUD.Here
        this.classList.remove("pres");
    } else {
        STUD_ARR[numberButton][1] = state
        this.classList.add("pres");
    }
    // console.log(GetCallback())
}

function addRow(name, id) {
    let container = document.createElement('div');
    container.className = "bloc";

    let textName = document.createElement('div');
    textName.className = "name";
    textName.innerHTML = name;

    let buIll = document.createElement('button');
    buIll.className = "ill";
    buIll.innerHTML = "Болеет";
    buIll.id = STATE_STUD.Ill + "_" + id;
    buIll.onclick = ClickButton;

    let buReason = document.createElement('button');
    buReason.className = "reason";
    buReason.innerHTML = "Причина";
    buReason.id = STATE_STUD.Reason + "_" + id;
    buReason.onclick = ClickButton;

    container.append(textName);
    container.append(buIll);
    container.append(buReason);
    document.body.append(container);

}
function GetCallback() {
    str = "Для " +CLASS_NAME + " передано:"
    for (var i = 0; i < STUD_ARR.length; i = i + 1) {
        if (STUD_ARR[i][1] != STATE_STUD.Here) {
            state = STUD_ARR[i][1] == STATE_STUD.Ill ? "болеет" : "по причине"
            str = str + "\n" + STUD_ARR[i][0] + " " + state
        }
    }
    //window.Telegram.WebApp.sendData(str)
     return str
}
window.onload = function () {
    for (var i = 0; i < STUD_ARR.length; i = i + 1) {
        addRow(STUD_ARR[i][0], i)
    }
    console.log(STUD_ARR)
    let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

    tg.expand(); //расширяем на все окно  

    tg.MainButton.text = "Отправить сведения"; //изменяем текст кнопки 
    tg.MainButton.isVisible = true;
    tg.MainButton.onClick(() => window.Telegram.WebApp.MainButton.text = "Отправить сведен");
     //tg.MainButton.onClick(GetCallback)
    // tg.MainButton.onClick(function () {
    // tg.sendData(GetCallback());
    //при клике на основную кнопку отправляем данные в строковом виде
// });
};
