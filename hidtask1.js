function yukselet() {
    const elements = document.querySelectorAll("#bar, #bar1, #bar2, #bar3, #bar4");
// yazie()

    elements.forEach((element) => {
        element.addEventListener('click', toggleClass);
    });


}

function toggleClass(event) {
    const element = event.currentTarget;
    if (!element.classList.contains("boyuducu")) {
        element.classList.add("boyuducu");
    } else {
        element.classList.remove("boyuducu");
    }
}
document.addEventListener("DOMContentLoaded", (event) => {
    yukselet(); // Sayfa yüklendiğinde yukselet fonksiyonunu çağır
});

// function yazie() {
//     const yaziElements = document.querySelectorAll("#display1, #display2, #display3, #display4, #display5");
//     yaziElements.forEach((yazi) => {
//         yazi.addEventListener('click', () => {
//             if (!yazi.classList.contains("yazi")) {
//                 yazi.classList.add("yazi");
//             } else {
//                 yazi.classList.remove("yazi");
//             }
//         });
//     });
// }
//
// window.onload = function() {
//     yukselet();
// };

// function yazie() {
//
//
//     const yaziElements = [
//         document.getElementById("display1"),
//         document.getElementById("display2"),
//         document.getElementById("display3"),
//         document.getElementById("display4"),
//         document.getElementById("display5")
//     ];
//
//     yaziElements.forEach((key) => {
//         key.addEventListener('click' ,toggle)
//
//
//
//     })
//     function toggle(ruins){
//         const element = ruins.currentTarget;
//         if (!ruins.classList.contains("yazi")){
//             ruins.classList.add("yazi")
//         }else {
//             ruins.classList.remove("yazi")
//         }
//
//     }


// }
// window.onload = function() {
//     yukselet();
// };



// function yazie1() {
//
//     const ruins = document.getElementById("display1");
//
//
// if (!ruins.classList.contains("yazi")){
//     ruins.classList.add("yazi")
// }else {
//     ruins.classList.remove("yazi")
// }}
// function yazie2() {
//
//     const ruins = document.getElementById("display2");
//
//
//     if (!ruins.classList.contains("yazi")){
//         ruins.classList.add("yazi")
//     }else {
//         ruins.classList.remove("yazi")
//     }}
// function yazie3() {
//
//     const ruins = document.getElementById("display3");
//
//
//     if (!ruins.classList.contains("yazi")){
//         ruins.classList.add("yazi")
//     }else {
//         ruins.classList.remove("yazi")
//     }}
// function yazie4() {
//
//     const ruins = document.getElementById("display4");
//
//
//     if (!ruins.classList.contains("yazi")){
//         ruins.classList.add("yazi")
//     }else {
//         ruins.classList.remove("yazi")
//     }}
// function yazie5() {
//
//     const ruins = document.getElementById("display5");
//
//
//     if (!ruins.classList.contains("yazi")){
//         ruins.classList.add("yazi")
//     }else {
//         ruins.classList.remove("yazi")
//     }}



function basiem() {
    const element1 = document.querySelectorAll(".gedici");
// yazie()
    element1.forEach((element) => {
        element.addEventListener('click', toggleC);
    });


}

function toggleC(event) {
    const element = event.currentTarget;
    if (!element.classList.contains("big")) {
        element.classList.add("big");
    } else {
        element.classList.remove("big");
    }
}

// function yazier() {
//     const element1a = document.getElementById("display1");
// // yazie()
//     element1a.forEach((element) => {
//         element.addEventListener('click', toggleCa);
//     });
//
//
// }
//
// function toggleCa(event) {
//     const element = event.currentTarget;
//     if (!element.classList.contains("as")) {
//         element.classList.add("as");
//     } else {
//         element.classList.remove("as");
//     }
// }
// function basiem() {
//     const elementsa = document.querySelectorAll(".buton1"); // Butonlarınızın class'ı burada belirtildiği gibi olmalı
//
//     elementsa.forEach((button) => {
//         button.addEventListener('click', toggleaClass);
//     });
// }
//
// function toggleaClass(event) {
//     const button = event.currentTarget;
//     const barElement = button.parentElement.parentElement; // Parent'ları doğru şekilde alınmalı
//
//     if (!barElement.classList.contains("col")) {
//         barElement.classList.add("col");
//     } else {
//         barElement.classList.remove("col");
//     }
// }
//
// document.addEventListener("DOMContentLoaded", (event) => {
//     basiem(); // Sayfa yüklendiğinde basiem fonksiyonunu çağır
// });








