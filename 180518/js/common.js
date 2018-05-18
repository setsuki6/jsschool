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


console.log(fruits.length)
console.log(fruits.concat(fruits2))


var date = [2018,5,18]
console.log(date.join('/'))


//配列の最初に追加する
fruits.unshift('レモン')
console.log(fruits)

//配列の最後に追加する
fruits.push('レモン')
console.log(fruits)

//配列の最初を削除
fruits.shift('レモン')
console.log(fruits)

//配列の最後を削除
fruits.pop('レモン')
console.log(fruits)


fruits.splice(1,2,'チェリー')
console.log(fruits)


console.log(fruits.splice(1,2))

//配列を逆順にする
console.log(fruits.reverse())


var datertring = '2018/05/18'
console.log(datertring.split('/'))

//何番目に入っているか
console.log(fruits.indexOf('チェリー'))



for (var fruits in fruits3){
    console.log(fruits)
    console.log(fruits3[fruits])
}


fruits3.blue = ['ブルーベリー']
console.log(fruits3)
//0~100までをfor文で回してofjectの中に偶数、奇数を分けて入れましょう

var num = {
    odd: [],
    even: [],
}


for(var i = 0; i <=100; i++){
    if(i % 2 === 0){
        num.even.push(i)
    }else{
        num.odd.push(i)
             }
}

console.log(num)



var users = [
    {
        name: '田中',
        age: 15,
        sex: '男',
    },
    {
        name: '鈴木',
        age: 18,
        sex: '女',
    },
    {
        name: '佐藤',
        age: 21,
        sex: '女',
    },
    {
        name: '加藤',
        age: 30,
        sex: '男',
    },
]

//console.log('田中 年齢:20歳,性別:男')
//console.log('鈴木 年齢:18歳,性別:女')
//console.log('佐藤 年齢:21歳,性別:女')
//console.log('加藤 年齢:21歳,性別:男')

for(var i = 0; i < users.length; i++){
//    console.log(users[i].name)
//    console.log(users[i].age)
//    console.log(users[i].sex)
console.log('['+users[i].name+']'+'年齢'+users[i].age+'歳'+'性別'+users[i].sex)

}


var u = {
    otona: [],
    kodomo: [],
}



for(var i = 0; i < users.length; i++){
    var user = users[i]
    if(user.age < 20){
       u.kodomo.push(user)
       }else{
         u.otona.push(user)
             }
}

console.log(u)