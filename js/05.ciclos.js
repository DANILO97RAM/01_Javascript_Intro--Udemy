// CICLOS
var cajas = document.querySelectorAll('.cajas');
console.log('cajas',cajas);

for (var i = 0; i< cajas.length;i++){
  cajas[i].style.width = '50px';
  cajas[i].style.width = '50px';
  // cajas[i].style.padding = '8px'
  cajas[i].style.background = 'orange';
  cajas[i].style.margin = '6px';
  cajas[i].style.display = 'inline-block';
}

for (var i =1 ;i <=5; i++){
  console.log(i);
}

var n = 1 ;
while (n<=5){
  console.log('n',n);
  n++;
}

var p=1;
do{ 
  console.log('p',p);
  p++
}
while (p<=5);