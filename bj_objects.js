

function Screen(name, type, bg, btn, slider, text, input, image, subScr) {
    console.log('Screen');
    this.name = name;
    this.type = type;
    this.bg = bg;
    this.btn = btn;
    this.slider = slider;
    this.text = text;
    this.input = input;
    this.image = image;
    this.subScr = subScr;
}

function Player(id, name) {
    console.log('Player');
    this.id = id;
    this.name = name;
    this.state = "inactive";
    this.hand = null;
    this.score = 0;
    this.onesBet = 0;
    this.fivesBet = 0;
    this.tensBet = 0;
    this.onesBank = 20;
    this.fivesBank = 30;
    this.tensBank = 50;
}

function Display(whichDisplay) {
    console.log('Display');
    this.name = whichDisplay;
    this.rowSpansArray = null;
    this.playerStateItems = {
        inactive: ["borderH", "borderV", "pName", "pScore", "pBank"],
        active: ["borderH", "borderV", "pName", "pScore", "pBank", "pCards"],
        placeBets: ["borderH", "borderV", "pName", "pScore", "pBank", "pCards", "pBet", "pBet_1s", "pBet_5s", "pBet_10s", "betOnesSlider", "betFivesSlider", "betTensSlider"],
        hitMeHoldMe: ["borderH", "borderV", "pName", "pScore", "pBank", "pCards", "pBet", "pBet_1s", "pBet_5s", "pBet_10s", "hitMeBtn", "holdMeBtn"],
        turnOver: ["borderH", "borderV", "pName", "pScore", "pBank", "pCards"],
        handOver: ["borderH", "borderV", "pName", "pScore", "pBank"]
    };
}

function Game(whichGame) {
    console.log('Game');
    this.name = whichGame;
    this.deckArray = [];
    this.deckPointsArray = [];
    this.currentPlayer = 0;
    this.currentScreen = null;
    this.playerNamesArray = [];
    this.playerObjectsArray = [player1, player2, player3, dealer];
    this.screenObjectsArray = [splash, nameEnter, enterPlay, playGame];
    this.subcreenObjectsArray = [player1_scr, player2_scr, player3_scr, dealer_scr, scoreboard_scr];
    this.onesBet = 0;
    this.fivesBet = 0;
    this.tensBet = 0;
}
