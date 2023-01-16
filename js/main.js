//아이디가 circle인 요소를 찾아서 저장
const circle = document.querySelector("#circle");
//태그명이 article인 요소를 찾아서 저장
const article = circle.querySelectorAll("article");
const menuclick = document.querySelectorAll(".wrap_menu .inner .gnb li")
//article의 전체 갯수만큼 반복을 돌면서 mouseenter, mouseleav이벤트 연결
console.log(menuclick);

menuclick.forEach((el,index,array) =>{
  
    array[index].addEventListener("mouseenter",e=>{
        circle.style.transform = `rotateY(${-360/7*index}deg)`;

        console.log(el.innerText +"atrr"+ array[index].innerText+"index"+index)
    })
    console.log(el.innerText)
    console.log(index)
    
});





// for(let index in menuclick){
// 	//article 에 마우스를 올리면 부모인 #circle 의 animation-play-state값을 "paused로 변경"
// 	menuclick[index].addEventListener("mouseenter",e=>{

//         let elNum = el.innerText
//         console.log(elNum)
//         console.log(menuclick)
// 		circle.style.transform = `rotateY(45deg)`;
        
        
// 	});

// 	//article 에서 마우스가 떠나면 부모인 #circle 의 animation-play-state값을 다시 "running"으로  변경"
// 	el.addEventListener("mouseleave", e=>{
// 		circle.style.animationPlayState = "running";
// 	});
// }	