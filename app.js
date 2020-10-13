// Input
let casioInput = document.querySelector("#input");

//Butonlar
let buttons = document.getElementsByClassName("button");
let esittir = document.querySelector(".esittir");
let temizle = document.querySelector(".c");
let temizleAll = document.querySelector(".ac");

// Event Listenerlar

esittir.addEventListener("click",hesapla);
temizle.addEventListener("click",bosalt);
temizleAll.addEventListener("click",bosalt);


for(var i= 9; i<29 ; i++){

    if (i!= 10 &&  i!=15 && i!=20 && i!=28){
        buttons[i].addEventListener("click",butonaBas);      // Her buton için eventListener yazmak yerine for döngüsünde yaptırdım
    }
   

}


function hesapla (e){

casioInput.value = eval(casioInput.value);                      // Eval Fonksiyonu ile işlem yaptıdım
e.preventDefault();
}



// C ve AC butonu 
function bosalt(e){

casioInput.value = "";                                              // Silme Ekranı temizleme butonları C - AC
    e.preventDefault();
}























