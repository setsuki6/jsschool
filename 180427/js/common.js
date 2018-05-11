var num = 10

if(num === 10){
   console.log(true)
}
if(num > 10){
   console.log('numは10以上')
}
else if(num === 10){
    console.log('numは10以上だよ！')
}


if(num > 10){
   console.log('numは10以上')
}
else if(num < 10){
   console.log('numは10以下')
}
else{
   console.log('それ以外！')
}

var color = 'red'
switch(color){
    case "red":
     console.log('あか');
     break;
    case "blue":
     console.log('あお');
     break;
    case "yellow":
     console.log('き');
     break;
    default:
     console.log('それ以外');
}

var color = 'red'
if(color === 'red'){
   console.log('あか')
}
else if(color === 'blue'){
   console.log('あお')  
}
else if(color === 'yellow'){
   console.log('き') 
}
else{
    console.log('それ以外')
}

//for文
for(var i = 0; i < 10; i++){
    console.log(i)
}


for(var i = 0; i <= 10; i += 2){
    console.log(i)
}

for(var i = 1, j = 0; i <= 10; i *= 2, j++){
    console.log(i,j)
}

//問1
for(var i = 1; i <= 100; i++){
    if(i % 2 === 0){
    console.log(i)
    }
}

//問2
for(var i = 1; i <= 100; i++){
    if(i >= 10 && i <= 30){
        console.log(i)
    }else if(i >= 70 && i <= 90){
        console.log(i)
    }
}

//問3
for(var i = 1; i <= 100; i++){
    if(i % 3 === 0){
       console.log(i)
       }
}

//問4
for(var i = 1900; i <= 2100; i+= 4){
    if(i % 100 !== 0 || i % 400 ===0){
       console.log(i)
    }
}