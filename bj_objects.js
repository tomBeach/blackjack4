function Screen(name, type) {
    console.log('Screen');
    this.name = name;
    this.type = type;
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
function Game(whichGame) {
    console.log('Game');
    this.name = whichGame;
    this.deckArray = [];
    this.deckPointsArray = [];
    this.currentPlayer = 0;
    this.currentScreen = null;
    this.playerNamesArray = [];
    this.playerObjectsArray = [player1, player2, player3, dealer];
    this.screenNamesArray = ["splash", "nameEnter", "enterPlay", "playGame", "doTheMath"];
    this.subscreenNamesArray = [];
    this.subscreenObjectsArray = [player1_scr, player2_scr, player3_scr, dealer_scr, scoreboard_scr];
    this.onesBet = 0;
    this.fivesBet = 0;
    this.tensBet = 0;
}
function Display(whichDisplay) {
    console.log('Display');
    this.name = whichDisplay;
    this.rowSpansArray = null;
    this.playerStateItems = {
        inactive: ["borderH","borderV","pName","pScore","pBank"],
        active: ["borderH","borderV","pName","pScore","pBank"],
        placeBets: ["borderH","borderV","pName","pScore","pBank","pBet","pBet_1s","pBet_5s","pBet_10s","pBetOnes","pBetFives","pBetTens","chips1s","chips5s","chips10s"],
        hitMeHoldMe: ["borderH","borderV","pName","pScore","pBank","pBet","pBet_1s","pBet_5s","pBet_10s","pBetOnes","pBetFives","pBetTens","hitMeBtn","holdMeBtn"],
        turnOver: ["borderH","borderV","pName","pScore","pBank","pBet","pBet_1s","pBet_5s","pBet_10s","pBetOnes","pBetFives","pBetTens"],
        handOver: ["borderH","borderV","pName","pScore","pBank"]
    };
    this.gameStateItems = {
        splash: ["orbBtn","tooltips"],
        nameEnter: ["enterBtn","playerName","tooltips"],
        enterPlay: ["enterBtn","startBtn","playerName","tooltips"],
        playGame: ["playBtn","tooltips"],
        doTheMath: ["playAgainBtn","newGameBtn","tooltips"]
    };
}

var player3_scr = new Screen("player3", "player");
    player3_scr.borderH = { name: "borderH", type: "bg",iR:9,iC:1,iW:6,iH:1, merge: null, class: "pBorder-3" };
    player3_scr.borderV = { name: "borderV", type: "bg",iR:9,iC:6,iW:1,iH:3, merge: null, class: "pBorder-3" };
    player3_scr.hitMeBtn = { name: "hitMeBtn", callback: "hitMe", type: "btn",iR:9,iC:8,iW:1,iH:1, merge: null, class: "button", image: "hitMeBW.png", value: "hit me!" };
    player3_scr.holdMeBtn = { name: "holdMeBtn", callback: "holdMe", type: "btn",iR:9,iC:9,iW:1,iH:1, merge: null, class: "button", image: "holdMeBW.png", value: "hold" };
    player3_scr.chips1s = { name:"chips1s", callback:"mngBets", type:"slider",iR:9,iC:7,iW:1,iH:1, merge:null, class:"ones", value:"$20", tooltipOver: "$1", tooltipOut: ""  };
    player3_scr.chips5s = { name:"chips5s", callback:"mngBets", type:"slider",iR:10,iC:7,iW:1,iH:1, merge:null, class:"fives", value:"$30", tooltipOver: "$5", tooltipOut: ""  };
    player3_scr.chips10s = { name:"chips10s", callback:"mngBets", type:"slider",iR:11,iC:7,iW:1,iH:1, merge:null, class:"tens", value:"$50", tooltipOver: "$10", tooltipOut: ""  };
    player3_scr.pName = { name: "pName", type: "text",iR:9,iC:2,iW:3,iH:1, merge: "merge", class: "pBorder-3", value: null };
    player3_scr.pBank = { name: "pBank", type: "text",iR:9,iC:6,iW:1,iH:1, merge: null, class: "pBorder-3 bank", value: "100" };
    player3_scr.pScore = { name: "pScore", type: "text",iR:10,iC:6,iW:1,iH:1, merge: null, class: "pBorder-3", value: 0 };
    player3_scr.pBet = { name: "pBet", type: "text",iR:7,iC:15,iW:1,iH:1, merge: null, class: "pBorder-3 bet", value: "0" };
    player3_scr.pBet_1s = { name: "pBet_1s", type: "text",iR:7,iC:12,iW:1,iH:1, merge: null, class: "pBorder-3 table", value: "0" };
    player3_scr.pBet_5s = { name: "pBet_5s", type: "text",iR:7,iC:13,iW:1,iH:1, merge: null, class: "pBorder-3 table", value: "0" };
    player3_scr.pBet_10s = { name: "pBet_10s", type: "text",iR:7,iC:14,iW:1,iH:1, merge: null, class: "pBorder-3 table", value: "0" };
    player3_scr.pCards = { name: "pCards", type: "text",iR:10,iC:5,iW:1,iH:2, merge: "merge", class: "card-3", value: null };
    player3_scr.pBetOnes = { name:"pBetOnes", type:"text",iR:9,iC:7,iW:1,iH:1, merge:null, class:"ones", value:"$20", tooltipOver: "$1 chips", tooltipOut: ""  };
    player3_scr.pBetFives = { name:"pBetFives", type:"text",iR:10,iC:7,iW:1,iH:1, merge:null, class:"fives", value:"$30", tooltipOver: "$5 chips", tooltipOut: ""  };
    player3_scr.pBetTens = { name:"pBetTens", type:"text",iR:11,iC:7,iW:1,iH:1, merge:null, class:"tens", value:"$50", tooltipOver: "$10 chips", tooltipOut: ""  };

var dealer_scr = new Screen("dealer", "player");
    dealer_scr.borderH = { name: "borderH", type: "bg",iR:3,iC:10,iW:6,iH:1, merge: null, class: "dBorder" };
    dealer_scr.borderV = { name: "borderV", type: "bg",iR:1,iC:10,iW:1,iH:3, merge: null, class: "dBorder" };
    dealer_scr.pName = { name: "pName", type: "text",iR:3,iC:12,iW:3,iH:1, merge: "merge", class: "dBorder", value: null };
    dealer_scr.pScore = { name: "pScore", type: "text",iR:3,iC:10,iW:1,iH:1, merge: null, class: "dBorder", value: 0 };
    dealer_scr.pCards = { name: "pCards", type: "text",iR:1,iC:11,iW:1,iH:2, merge: "merge", class: "card-d", value: null };

var scoreboard_scr = new Screen();

var gameScreen = new Screen("gameScreen", "game");
    gameScreen.orbBtn = { name:"orbBtn", callback:"nextGameScreen", type:"btn", iR:7,iC:12,iW:3,iH:1, merge:"merge", class:"orbBtn", value:"START", tooltipOver:"start the game!", tooltipOut:"" };
    gameScreen.tooltips = { name:"tooltips", type:"text", iR:9,iC:11,iW:5,iH:2, merge:"merge", class:"tooltips", value: "" };
    gameScreen.enterBtn = { name: "enterBtn", callback: "saveNewPlayer", type: "btn", iR:7,iC:12,iW:3,iH:1, merge: "merge", class: "enterBtn", value: "ENTER", tooltipOver:  "click ENTER to save player", tooltipOut: "" };
    gameScreen.playerName = { name: "playerName", type: "input",iR:6,iC:12,iW:3,iH:1, merge: "merge", class: "inputText", value: "playerName" };
    gameScreen.startBtn = { name: "startBtn", callback: "startGame", type: "btn", iR:8,iC:12,iW:3,iH:1, merge: "merge", class: "startBtn", value: "START", tooltipOver: "start game", tooltipOut: "click DEAL to deal cards" };
    gameScreen.playBtn = { name: "playBtn", callback: "playGame", type: "btn", iR:8,iC:12,iW:3,iH:1, merge: "merge", class: "startBtn", value: "BET", tooltipOver: "place bets", tooltipOut: "" };
    gameScreen.playAgainBtn = { name: "playAgainBtn", callback: "playAgain", type: "btn", iR: 8, iC: 12, iW: 3, iH: 1, merge: "merge", class: "playAgainBtn", value: "AGAIN", tooltipOver: "play another hand", tooltipOut: "" };
    gameScreen.newGameBtn = { name: "newGameBtn", callback: "newGame", type: "btn", iR: 11, iC: 13, iW: 1, iH: 1, merge: null, class: "newGameBtn", value: "NEW", tooltipOver: "start a new game", tooltipOut: "" };
