function dc(){

 let a1=document.getElementById("a1");
 let a2=document.getElementById("a2");  

 let bb1=parseInt(document.getElementById('b1').value);
 let bb2=parseInt(document.getElementById('b2').value);

 let maiorNumero;

 if(bb1>=bb2){
    maiorNumero=bb1
 }else{
    maiorNumero=bb2
 }
 for(let i=1; i<=maiorNumero;i++){
    if(bb1%i==0 && bb2%i==0){
        divic.textContent=divic.textContent+" "+i;
    }
 }
 for (let i=1;i<=bb1;i++){
   if(bb1%i==0){
       a1.textContent=a1.textContent+" "+i;
   }
 }
 for(let i=1;i<=bb2;i++){
    if(bb2%i==0){
        a2.textContent=a1.textContent+" "+i;
    }
 }
}

