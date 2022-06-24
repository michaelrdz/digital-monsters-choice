var libPakiman = [];
libPakiman["Agumon"] = "imgs/agumon.png";
libPakiman["Gabumon"] = "imgs/gabumon.png";
libPakiman["Gatomon"] = "imgs/gatomon.png";

var libAudios = [];
libAudios["Agumon"] = "audios/sound_roar1.wav";
libAudios["Gabumon"] = "audios/sound_roar2.wav";
libAudios["Gatomon"] = "audios/sound_roar3.wav";

//Pakiman class, all the global characteristics of the digimons
class Pakiman {
    constructor(setIndex, setName, setHp, setAttk) {
        this.index = setIndex;
        this.imagen = new Image();
        this.name = setName;
        this.HP = setHp;
        this.Attack = setAttk;
        this.imagen.src = libPakiman[this.name];
    }

    talk() {
        alert("You choose "+this.name+" with "+this.HP+" of life...");
    }
    show() {
        var child = "<div class='digimonLst' onclick='digimonClick(&quot;"+this.index+"&quot;)'><img alt='digimon' src='"+this.imagen.src+"'><h2>"+this.name+"</h2><p>Vida: "+this.HP+"<br><img alt='lifebar' src='imgs/lifebar.png' /><br>Ataque: "+this.Attack+"<br><button>Choose</button></div>";
        document.getElementById("container").innerHTML += child;
    }
}

//Click on buddy choice
function digimonClick(name){
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", libAudios[collection[name].name]);
    etiquetaAudio.play();
    collection[name].talk();
}

var collection = [];
//Add digimons to the collection
collection.push(new Pakiman(0, "Agumon", 1220, 380));
collection.push(new Pakiman(1, "Gabumon", 1360, 300));
collection.push(new Pakiman(2, "Gatomon", 1400, 280));

//Read and draw saved digimons
for(var digimons of collection) {
    digimons.show();
}


