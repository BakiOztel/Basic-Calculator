
const sayı_b=document.querySelectorAll("[sayılar]");
const işlem_b=document.querySelectorAll("[işlem]");
const input_1=document.querySelector("[ilk]");
const input_2=document.querySelector("[ikinci]");
const delll=document.querySelector("[del]");
const esittir=document.querySelector("[esittir]");
const acc=document.querySelector("[ac]");
let işlem1="";
let cevap=0;

sayı_b.forEach(button => {
    button.addEventListener("click",function(){
        sayıEkle(button.innerText);
        
    })
});

işlem_b.forEach(button => {
    button.addEventListener("click",function(){
        işlemseç(button.innerText);
    })  
});
acc.addEventListener("click",function(){
    temizle();
});

delll.addEventListener("click",function(){
    input_2.innerText="";
});

esittir.addEventListener("click",function(){
    işlemyap(işlem1);
    input_1.innerText="";
})

function işlemyap(işlem){
      switch(işlem){
          case "+":
            cevap=parseInt(input_1.innerText.split(işlem)[0])+parseInt(input_2.innerText);
            input_2.innerText=cevap;
          break;
          case "-":
            cevap=parseInt(input_1.innerText.split(işlem)[0])-parseInt(input_2.innerText);
            input_2.innerText=cevap;
          break;
          case "/":
            cevap=parseInt(input_1.innerText.split(işlem)[0])/parseInt(input_2.innerText);
            input_2.innerText=cevap;
          break;
          case "*":
            cevap=parseInt(input_1.innerText.split(işlem)[0])*parseInt(input_2.innerText);
            input_2.innerText=cevap;
          break;
      }
}

function sayıEkle(sayı){
    input_2.innerText+=sayı;
}
function işlemseç(işlem){
    işlem1=işlem;
    input_1.innerText=input_2.innerText+işlem;
    input_2.innerText="";
}

function temizle(){
    input_2.innerText="";
    input_1.innerText="";
}




