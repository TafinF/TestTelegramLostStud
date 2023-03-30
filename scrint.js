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

urlAd = document.location.search
dataArr = urlAd.split("&")
let detiArr = [];
for (var i = 1; i < dataArr.length; i = i + 1) {
    d1 = dataArr[i].split("=")
    detiArr.push(decode(d1[1]));

}
console.log(detiArr)

