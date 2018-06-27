var play = $("#pp");
var digit = $("#digit");
var piano = Synth.createInstrument('piano');
var i=0;
var thisdigit;
var paused=1;
var pireader;
var tone=100;
var interv=400;

function playnow(tone){
    var t=tone%5;
    note=['A','B','C','D','E','F','G'];
    duration=[6,4,5,4,5,5,4,4,5,4];
    piano.play(note[t],t,duration[t]-2);
}

play.click(()=> {
    play.toggleClass("fa fa-play");
    play.toggleClass("fa fa-pause");
    if(paused==1){
    pireader = setInterval(() => {
        thisdigit=pi[i];
        if(i<pi.length){
            digit.text(thisdigit);
            tone=parseInt(thisdigit);
            if(tone!=0 || tone!=8){
            playnow(tone);}
            console.log(interv);
            interv=((i%7)*100)+600;
            i++;}
    },interv);
    paused=0;
    }

    else if(paused==0){
        clearInterval(pireader);
        paused=1;
    }
}
);
play.on("dblclick",()=>{
    clearInterval(pireader);
    i=0;
    digit.html("&#x03C0");
});

