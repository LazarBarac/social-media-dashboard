const toogle = document.getElementById("toogle");
const kontejner1 = document.getElementById("kontejner1a");
const kontejner2a = document.querySelectorAll(".kontejner2a");
const pratioci = document.querySelectorAll(".pratioci");
const pratiocaDanas = document.querySelectorAll(".pratiocaDanas");
const overview = document.getElementById("overview");
const kontejner4a = document.querySelectorAll(".kontejner4a");
const kontejnerA = document.querySelectorAll(".kontejnerA");
const kontejnerB = document.querySelectorAll(".kontejnerB");
const naslov = document.getElementById("naslov");
const tema = document.getElementById("tema");
const slider = document.getElementById("slider");

toogle.addEventListener("click", promeniTemu);

function promeniTemu(){
   
        document.body.classList.toggle("mrak");

        naslov.classList.toggle("mrak");

        tema.classList.toggle("mrak");

        kontejner1.classList.toggle("mrak");

        kontejner2a.forEach(function(k){
            k.classList.toggle("mrak");
        })

        pratioci.forEach(function(p){
            p.classList.toggle("mrak");
        })

        pratiocaDanas.forEach(function(pD){
            pD.classList.toggle("mrak");
        })
        
        overview.classList.toggle("mrak");

        kontejner4a.forEach(function(k4){
            k4.classList.toggle("mrak");
        })
        
        kontejnerA.forEach(function(a){
            a.classList.toggle("mrak");
        })

        kontejnerB.forEach(function(b){
            b.classList.toggle("mrak");
        })

        slider.classList.toggle("mrak");

        toogle.classList.toggle("mrak");
    
}