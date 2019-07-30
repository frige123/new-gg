alert('hello');
///homework///
let m;
let n;
function wolf(m,n){
    if(m>=50){
        n='Большое слово'
        console.log('n=',n);
    }
    else{
        n='Маленькое слово'
        console.log('n',n);
    }
}
let i = 2;
while(i<9){
    console.log(i++)
}
let g = 45;
while(g<67){ 
    console.log(g++)
}
for(let h = 44;h <67; h++){
    console.log(h++)
}
let n2 = +prompt("write number");
switch(n2){
    case 1:
    alert('one');
    break;
    case 2:
    alert('two');
    break;
    case 3:
    alert('three');
    break;
    case 4:
    alert('four');
    break;
    case 5:
    alert('five');
    break;
    case 6:
    alert('six');
    break;
    case 7:
    alert('seven');
    break;
    case 8:
    alert('eight');
    break;
    case 9:
    alert('nine')
    break;
};
let tee = 'Привет,';
let fee = 'JavaScript!';
function hello1(tee,fee){
    let g = tee + fee;
    alert((g));
};
let name ;
function hello2(name){
    if(name === undefined){
        alert("Hello,host")
    }
    else{
        alert("Hello," + name);
    }
};
let n1;
let m1;
function mul(n1,m1){
    alert((m1));
    alert((n1));
};
let ri ;
let ti ;
let o1 ;
function rgb(ri,ti,o1){
    let h = 'rgb('+ri+','+ti+','+o1+')';
    alert((h));
};
let math1;
let math2;
let math3;
let math4;
let math5;
function avg(math1,math2,math3,math4,math5){
    let h = (math1+math2+math3+math4+math5)/5;
    alert((h));
};
//////function words  от 0 до 30 . 
let d ;
let n7; 
function words(d,n7){
    if(d>0 && d<=1){
        n7= 'товар';
        alert(d +' '+n7);
    }
    if(d >=2 && d<5){
        n7 = 'товара';
        alert(d +' '+n7);
    }   
    if(d>=5 && d <=20){
        n7 = 'товаров';
        alert(d +' '+n7);
    }
    if(d>20 && d<=21){
        n7= 'товар';
        alert(d +' '+n7);
    }
    if(d>21 && d<=24){
        n7 = 'товара';
        alert(d +' '+n7);
    }
    if(d>24 && d<=30){
        n7 = 'товаров';
        alert(d +' '+n7);
    }
    if(d <=0 || d >30){
        alert('no corect value');
    }
};