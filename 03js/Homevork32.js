"use strict";
const box = document.querySelector("#box");
const box1 = document.querySelector("#box1");

const data = {
    width: 100,
    height: 100,
    x: 0,
    y: 0
};
const data1 = {
    width: 100,
    height: 100,
    x: 0,
    y: 100
};

box.addEventListener("touchmove", (e)=>{
    e.preventDefault();
    data.x =  e.touches[0].pageX;
    data.y =  e.touches[0].pageY;
    console.log(boxColl(data,data1));
    if(boxColl(data,data1)){
       box1.style.cssText=`
       background: rgb(3, 105, 29);
       border-radius: 50%;`;
    }else{
       box1.style.cssText=`
       background: rgb(240, 3, 54);`;
    }
     
    e.target.style.cssText = `
    transform:translateX(${data.x}px)translateY(${data.y}px)
    `;
});
box1.addEventListener("touchmove", (e)=>{
    e.preventDefault();
    data1.x =  e.touches[0].pageX;
    data1.y =  e.touches[0].pageY;
    console.log(data1.x , data1,);
   

    if(boxColl(data,data1)){
       box.style.cssText=`
       background: rgb(240, 3, 54);
       border-radius: 50%;`;
    }else{
       box.style.cssText=`
       background: rgb(3, 105, 29);`;
    }
    e.target.style.cssText = `
    transform:translateX(${data1.x}px)translateY(${data1.y}px)
    `;
});

function boxColl (data, data1){
    if(data.x + data.width >= data1.x && data.x <= data1.x + data1.width && 
        data.y + data.height >= data1.y && data.y <= data1.y + data1.height){
                return true;
    }
}


