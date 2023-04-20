const decre=document.getElementById("minus");
const incre=document.getElementById("plus");
const val=document.getElementById("border");
const decreNew=document.getElementById("minusOne");
const increNew=document.getElementById("plusOne");
const ValNew=document.getElementById("borderOne");
const mrp=document.getElementById("Price");
const mrpTwo=document.getElementById("PriceOne");
const itemOne=document.getElementById("numbOne");
const itemTwo=document.getElementById("numbTwo");


let numberOfItems=0;
let numberOfItemsNew=0;
let VaOne;
let VaTwo;
let finalPrice;



function updatePrice(){
    VaOne=val.innerText;
    VaTwo=ValNew.innerText;
    let totalOne;
    let totalTwo;
    totalOne=VaOne*55000;
    totalTwo=VaTwo*75000;
    finalPrice=totalOne+totalTwo+".00"
    mrp.innerText=finalPrice;
    mrpTwo.innerText=finalPrice;
  
}

function dispItem(){
    let totalDisp=parseInt(VaOne)+parseInt(VaTwo);
    itemOne.innerText=totalDisp;
    itemTwo.innerText=totalDisp;

}
 
function increVal(){
       numberOfItems ++;
       val.textContent=numberOfItems;
       updatePrice();
       dispItem();
}
function decreVal(){
    if(numberOfItems>0){
        numberOfItems--;
        val.textContent=numberOfItems;
    }
    updatePrice();
    dispItem();
  
}

function increValNew(){
    numberOfItemsNew ++;
    ValNew.textContent=numberOfItemsNew;
    updatePrice();
    dispItem();
}
function decreValNew(){
    if(numberOfItemsNew>0){
        numberOfItemsNew--;
        ValNew.textContent=numberOfItemsNew;
    }updatePrice();
    dispItem();
}


decre.addEventListener("click",decreVal);

incre.addEventListener("click",increVal);
decreNew.addEventListener("click",decreValNew);
increNew.addEventListener("click",increValNew);