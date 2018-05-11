var name = 'せきぐちともひろ';
console.log(name.length); //文字の長さ
console.log(name.charAt(4)) //文字の切り出し

console.log(name.slice(2, 8)) //文字の抜き取り
console.log(name.slice(-3, name.length))

console.log(name.indexOf('ぐ')) //検索みたいな
console.log(name.indexOf('げ'))

console.log(name.replace('せき', 'ぐち')) //置換

for (var i = 0; i <= name.length; i++){
    console.log(name.charAt(i))
}



var fruits = ['りんご','オレンジ','グレープフルーツ','ぶどう']
console.log(fruits)

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

var fruits2 = [
    ['りんご','いちご','さくらんぼ'],
    ['オレンジ','みかん','かき'],
    ['パイナップル','レモン','バナナ'],
]

console.log(fruits2[0][1])

var fruits3 = {
    red: ['りんご','いちご','さくらんぼ'],
    orange: ['オレンジ','みかん','かき'],
    yellow: ['パイナップル','レモン','バナナ'],
}

console.log(fruits3)
console.log(fruits3.red)

console.log(fruits3['yellow']) //この場合変数も使用できる

console.log(fruits3.yellow[1])

for(var i = 0; i < fruits2.length; i++){
    for(var j = 0; j < fruits2.length; j++){
        console.log(fruits2[i][j])
    }
}