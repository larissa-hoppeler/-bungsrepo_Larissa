let history;
let count = 0;
let start = 0;
let zeile = 20; /* Versatz in der y Achse, soviel rutscht jeder Eintrag gegen unten*/
let step = 2; /* Um soviel Pixel wird der nächste Eintrag grösser */
let portion = 50;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let url = "/sketch2/chrome_history.json";
    loadJSON = loadJSON(url, loaded);
    background(255);
    fill(0, 0, 255);
    textSize(60);
    textAlign(CENTER, CENTER);
    frameRate(1);


}

function draw() {
    background(255, 150);
    // ellipse(mouseX, mouseY, 50, 50);
    // let textGroesse = map(history[count].visitCount, 1, 20, 14, 36);
    // textSize(textGroesse);
    let textFarbe = map(history[count].visitCount, 255, 0, 0, 0, );
    fill(textFarbe);




    text(history[count].title, width / 2, height / 2);
    count = count + 1;

}

function loaded(data) {
    history = data;
    console.log(history[0].title);
    let aktuellestunde = 10;
    let deckungsgrad = map(aktuellestunde, 0, 23, 0, 255);
    console.log(deckungsgrad);

}



function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "/sketch2/chrome_history.json" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}

for (let i = start; i < portion + start; i++) {
    textSize(i - start) * step;
    text(history[i].title, width / 2, i - start - 1 * zeile);
}