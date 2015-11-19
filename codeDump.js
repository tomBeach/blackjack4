

var player1_scr = new Screen(
    /* name:   */ "player1",
    /* type:   */ "player",
    /* bg:     */ [
        { name: "borderH", type: "bg", iR:1, iC:0, iW:6, iH:1, merge: null, class: "pBorder-1" },
        { name: "borderV", type: "bg", iR:1, iC:5, iW:1, iH:3, merge: null, class: "pBorder-1" }],
    /* btn:    */ [{ name: "hitMeBtn", callback: "hitMe", type: "btn", iR:1, iC:7, iW:1, iH:1, merge: null, class: "button", image: "hitMeBW.png", value: "hit me!" },
        { name: "holdMeBtn", callback: "holdMe", type: "btn", iR:1, iC:8, iW:1, iH:1, merge: null, class: "button", image: "holdMeBW.png", value: "hold" }],
    /* slider: */ [
        { name:"betOnes", callback:"mngBets", type:"slider", iR:1, iC:6, iW:1, iH:1, merge:null, class:"ones", value:"$20", tooltipOver: "slide to bet $1", tooltipOut: ""  },
        { name:"betFives", callback:"mngBets", type:"slider", iR:2, iC:6, iW:1, iH:1, merge:null, class:"fives", value:"$30", tooltipOver: "slide to bet $5", tooltipOut: ""  },
        { name:"betTens", callback:"mngBets", type:"slider", iR:3, iC:6, iW:1, iH:1, merge:null, class:"tens", value:"$50", tooltipOver: "slide to bet $10", tooltipOut: ""  }],
    /* text:   */ [
        { name: "pName", type: "text", iR:1, iC:1, iW:3, iH:1, merge: "merge", class: "pBorder-1", value: null },
        { name: "pBank", type: "text", iR:1, iC:5, iW:1, iH:1, merge: null, class: "pBorder-1 bank", value: "100" },
        { name: "pScore", type: "text", iR:2, iC:5, iW:1, iH:1, merge: null, class: "pBorder-1", value: 0 },
        { name: "pBet", type: "text", iR:4, iC:15, iW:1, iH:1, merge: null, class: "pBorder-1 bet", value: "0" },
        { name: "pBet_1s", type: "text", iR:4, iC:12, iW:1, iH:1, merge: null, class: "pBorder-1 table", value: "0" },
        { name: "pBet_5s", type: "text", iR:4, iC:13, iW:1, iH:1, merge: null, class: "pBorder-1 table", value: "0" },
        { name: "pBet_10s", type: "text", iR:4, iC:14, iW:1, iH:1, merge: null, class: "pBorder-1 table", value: "0" },
        { name: "pCards", type: "text", iR:2, iC:4, iW:1, iH:2, merge: "merge", class: "card-1", value: null }],
    /* input:  */ null,
    /* image:  */ null);

    // ======= ======= ======= nextSubscreen ======= ======= =======
    Display.prototype.nextSubscreen = function(playerIndex) {
        console.log("nextSubscreen");
        console.log("  playerIndex: " + playerIndex);

        // == player screen items include player index as suffix (e.g. "_1")
        // == makePlayerItems adds current player suffix to generic item names

        currentPlayer = game.playerObjectsArray[playerIndex - 1];
        currentPlayerScreen = game.subcreenObjectsArray[playerIndex - 1];

        // == check for special case of dealer
        if (playerIndex == 4) {
            playerIndex = "D";
        }
        // == game start initialize first screen ("splash")
        if (currentPlayer.state == null) {
            currentPlayer.state = "inactive";
        }
        subscreenItemNames = this.playerStateItems[currentPlayer.state];

        var nextItemType, items, nextItem, nextItemName;
        var tempItemsNext = [];
        var tempNamesNext = [];
        itemTypesArray = ["bg", "btn", "slider", "text", "input", "image"];
        for (var i = 0; i < itemTypesArray.length; i++) {
            nextItemType = itemTypesArray[i];
            if (currentPlayerScreen[nextItemType]) {
                items = Array.isArray(currentPlayerScreen[nextItemType]);
                if (items) {
                    for (var j = 0; j < currentPlayerScreen[nextItemType].length; j++) {
                        nextItem = currentPlayerScreen[nextItemType][j];
                        nextItemName = nextItem.name;
                        // console.log("  nextItemName: " + nextItemName);
                        var found = $.inArray(nextItemName, subscreenItemNames) > -1;
                        if (found) {
                            tempItemsNext.push(nextItem);
                            tempNamesNext.push(nextItemName);
                        }
                    }
                } else {
                    nextItem = currentPlayerScreen[nextItemType];
                    nextItemName = nextItem.name;
                    var found = $.inArray(nextItemName, subscreenItemNames) > -1;
                    if (found) {
                        tempItemsNext.push(nextItem);
                        tempNamesNext.push(nextItemName);
                    }
                }
            }
        }

        // == put items from current player state onto screen
        for (var j = 0; j < tempItemsNext.length; j++) {
            nextItem = tempItemsNext[j];
            nextType = nextItem.type;
            indexCell = display.modifyGridRegion(nextItem, playerIndex);
            if (nextType == "input") {
                newTextInput = "<input id='" + nextItem.name + "Input' class='" + nextItem.class + "' type='text' value='Tom'>"
                $(indexCell).append(newTextInput);
                $(newTextInput).attr("id", nextItem.name);
            }
            if ((nextType == "btn") || (nextType == "slider")) {
                display.activateNextItem(nextItem, indexCell);
            }
        }
    }




for (var col = 0; col < (whichItem.iW); col++) {
    if (((row == 0) && (col == 1))) {
        totalColOffset = parseInt(totalSpanOffset + col);
    }
    if (row > 0) {
        totalColOffset = parseInt(totalSpanOffset);
    }
    if (!((row == 0) && (col == 0))) {                              // remove all but index cell in merge area
        nextCell = $(nextRowObject).children()[totalColOffset];
        $(nextCell).remove();
    }
}
// == set row/colspans on index cell to fill space
if (row == (whichItem.iH - 1)) {
    $(indexCell).attr("colSpan", whichItem.iW);
    $(indexCell).attr("rowSpan", whichItem.iH);
    $(indexCell).addClass(whichItem.class);
    if (whichItem.type != "input") {
        $(indexCell).attr("id", whichItem.name);
    }
}

for (var col = 0; col < whichItem.iW; col++) {
    if (((row == 0) && (col == 1))) {
        totalColOffset = temp_iC + col;
    }
    if (row > 0) {
        totalColOffset = temp_iC;
    }
    if ((row == 0) && (col == 0)) {
        indexCell = $(nextRowObject).children()[temp_iC];
    } else {
        nextCell = $(nextRowObject).children()[totalColOffset];
        $(nextCell).remove();
        console.log("  nextCell REMOVED");
    }
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


function Display(whichDisplay) {
    console.log('Display');
    this.name = whichDisplay;
    this.rowSpansArray = null;
    this.playerStateItems = {
        inactive: ["borderH", "borderV", "pName", "pScore", "pBank"],
        active: ["borderH", "borderV", "pName", "pScore", "pBank", "pCards"],
        placeBets: ["borderH", "borderV", "pName", "pScore", "pBank", "pCards", "pBet", "pBets", "pBet_5s", "pBet0s", "betOnesSlider", "betFivesSlider", "betTensSlider"],
        hitMeHoldMe: ["borderH", "borderV", "pName", "pScore", "pBank", "pCards", "pBet", "pBets", "pBet_5s", "pBet0s", "hitMeBtn", "holdMeBtn"],
        turnOver: ["borderH", "borderV", "pName", "pScore", "pBank", "pCards"],
        handOver: ["borderH", "borderV", "pName", "pScore", "pBank"]
    };
}





colSpanOffset = totalSpanOffset + col;
console.log("  colSpanOffset: " + colSpanOffset);

// remove all but index cell in merge area
if ((row == 0) && (col == 0)) {
    indexCell = $(nextRowObject).children()[colSpanOffset];
    console.log("  $(indexCell).attr('id'): " + $(indexCell).attr('id'));
} else {
    nextCell = $(nextRowObject).children()[colSpanOffset];
    // console.log("  $(nextCell).attr('id'): " + $(nextCell).attr('id'));
    $(nextCell).remove();
}



        // if (nextScreen.bg) {
        //     bgs = Array.isArray(nextScreen.bg);
        //     console.log("  bgs: " + bgs);
        //     if (bgs) {
        //         for (var j = 0; j < nextScreen.bg.length; j++) {
        //             nextBg = nextScreen.bg[j];
        //             display.makeGridRegion(nextBg);
        //         }
        //     } else {
        //         display.makeGridRegion(nextScreen.bg);
        //     }
        // }
        // if (nextScreen.btn) {
        //     buttons = Array.isArray(nextScreen.btn);
        //     if (buttons) {
        //         for (var j = 0; j < nextScreen.btn.length; j++) {
        //             nextBtn = nextScreen.btn[j];
        //             display.makeGridRegion(nextBtn);
        //         }
        //     } else {
        //         display.makeGridRegion(nextScreen.btn);
        //     }
        // }
        // if (nextScreen.subScr) {
        //     display.getNextSubScreens(nextScreen.subScr);
        // }
        // this.slider = slider;
        // this.text = text;
        // this.input = input;
        // this.image = image;
        // this.subScr = subScr;






var screenNames = game.allScreens.map(function(nextItem, index) {
    nextName = nextItem.name;
    console.log(index + "  nextName: " + nextName);
    return nextName;
});

console.log("  screenNames: " + screenNames);



// this.allScreens = [splash, nameEnter, enterPlay, placeBets, player1_scr, player2_scr, player3_scr, dealer_scr, gameOver, inactive, active, placeBets, hitMeHoldMe, turnOver, handOver];
this.gameScreens = ["splash", "nameEnter", "enterPlay", "placeBets", "players", "dealer", "gameOver"];
this.subScreens = ["inactive", "active", "placeBets", "hitMeHoldMe", "turnOver", "handOver"];



// ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======
// ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======
// ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======



var display = {
    bgs: {
        table: { name: "table", type: "bg", iR: 4, iC: 11, iW: 6, iH: 4, merge: null, class: "table" },
        logo: { name: "logo", type: "bg", iR: 2, iC: 1, iW: 6, iH: 1, merge: null, class: null }
    },
    btns: {
        orbBtn: { name: "orbBtn", callback: "nextGameState", type: "btn", iR: 5, iC: 12, iW: 3, iH: 1, merge: "merge", class: "orbBtn", value: "START", tooltipOver: "start the game!", tooltipOut: "" },
        enterBtn: { name: "enterBtn", callback: "saveNewPlayer", type: "btn", iR: 6, iC: 12, iW: 3, iH: 1, merge: "merge", class: "enterBtn", value: "ENTER", tooltipOver:  "click ENTER to save player", tooltipOut: "" },
        startBtn: { name: "startBtn", callback: "startGame", type: "btn", iR: 7, iC: 12, iW: 3, iH: 1, merge: "merge", class: "startBtn", value: "START", tooltipOver: "start game", tooltipOut: "click DEAL to deal cards" },
        dealBtn: { name: "dealBtn", callback: "deal", type: "btn", iR: 8, iC: 12, iW: 3, iH: 1, merge: "merge", class: "dealBtn", value: "DEAL", tooltipOver: "deal cards", tooltipOut: "click PLAY when first player is ready" },
        playGameBtn: { name: "playGameBtn", callback: "playGame", type: "btn", iR: 8, iC: 12, iW: 3, iH: 1, merge: "merge", class: "playGameBtn", value: "HIT or HOLD", tooltipOver: "Click after placing bets", tooltipOut: "" },
        playAgainBtn: { name: "playAgainBtn", callback: "playAgain", type: "btn", iR: 8, iC: 12, iW: 3, iH: 1, merge: "merge", class: "playAgainBtn", value: "AGAIN", tooltipOver: "play another hand", tooltipOut: "" },
        newGameBtn: { name: "newGameBtn", callback: "newGame", type: "btn", iR: 11, iC: 13, iW: 1, iH: 1, merge: null, class: "newGameBtn", value: "NEW", tooltipOver: "start a new game", tooltipOut: "" }
    },
    texts: {
        pName_1: { name: "pName_1", type: "text", iR: 8, iC: 12, iW: 3, iH: 1, merge: "merge", class: null, value: null },
        pName_2: { name: "pName_2", type: "text", iR: 9, iC: 12, iW: 3, iH: 1, merge: "merge", class: null, value: null },
        pName_3: { name: "pName_3", type: "text", iR: 10, iC: 12, iW: 3, iH: 1, merge: "merge", class: null, value: null },
        pBank_1: { name: "pBank_1", type: "text", iR: 8, iC: 15, iW: 3, iH: 2, merge: null, class: null, value: 20 },
        pBank_2: { name: "pBank_2", type: "text", iR: 9, iC: 15, iW: 3, iH: 2, merge: null, class: null, value: 40 },
        pBank_3: { name: "pBank_3", type: "text", iR: 10, iC: 15, iW: 3, iH: 2, merge: null, class: null, value: 60 },
        totalBet: { name: "totalBet", type: "text", iR: 5, iC: 15, iW: 1, iH: 1, merge: null, class: null, value: 0 },
        tooltips: { name: "tooltips", type: "text", iR: 9, iC: 11, iW: 5, iH: 2, merge: "merge", class: "tooltips", value: "" }
    },
    inputs: {
        playerName: { name: "playerName", type: "input", iR: 5, iC: 12, iW: 3, iH: 1, merge: "merge", class: "inputText", value: "playerName" }
    },
    images: {},
    regions: {},
    gameScreen: {},
    playerScreens: {}
}

// == PLAYER SCREENS ==
display.subScreens = {
    player_start_1: [player1.bgs.borderH, player1.bgs.borderV, player1.texts.pName, player1.texts.pScore, player1.texts.pBank],
    player_bet_1: [player1.bgs.borderH, player1.bgs.borderV, player1.texts.pName, player1.texts.pScore, player1.texts.pBank, player1.sliders.betOnes, player1.sliders.betFives, player1.sliders.betTens]
}

// == GAME SCREENS ==
display.mainScreens = {
    splash: [display.btns.orbBtn],
    enterName: [display.inputs.playerName, display.btns.enterBtn],
    enterStart: [display.inputs.playerName, display.btns.enterBtn, display.btns.startBtn],
    gameStartPlayers: [display.inputs.playerName, display.btns.enterBtn, display.btns.startBtn, display.subScreens.player_start_1]
}



// ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= =======
// ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= =======
// ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= =======



var game = {
    currentPlayer: null,
    currentSubScreen: null,
    currentGameScreen: null,
    allPlayers: null,
    allSubScreens: null,
    allMainScreens: [display.mainScreens.splash, display.mainScreens.enterName, display.mainScreens.enterStart, display.mainScreens.gameStartPlayers]
}



// ======= ======= ======= screenTest ======= ======= =======
game.screenTest = function() {
    console.log("screenTest");
    prevScreen = game.allMainScreens[0];
    nextScreen = game.allMainScreens[1];
    console.log("  prevScreen: " + prevScreen);
    console.log("  nextScreen: " + nextScreen);

    var user = {};

    function setUsers(data) {
        for (var k in data) {
            if (data.hasOwnProperty(k)) {
               user[k] = data[k];
            }
        }
    }



    for (var i = 0; i < nextScreen.length; i++) {
        nextItem = nextScreen[i];
        console.log(" ");
        for (var key in nextItem)
            console.log("  key: " + key);
            if (key == "name") {
                console.log("  name: " + nextItem[key]);
            }
            if (key == "type") {
                console.log("  type: " + nextItem[key]);
            }
    }
}

// ======= ======= ======= functionTest ======= ======= =======
game.functionTest = function() {
    console.log("functionTest");

    console.log("player1.texts.pName.name: " + player1.texts.pName.name);
    console.log("display.mainScreens.splash[0].callback: " + display.mainScreens.splash[0].callback);
    console.log("display.mainScreens.gameStartPlayers[3]: " + display.mainScreens.gameStartPlayers[3]);
    console.log("display.mainScreens.gameStartPlayers[3][2]: " + display.mainScreens.gameStartPlayers[3][2]);
    console.log("display.mainScreens.gameStartPlayers[3][2].name: " + display.mainScreens.gameStartPlayers[3][2].name);
    console.log("game.allMainScreens[3]: " + game.allMainScreens[3]);
    console.log("game.allMainScreens[3][3]: " + game.allMainScreens[3][3]);
    console.log("game.allMainScreens[3][3][2]: " + game.allMainScreens[3][3][2]);
    console.log("game.allMainScreens[3][3][2].name: " + game.allMainScreens[3][3][2].name);
}

game.screenTest();
game.functionTest();




var dealer_scr = new Screen(
    /* name:   */ "dealer",
    /* bg:     */ null,
    /* btn:    */ null,
    /* slider: */ null,
    /* text:   */ null,
    /* input:  */ null,
    /* image:  */ null);
var player2_scr = new Screen(
    /* name:   */ "player2",
    bg: null,
    btn: null,
    /* slider: */ null,
    text: null,
    input: null,
    image: null);
var player3_scr = new Screen(
    /* name:   */ "player3",
    bg: null,
    btn: null,
    /* slider: */ null,
    text: null,
    input: null,
    image: null);
var scordboard_scr = new Screen(
    /* name:   */ "scordboard",
    bg: null,
    btn: null,
    /* slider: */ null,
    text: null,
    input: null,
    image: null);

    var placeBets = new Screen(
        /* name:   */ null,
        bg: null,
        btn: null,
        /* slider: */ null,
        text: { name: "tooltips", type: "text", iR: 9, iC: 11, iW: 5, iH: 2, merge: "merge", class: "tooltips", value: "" },
        input: null,
        image: null,
        scrArea: [player1_scr, player2_scr, player3_scr, dealer_scr, ]);
    var players = new Screen(
        /* name:   */ null,
        bg: null,
        btn: null,
        /* slider: */ null,
        text: { name: "tooltips", type: "text", iR: 9, iC: 11, iW: 5, iH: 2, merge: "merge", class: "tooltips", value: "" },
        input: null,
        image: null,
        scrArea: [player1, player2, player3, dealer]);
    var gameOver = new Screen(
        /* name:   */ null,
        bg: null,
        btn: [{ name: "playAgainBtn", callback: "playAgain", type: "btn", iR: 8, iC: 12, iW: 3, iH: 1, merge: "merge", class: "playAgainBtn", value: "AGAIN", tooltipOver: "play another hand", tooltipOut: "" }, { name: "newGameBtn", callback: "newGame", type: "btn", iR: 11, iC: 13, iW: 1, iH: 1, merge: null, class: "newGameBtn", value: "NEW", tooltipOver: "start a new game", tooltipOut: "" }],
        /* slider: */ null,
        text: { name: "tooltips", type: "text", iR: 9, iC: 11, iW: 5, iH: 2, merge: "merge", class: "tooltips", value: "" },
        input: null,
        image: null,
        scrArea: [player1_scr, player2_scr, player3_scr, dealer_scr, scordboard_scr]);







// ======= ======= ======= loadStartGameScreen ======= ======= =======
Sequencer.prototype.loadStartGameScreen = function(prevNext) {
    console.log("loadStartGameScreen");

    var nextItemTypes, nextItem, nextType;
    var currentGameScreen = this.currentGameScreen;
    var gameScreens = this.gameScreens(currentGameScreen);
    var itemTypesArray = [gameScreens.bg, gameScreens.btn, gameScreens.text, gameScreens.input, gameScreens.image]

    for (var j = 0; j < itemTypesArray.length; j++) {
        nextItemTypes = itemTypesArray[j];
        if (nextItemTypes != null) {
            for (var i = 0; i < nextItemTypes.length; i++) {
                nextItem = nextItemTypes[i];
                nextType = nextItem.type;
                display.modifyGridRegion(nextItem, prevNext);
            }
        }
    }

}



player.sliderParams.betOnesBtn, player.sliderParams.betFivesBtn, player.sliderParams.betTensBtn



case "playGame":
    var playGame = {
        name: "playGame",
        bg: null,
        btn: [player.sliderParams.betOnesBtn, player.sliderParams.betFivesBtn, player.sliderParams.betTensBtn, player.btnParams.hitMeBtn, player.btnParams.holdMeBtn],
        text: [game.gameParams("text").tooltips],
        input: null,
        image: null
    }
    return playGame;
    break;
case "hitMe":
    var hitMe = {
        name: "hitMe",
        bg: null,
        btn: [player.sliderParams.betOnesBtn, player.sliderParams.betFivesBtn, player.sliderParams.betTensBtn, player.btnParams.hitMeBtn, player.btnParams.holdMeBtn],
        text: [game.gameParams("text").tooltips],
        input: null,
        image: null
    }
    return hitMe;
    break;
case "holdMe":
    var holdMe = {
        name: "holdMe",
        bg: null,
        btn: [player.sliderParams.betOnesBtn, player.sliderParams.betFivesBtn, player.sliderParams.betTensBtn, player.btnParams.hitMeBtn, player.btnParams.holdMeBtn],
        text: [game.gameParams("text").tooltips],
        input: null,
        image: null
    }
    return holdMe;
    break;
case "turnOver":
    var turnOver = {
        name: "turnOver",
        bg: null,
        btn: [player.sliderParams.betOnesBtn, player.sliderParams.betFivesBtn, player.sliderParams.betTensBtn, player.btnParams.hitMeBtn, player.btnParams.holdMeBtn],
        text: [game.gameParams("text").tooltips],
        input: null,
        image: null
    }
    return turnOver;
    break;











case "slider":
    if (buttonActivate == true) {
        if (whichItem.image == null) {
            $(indexCell).text(whichValue);
        }
        sequencer.activateButton(indexCell, whichItem.callback)
        // console.log("  whichItem.callback: " + whichItem.callback);
    } else {
        sequencer.deActivateButton(indexCell, whichItem.callback)
    }
    break;
case "2wayBtn":
    if (buttonActivate == true) {
        if (whichItem.image == null) {
            $(indexCell).text(whichValue);
        } else {
            btnL = $(new Image()).attr('src', ("images/" + whichItem.image + "In.png")).appendTo($(indexCell));
            btnR = $(new Image()).attr('src', ("images/" + whichItem.image + "Out.png")).appendTo($(indexCell));
            $(btnL).attr("id", whichItem.name + "In");
            $(btnR).attr("id", whichItem.name + "Out");
        }
        sequencer.activateButton(indexCell, whichItem.callback)
        // console.log("  whichItem.callback: " + whichItem.callback);
    } else {
        sequencer.deActivateButton(indexCell, whichItem.callback)
    }
    break;




dealerFlag = false;
totalCards = 0;
cardCount = 0;


flipCards = setInterval(function() {
    console.log("  playerIndex: " + playerIndex);
    cardCount++;
    cardIndex++;
    if (!nextPlayer) {
        nextPlayer = self.playerObjectsArray[playerIndex];
        totalCards += nextPlayer.hand.length;
    } else if ((playerIndex > self.playerNamesArray.length - 1) && (dealerFlag == false)) {
        nextPlayer = self.dealer;
        dealerFlag = true;
        playerIndex = 0;
        cardIndex = 0;
        totalCards += nextPlayer.hand.length;
    }

    console.log("  nextPlayer.name: " + nextPlayer.name);

    if (cardIndex > nextPlayer.hand.length - 1) {
        console.log("  -- next player1 -- ");
        if (dealerFlag == false) {
            console.log("  -- next player2 -- ");
            playerIndex++;
            cardIndex = -1;
            nextPlayer = self.playerObjectsArray[playerIndex];
            totalCards += nextPlayer.hand.length;
        } else {
            stopFlips();
        }
    } else {
        nextCard = nextPlayer.hand[cardIndex];
        $("#" + nextCard).addClass('flipper');
    }
    // if (cardCount > totalCards) {
    //     stopFlips();
    // }




        // var flipCardsP;
        // for (var i = 0; i < (this.playerNamesArray.length); i++) {
        //     nextPlayer = this.playerObjectsArray[i];
        //     console.log("  nextPlayer: " + nextPlayer.name);
        //
        //     interval = 200;
        //     cardIndex = -1;
        //     flipCardsP = setInterval(function() {
        //         cardIndex++;
        //         console.log("  cardIndexP: " + cardIndex);
        //         interval += 200;
        //         if (cardIndex > nextPlayer.hand.length - 1) {
        //             if (cardIndex > nextPlayer.hand.length) {
        //                 // stopFlips();
        //                 console.log("  nextPlayer: " + dealer.name);
        //                 interval = 800;
        //                 cardIndex = -1;
        //                 var flipCardsD = setInterval(function(){
        //                     cardIndex++;
        //                     console.log("  cardIndexD: " + cardIndex);
        //                     interval += 200;
        //                     if (cardIndex > dealer.hand.length - 1) {
        //                         stopFlips();
        //                     }
        //                     nextCard = dealer.hand[cardIndex];
        //                      $("#" + nextCard).addClass('flipper');
        //                 }, interval);
        //             }
        //             interval += 500;
        //         } else {
        //             nextCard = nextPlayer.hand[cardIndex];
        //              $("#" + nextCard).addClass('flipper');
        //         }
        //     }, interval);
        // }


// ======= ======= ======= reportRowspans ======= ======= =======
Display.prototype.reportRowspans = function(whichRow) {
    console.log("------- reportRowspans ------- row: " + whichRow);
    console.log("   this.tableRowspansArray.length: " + this.tableRowspansArray.length);

    // == display rowspan status for targeted row
    targetRow = 7;
    if (whichRow == targetRow) {
        for (row = 0; row < this.tableRowspansArray.length; row++) {
            nextRow = this.tableRowspansArray[row];
            if (row == whichRow) {
                console.log("   nextRow.length: " + nextRow.length);
                for (col = 0; col < nextRow.length; col++) {
                    nextCol = nextRow[col];
                    if (nextCol.rspan == true) {
                        console.log("  rowspan TRUE: " + row + "/" +  col);
                    } else {
                        console.log("  rowspan FALSE: " + row + "/" +  col);
                    }
                }
            }
        }
    }
}




// cardDivString = "<div class='flip-container " + whichClass + "' ontouchstart='this.classList.toggle('hover');'>";
cardDivString = "<div class='flip-container " + whichClass + "'>";
// cardDivString += "<div class='flipper'><div class='front'><p class='cardText'>" + cardValue + "</p></div>";
cardDivString += "<div class='preflipper'><div class='front'><p class='cardText'>" + cardValue + "</p></div>";
cardDivString += "<div class='back'><p class='cardText'>" + cardValue + "</p></div></div></div>";

$(indexCell).append(cardDivString);
// $(indexCell).children().toggleClass("flipper");
// console.log("  $(indexCell).children().length: " + $(indexCell).children().length);


var textType = whichName.substring(0, 5);
if (textType == "pBank") {
    whichValue = "$" + whichValue;
}



case "gameOver":
    gameOver = {
        name: "gameOver",
        bg: null,
        btn: null,
        text: [game.gameParams("text").tooltips],
        input: null,
        image: null
    }
    return gameOver;
    break;


this.deal = this.sequencerParams("deal");
// this.gameStatesObject = {
//
//     var splash = {
//         display.modifyGridRegion("orbBtn", null, "updateGameState", "orbBtn");
//         display.modifyGridRegion("tooltips", "merge", null, "tooltips");
//     }
//
//     var login = {
//         display.modifyGridRegion("enterPlayerBtn", "merge", "saveNewPlayer", "enterPlayerBtn");
//         display.modifyGridRegion("playerName", "merge", null, "playerName");
//     }
//
//     var saveStart = {
//         display.modifyGridRegion("startGameBtn", "merge", "startGame", "startGameBtn");
//     }
//
//     var deal = {
//         display.modifyGridRegion("dealerBorderH_D", null, null, "dealerBorder");
//         display.modifyGridRegion("dealerBorderV_D", null, null, "dealerBorder");
//         display.modifyGridRegion("gameTable", null, null, "gameTable");
//         display.modifyGridRegion("bankChips_1", "merge", null, null);
//         display.modifyGridRegion("bankChips_2", "merge", null, null);
//         display.modifyGridRegion("bankChips_3", "merge", null, null);
//
//         display.modifyGridRegion("orbBtn", "unmerge", null, "orbBtn");
//         display.modifyGridRegion("enterPlayerBtn", "unmerge", null, "enterPlayerBtn");
//         display.modifyGridRegion("startGameBtn", "unmerge", null, "startGameBtn");
//         display.modifyGridRegion("playerName", "unmerge", null, "playerName");
//
//         display.modifyGridRegion("pBorderH_1", null, null, "pBorder-1");
//         display.modifyGridRegion("pBorderH_2", null, null, "pBorder-2");
//         display.modifyGridRegion("pBorderH_3", null, null, "pBorder-3");
//         display.modifyGridRegion("pBorderV_1", null, null, "pBorder-1");
//         display.modifyGridRegion("pBorderV_2", null, null, "pBorder-2");
//         display.modifyGridRegion("pBorderV_3", null, null, "pBorder-3");
//
//         display.modifyGridRegion("playerName_1", "merge", null, "pBorder-1", "player1");
//         display.modifyGridRegion("playerName_2", "merge", null, "pBorder-2", "player2");
//         display.modifyGridRegion("playerName_3", "merge", null, "pBorder-3", "player3");
//
//         display.modifyGridRegion("playerScore_1", null, null, "pBorder-1", "21");
//         display.modifyGridRegion("playerScore_2", null, null, "pBorder-2", "21");
//         display.modifyGridRegion("playerScore_3", null, null, "pBorder-3", "21");
//     }
//
//     ======= ======= ======= init event objects ======= ======= =======
//
//     display.initGridRegions();
//     display.modifyGridRegion("playerName_1", "unmerge");
// }







// playGame: {
//     bg: null,
//     btn: null,
//     text: [game.gameParams("text").tooltips],
//     input: null,
//     image: null
// },
// bet: {
//     bg: null,
//     btn: [game.gameParams("btn").retOnesBtn, game.gameParams("btn").retFivesBtn, game.gameParams("btn").retTensBtn, game.gameParams("btn").newGameBtn, player.btnParams.betOnesBtn, player.btnParams.betFivesBtn, player.btnParams.betTensBtn],
//     text: [game.gameParams("text").tooltips],
//     input: null,
//     image: null
// },
// hitMe: {
//     bg: null,
//     btn: [player.btnParams.hitMeBtn, player.btnParams.holdMeBtn],
//     text: [game.gameParams("text").tooltips],
//     input: null,
//     image: null
// },
// holdMe: {
//     bg: null,
//     btn: [player.btnParams.hitMeBtn, player.btnParams.holdMeBtn],
//     text: [game.gameParams("text").tooltips],
//     input: null,
//     image: null
// },
// turnOver: {
//     bg: null,
//     btn: null,
//     text: [game.gameParams("text").tooltips],
//     input: null,
//     image: null
// },
// hitDealer: {
//     bg: null,
//     btn: null,
//     text: [game.gameParams("text").tooltips],
//     input: null,
//     image: null
// },
// gameOver: {
//     bg: null,
//     btn: null,
//     text: [game.gameParams("text").tooltips],
//     input: null,
//     image: null
// },
// doTheMath: {
//     bg: null,
//     btn: [game.gameParams("btn").newGameBtn],
//     text: [game.gameParams("text").tooltips],
//     input: null,
//     image: null
// }
// }



this.gridEventsObject = [
    { name: "gameButton1", iRow: 7, iCol: 12, cGroupW: 3, cGroupH: 1 }
];

this.gridRegionsObject = {

    pBorderH_1: { name: "pBorderH_1", iRow: 2, iCol: 1, cGroupW: 6, cGroupH: 1 },
    // { name: "pBorderV_1", iRow: 2, iCol: 6, cGroupW: 1, cGroupH: 3 },
    // { name: "pBorderH_2", iRow: 5, iCol: 2, cGroupW: 6, cGroupH: 1 },
    // { name: "pBorderV_2", iRow: 5, iCol: 7, cGroupW: 1, cGroupH: 3 },
    // { name: "pBorderH_3", iRow: 8, iCol: 3, cGroupW: 6, cGroupH: 1 },
    // { name: "pBorderV_3", iRow: 8, iCol: 8, cGroupW: 1, cGroupH: 3 },
    // { name: "dealerBorderH_D", iRow: 3, iCol: 11, cGroupW: 6, cGroupH: 1 },
    // { name: "dealerBorderV_D", iRow: 1, iCol: 11, cGroupW: 1, cGroupH: 3 },
    // { name: "playerName_1", iRow: 2, iCol: 3, cGroupW: 3, cGroupH: 1 },
    // { name: "playerName_2", iRow: 5, iCol: 4, cGroupW: 3, cGroupH: 1 },
    // { name: "playerName_3", iRow: 8, iCol: 5, cGroupW: 3, cGroupH: 1 },
    // { name: "bankChips_1", iRow: 3, iCol: 7, cGroupW: 3, cGroupH: 2 },
    // { name: "bankChips_2", iRow: 6, iCol: 8, cGroupW: 3, cGroupH: 2 },
    // { name: "bankChips_3", iRow: 9, iCol: 9, cGroupW: 3, cGroupH: 2 },
    // { name: "gameTable", iRow: 5, iCol: 12, cGroupW: 3, cGroupH: 3 },
    //
    // // == btns
    // { name: "orbBtn", iRow: 6, iCol: 13, cGroupW: 1, cGroupH: 1 },
    // { name: "enterPlayerBtn", iRow: 5, iCol: 12, cGroupW: 3, cGroupH: 1 },
    // { name: "startGameBtn", iRow: 7, iCol: 12, cGroupW: 3, cGroupH: 1 },
    //
    // // == text
    // { name: "tooltips", iRow: 9, iCol: 12, cGroupW: 3, cGroupH: 1, value: "" },
    // { name: "playerScore_1", iRow: 2, iCol: 6, cGroupW: 1, cGroupH: 1, value: 0 },
    // { name: "playerScore_2", iRow: 5, iCol: 7, cGroupW: 1, cGroupH: 1, value: 0 },
    // { name: "playerScore_3", iRow: 8, iCol: 8, cGroupW: 1, cGroupH: 1, value: 0 },
    //
    // // == inputs
    // { name: "playerName", iRow: 4, iCol: 12, cGroupW: 3, cGroupH: 1 }
};
