//1~0までの数字がランダムで表示
console.log(Math.random())

//小数点を切り出す
console.log(Math.floor(1.8))

//小数点を繰り上げる
console.log(Math.ceil(1.3))

//四捨五入
console.log(Math.round(1.8))


console.log(Math.floor(Math.random() * 10))


//3~10までのランダムな数字をだす
console.log(Math.floor(Math.random() * 8 + 3))

function randomNum(num1,num2){
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1)
}

console.log(randomNum(3,10))


//数字の中で最小や最大をだす
console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,3,4,5))
//配列のmax
Math.max.apply(null, [5,7,4,9,1])

//最小値を決める（０とする）
console.log(Math.max(0,-1))
//最大値を決める（１０とする）
console.log(Math.min(10,100))


function startJanken(){
    var janken = ['ぐー', 'ちょき', 'ぱー']
    var user1 = janken[Math.floor(Math.random()* 3)]
    var user2 = janken[Math.floor(Math.random()* 3)]
    
    console.log(user1,user2)
    
    if(user1 === 'ぐー' && user2 === 'ぐー'){
        return 'あいこ'
    }if(user1 === 'ぐー' && user2 === 'ちょき'){
        return 'user1の勝ち'
    }if(user1 === 'ぐー' && user2 === 'ぱー'){
        return 'user2の勝ち'
    }if(user1 === 'ちょき' && user2 === 'ぐー'){
        return 'user2の勝ち'
    }if(user1 === 'ちょき' && user2 === 'ちょき'){
        return 'あいこ'
    }if(user1 === 'ちょき' && user2 === 'ぱー'){
        return 'user1の勝ち'
    }if(user1 === 'ぱー' && user2 === 'ぐー'){
        return 'user1の勝ち'
    }if(user1 === 'ぱー' && user2 === 'ちょき'){
        return 'user2の勝ち'
    }if(user1 === 'ぱー' && user2 === 'ぱー'){
        return 'あいこ'
    }
}
console.log(startJanken())



function startJanken(){
    var janken = ['ぐー', 'ちょき', 'ぱー']
    var user1 = janken[Math.floor(Math.random()* 3)]
    var user2 = janken[Math.floor(Math.random()* 3)]
    
    console.log(user1,user2)
    
    if(user1 === user2){
       return 'あいこ'
       }if(
        user1 === 'ぐー' && user2 === 'ちょき' ||
        user1 === 'ちょき' && user2 === 'ぱー' ||
        user1 === 'ぱー' && user2 === 'ぐー'
      ){
        return 'user1の勝利！'
    }else {
        return 'user2の勝利！'
    }
}
console.log(startJanken())

////問6
//
//function num(num1){
//    
//    for(var i = num1.length; i > 0; i--){
//        if(num1.length % i === 0){
//    console.log(i)
//    }
//    }
//}
//console.log(num('1234'))




function cutNumber(num){
    var numString = num.toString()
    var str = ''
    
    for(
        var i = numString.length - 1 , j = 1;
        i >= 0;
        i--, j++
       ){
        str = numString[i] + str
        
        if(j % 3 === 0 && i !== 0){
           str = ',' + str;
        }
        }
    return str
}

console.log(cutNumber(1234567890))

