for (var i = 0; i < 5; i++) {
    let div = document.createElement("div");
    let textNode = document.createTextNode("Element " + i);
    div.appendChild(textNode);
    document.querySelector("body").appendChild(div);

    div.onclick = function () {
        console.log("Clic sur l'élément d'indice " + i);
    };
}

// for (let i = 0; i < 5; i++){
//     let div = document.createElement('div');
//     let textNode = document.createTextNode("Element " + i);
//     div.appendChild(textNode);
//     document.querySelector("body").appendChild(div);

//     div.onclick = function(){
//         console.log("Clic sur l'élément d'indice " + i);
//     }
// }
