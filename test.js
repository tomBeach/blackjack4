$(document).ready(function(){
    console.log('jQuery loaded');
    console.log('document ready');
    initGame();
});

function initGame() {
    console.log('initGame');

    // ======= ======= ======= ======= ======= SCREENS ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= SCREENS ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= SCREENS ======= ======= ======= ======= =======

    var player1_scr = new Screen("player1", "player");
        player1_scr.borderH = { name:"borderH", type:"bg", iR:1,iC:1,iW:6,iH:1, merge:null, class:"pBorder-1" };
        player1_scr.borderV = { name:"borderV", type:"bg",iR:1,iC:6,iW:1,iH:3, merge:null, class:"pBorder-1" };
        player1_scr.hitMeBtn = { name:"hitMeBtn", callback:"hitMe", type:"btn",iR:1,iC:8,iW:1,iH:1, merge:null, class:"button", image:"hitMeBW.png", value:"hit me!" };
        player1_scr.holdMeBtn = { name:"holdMeBtn", callback:"holdMe", type:"btn",iR:1,iC:9,iW:1,iH:1, merge:null, class:"button", image:"holdMeBW.png", value:"hold" };
        player1_scr.chips1s = { name:"chips1s", callback:"mngBets", type:"slider",iR:1,iC:7,iW:1,iH:1, merge:null, class:"ones", value:"$20", tooltipOver:"slide to bet $1", tooltipOut:""  };
        player1_scr.chips5s = { name:"chips5s", callback:"mngBets", type:"slider",iR:2,iC:7,iW:1,iH:1, merge:null, class:"fives", value:"$30", tooltipOver:"slide to bet $5", tooltipOut:""  };
        player1_scr.chips10s = { name:"chips10s", callback:"mngBets", type:"slider",iR:3,iC:7,iW:1,iH:1, merge:null, class:"tens", value:"$50", tooltipOver:"slide to bet $10", tooltipOut:""  };
        player1_scr.pName = { name:"pName", type:"text",iR:1,iC:2,iW:3,iH:1, merge:"merge", class:"pBorder-1", value:null };
        player1_scr.pBank = { name:"pBank", type:"text",iR:1,iC:6,iW:1,iH:1, merge:null, class:"pBorder-1 bank", value:"100" };
        player1_scr.pScore = { name:"pScore", type:"text",iR:2,iC:6,iW:1,iH:1, merge:null, class:"pBorder-1", value:0 };
        player1_scr.pBet = { name:"pBet", type:"text",iR:5,iC:15,iW:1,iH:1, merge:null, class:"pBorder-1 bet", value:"0" };
        player1_scr.pBet_1s = { name:"pBet_1s", type:"text",iR:5,iC:12,iW:1,iH:1, merge:null, class:"pBorder-1 table", value:"0" };
        player1_scr.pBet_5s = { name:"pBet_5s", type:"text",iR:5,iC:13,iW:1,iH:1, merge:null, class:"pBorder-1 table", value:"0" };
        player1_scr.pBet_10s = { name:"pBet_10s", type:"text",iR:5,iC:14,iW:1,iH:1, merge:null, class:"pBorder-1 table", value:"0" };
        player1_scr.pCards = { name:"pCards", type:"text",iR:2,iC:5,iW:1,iH:2, merge:"merge", class:"card-1", value:null };
        player1_scr.pBetOnes = { name:"pBetOnes", type:"text",iR:1,iC:7,iW:1,iH:1, merge:null, class:"ones", value:"$20", tooltipOver:"$1 chips", tooltipOut:""  };
        player1_scr.pBetFives = { name:"pBetFives", type:"text",iR:2,iC:7,iW:1,iH:1, merge:null, class:"fives", value:"$30", tooltipOver:"$5 chips", tooltipOut:""  };
        player1_scr.pBetTens = { name:"pBetTens", type:"text",iR:3,iC:7,iW:1,iH:1, merge:null, class:"tens", value:"$50", tooltipOver:"$10 chips", tooltipOut:""  };

    var player2_scr = new Screen("player2", "player");
        player2_scr.borderH = { name: "borderH", type: "bg",iR:5,iC:1,iW:6,iH:1, merge: null, class: "pBorder-2" };
        player2_scr.borderV = { name: "borderV", type: "bg",iR:5,iC:6,iW:1,iH:3, merge: null, class: "pBorder-2" };
        player2_scr.hitMeBtn = { name: "hitMeBtn", callback: "hitMe", type: "btn",iR:5,iC:8,iW:1,iH:1, merge: null, class: "button", image: "hitMeBW.png", value: "hit me!" };
        player2_scr.holdMeBtn = { name: "holdMeBtn", callback: "holdMe", type: "btn",iR:5,iC:9,iW:1,iH:1, merge: null, class: "button", image: "holdMeBW.png", value: "hold" };
        player2_scr.chips1s = { name:"chips1s", callback:"mngBets", type:"slider",iR:5,iC:7,iW:1,iH:1, merge:null, class:"ones", value:"$20", tooltipOver: "slide to bet $1", tooltipOut: ""  };
        player2_scr.chips5s = { name:"chips5s", callback:"mngBets", type:"slider",iR:6,iC:7,iW:1,iH:1, merge:null, class:"fives", value:"$30", tooltipOver: "slide to bet $5", tooltipOut: ""  };
        player2_scr.chips10s = { name:"chips10s", callback:"mngBets", type:"slider",iR:7,iC:7,iW:1,iH:1, merge:null, class:"tens", value:"$50", tooltipOver: "slide to bet $10", tooltipOut: ""  };
        player2_scr.pName = { name: "pName", type: "text",iR:5,iC:2,iW:3,iH:1, merge: "merge", class: "pBorder-2", value: null };
        player2_scr.pBank = { name: "pBank", type: "text",iR:5,iC:6,iW:1,iH:1, merge: null, class: "pBorder-2 bank", value: "100" };
        player2_scr.pScore = { name: "pScore", type: "text",iR:6,iC:6,iW:1,iH:1, merge: null, class: "pBorder-2", value: 0 };
        player2_scr.pBet = { name: "pBet", type: "text",iR:6,iC:15,iW:1,iH:1, merge: null, class: "pBorder-2 bet", value: "0" };
        player2_scr.pBet_1s = { name: "pBet_1s", type: "text",iR:6,iC:12,iW:1,iH:1, merge: null, class: "pBorder-2 table", value: "0" };
        player2_scr.pBet_5s = { name: "pBet_5s", type: "text",iR:6,iC:13,iW:1,iH:1, merge: null, class: "pBorder-2 table", value: "0" };
        player2_scr.pBet_10s = { name: "pBet_10s", type: "text",iR:6,iC:14,iW:1,iH:1, merge: null, class: "pBorder-2 table", value: "0" };
        player2_scr.pCards = { name: "pCards", type: "text",iR:6,iC:5,iW:1,iH:2, merge: "merge", class: "card-2", value: null };
        player2_scr.pBetOnes = { name:"pBetOnes", type:"text",iR:5,iC:7,iW:1,iH:1, merge:null, class:"ones", value:"$20", tooltipOver: "$1 chips", tooltipOut: ""  };
        player2_scr.pBetFives = { name:"pBetFives", type:"text",iR:6,iC:7,iW:1,iH:1, merge:null, class:"fives", value:"$30", tooltipOver: "$5 chips", tooltipOut: ""  };
        player2_scr.pBetTens = { name:"pBetTens", type:"text",iR:7,iC:7,iW:1,iH:1, merge:null, class:"tens", value:"$50", tooltipOver: "$10 chips", tooltipOut: ""  };

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





        // ======= ======= ======= ======= ======= OBJECTS ======= ======= ======= ======= =======
        // ======= ======= ======= ======= ======= OBJECTS ======= ======= ======= ======= =======
        // ======= ======= ======= ======= ======= OBJECTS ======= ======= ======= ======= =======





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
        this.screenNamesArray = ["splash", "nameEnter", "enterPlay", "playGame", "doTheMath"];
        this.playerObjectsArray = [player1, player2, player3, dealer];
        this.subscreenObjectsArray = [player1_scr, player2_scr, player3_scr, dealer_scr, scoreboard_scr];
        this.subscreenObjectsArray
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




    // ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======





    // ======= ======= ======= nextGameScreen ======= ======= =======
    Display.prototype.nextGameScreen = function() {
        console.log("");
        console.log("nextGameScreen");
        console.log("== PREV gameScreen == " + game.currentScreen);

        // identify where we are in the game (prev screen/next screen/selected screen)
        // use current screen name to identify current screen index

        var prevItemNames, nextItemNames, nextScreenIndex;
        var REMprevItems = [];
        var ADDnextItems = [];

        // == game start initialize first screen ("splash")
        if (game.currentScreen == null) {
            game.currentScreen = "splash";
            prevItemNames = [];
            nextItemNames = display.gameStateItems[game.currentScreen];

        // increment screen index to get next screen object
        } else {
            nextScreenIndex = game.screenNamesArray.indexOf(game.currentScreen) + 1;
            if (nextScreenIndex == game.screenNamesArray.length) {
                nextScreenIndex = game.screenNamesArray.indexOf("playGame")
            }
            nextGameScreenName = game.screenNamesArray[nextScreenIndex];
            prevItemNames = display.gameStateItems[game.currentScreen];
            nextItemNames = display.gameStateItems[game.screenNamesArray[nextScreenIndex]];
            game.currentScreen = nextGameScreenName;
        }

        console.log("== NEXT gameScreen == " + game.currentScreen);

        // == identify items to add or remove (by comparison of NAME strings)
        var REMprevNames = $(prevItemNames).not(nextItemNames).get();
        var ADDnextNames = $(nextItemNames).not(prevItemNames).get();
        console.log("  prevItemNames: " + prevItemNames);
        console.log("  nextItemNames: " + nextItemNames);

        // == get screen item OBJECTS from lists of screen item NAMES
        if (prevItemNames) {
            for (var i = 0; i < prevItemNames.length; i++) {
                prevItemName = prevItemNames[i];
                var found = $.inArray(prevItemName, REMprevNames)
                if (found > -1) {
                    prevItem = gameScreen[prevItemName];
                    REMprevItems.push(prevItem);
                }
            }
        }
        for (var i = 0; i < nextItemNames.length; i++) {
            nextItemName = nextItemNames[i];
            var found = $.inArray(nextItemName, ADDnextNames)
            if (found > -1) {
                nextItem = gameScreen[nextItemName];
                ADDnextItems.push(nextItem);
            }
        }

        // == send screen data to screen building functions
        this.addRemoveScreenItems(REMprevItems, ADDnextItems);
    }

    // ======= ======= ======= updateSubscreen ======= ======= =======
    Display.prototype.updateSubscreen = function(playerIndex, nextPlayerState) {
        console.log("");
        console.log("updateSubscreen");
        console.log("  playerIndex: " + playerIndex);

        var prevItemNames, nextItemNames, nextScreenIndex;
        var REMprevItems = [];
        var ADDnextItems = [];

        var whichPlayer = game.playerObjectsArray[playerIndex - 1];
        var whichPlayerScreen = game.subscreenObjectsArray[playerIndex - 1];
        var prevPlayerState = whichPlayer.state;
        prevItemNames = this.playerStateItems[prevPlayerState];
        whichPlayer.state = nextPlayerState;
        nextItemNames = this.playerStateItems[nextPlayerState];
        console.log("== PREV playerState == " + prevPlayerState);
        console.log("== NEXT playerState == " + nextPlayerState);

        // == identify items to add or remove (by comparison of NAME strings)
        var REMprevNames = $(prevItemNames).not(nextItemNames).get();
        var ADDnextNames = $(nextItemNames).not(prevItemNames).get();
        console.log("  prevItemNames: " + prevItemNames);
        console.log("  nextItemNames: " + nextItemNames);
        console.log("  REMprevNames: " + REMprevNames);
        console.log("  ADDnextNames: " + ADDnextNames);

        // == get screen item OBJECTS from lists of screen item NAMES
        if (prevItemNames) {
            for (var i = 0; i < prevItemNames.length; i++) {
                prevItemName = prevItemNames[i];
                var found = $.inArray(prevItemName, REMprevNames)
                if (found > -1) {
                    prevItem = whichPlayerScreen[prevItemName];
                    REMprevItems.push(prevItem);
                }
            }
        }
        for (var i = 0; i < nextItemNames.length; i++) {
            nextItemName = nextItemNames[i];
            var found = $.inArray(nextItemName, ADDnextNames)
            if (found > -1) {
                nextItem = whichPlayerScreen[nextItemName];
                ADDnextItems.push(nextItem);
            }
        }

        // == send screen data to screen building functions
        this.addRemoveScreenItems(REMprevItems, ADDnextItems, playerIndex);
    }

    // ======= ======= ======= nextSubscreen ======= ======= =======
    Display.prototype.nextSubscreen = function(playerIndex) {
        console.log("nextSubscreen");

        // == player screen items include player index as suffix (e.g. "_1")
        // == makePlayerItems adds current player suffix to generic item names

        var nextSubscreenItems = [];
        currentPlayer = game.playerObjectsArray[playerIndex - 1];
        currentPlayerScreen = game.subscreenObjectsArray[playerIndex - 1];

        // == check for special case of dealer
        if (playerIndex == 4) {
            playerIndex = "D";
        }

        // == game start initialize first screen ("splash")
        if (currentPlayer.state == null) {
            currentPlayer.state = "inactive";
        }
        if (currentPlayer.name == "dealer") {
            subscreenItemNames = ["borderH","borderV","pName","pScore"];
        } else {
            subscreenItemNames = this.playerStateItems[currentPlayer.state];
        }

        for (var i = 0; i < subscreenItemNames.length; i++) {
            nextItemName = subscreenItemNames[i];
            nextItemObject = currentPlayerScreen[nextItemName];
            nextSubscreenItems.push(nextItemObject);
        }
        console.log("  subscreenItemNames: " + subscreenItemNames);

        // == put items from current player state onto screen
        for (var j = 0; j < nextSubscreenItems.length; j++) {
            nextItem = nextSubscreenItems[j];
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

    // ======= ======= ======= addRemoveScreenItems ======= ======= =======
    Display.prototype.addRemoveScreenItems = function(removeItemsArray, addItemsArray, playerIndex) {
        console.log("addRemoveScreenItems");

        var nextItem, nextType, indexCell, newTextInput;

        // == remove prev items
        if (removeItemsArray) {
            for (var j = 0; j < removeItemsArray.length; j++) {
                nextItem = removeItemsArray[j];
                nextType = nextItem.type;
                if ((nextType == "btn") || (nextType == "slider")) {
                    display.deActivateNextItem(nextItem, indexCell);
                }
                display.unModifyGridRegion(nextItem);
            }
        }

        // == add new items and append child elements if any
        for (var j = 0; j < addItemsArray.length; j++) {
            nextItem = addItemsArray[j];
            nextType = nextItem.type;
            indexCell = display.modifyGridRegion(nextItem, playerIndex);

            // append child elements (inputs, sliders)
            if (nextType == "input") {
                newTextInput = "<input id='" + nextItem.name + "Input' class='" + nextItem.class + "' type='text' value='Tom'>";
                $(indexCell).append(newTextInput);
                $(newTextInput).attr("id", nextItem.name);
            }
            if (nextType == "slider") {
                var sliderLoc = $("#" + nextItem.name + "_" + playerIndex).offset();   // location of grid cell
                var locX =  sliderLoc.left + 80;
                var locY =  sliderLoc.top + 15;
                var sliderId = nextItem.name + "_slider" + "_" + playerIndex;
                sliderString = "<div id='" + sliderId + "' class='slider " + nextItem.class + "'>&nbsp;</div>";
                $(indexCell).append(sliderString);
                $("#" + sliderId).css("left", locX);
                $("#" + sliderId).css("top", locY);
            }

            // == activate interacive elements (buttons/sliders)
            if ((nextType == "btn") || (nextType == "slider")) {
                display.activateNextItem(nextItem, indexCell);
            }
        }
    }





    // ======= ======= ======= ======= ======= GRID ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= GRID ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= GRID ======= ======= ======= ======= =======





    // ======= ======= ======= modifyGridRegion ======= ======= =======
    Display.prototype.modifyGridRegion = function(whichItem, playerIndex, offsetR, offsetC) {
        console.log("modifyGridRegion: " + whichItem.name);

        if (playerIndex) {
            playerIndex = "_" + playerIndex;
        } else {
            playerIndex = "";
        }
        if (!offsetR) { offsetR = 0 };
        if (!offsetC) { offsetC = 0 };
        var tableRows = $("tr");
        var regionType = whichItem.merge;
        // console.log("  whichItem.merge: " + whichItem.merge);
        var loopCount = 0

        // == remove cells from merge area (check row/colspans in each row)
        for (var row = 0; row < whichItem.iH; row++) {
            loopCount++;
            nextRow = whichItem.iR + offsetR + row;
            nextCol = whichItem.iC + offsetC;
            nextRowObject = tableRows[nextRow];
            colspans = this.checkColumnSpans(nextRowObject, nextRow, nextCol);
            rowspans = this.checkRowSpans(nextRow, nextCol);
            temp_iC = nextCol - colspans - rowspans;

            if (regionType == "merge") {
                for (var col = 0; col < whichItem.iW; col++) {
                    if (((row == 0) && (col == 1))) {
                        totalColOffset = temp_iC + col;
                    }
                    if (row > 0) {
                        totalColOffset = temp_iC;
                        display.toggleRowspans(whichItem, offsetR, offsetC, "on")
                    }

                    // remove all but index cell in merge area
                    if ((row == 0) && (col == 0)) {
                        indexCell = $(nextRowObject).children()[temp_iC];
                        $(indexCell).attr("colSpan", whichItem.iW);
                        $(indexCell).attr("rowSpan", whichItem.iH);
                        $(indexCell).addClass(whichItem.class);
                        if (whichItem.type != "input") {
                            $(indexCell).attr("id", whichItem.name + playerIndex);
                        }
                    } else {
                        nextCell = $(nextRowObject).children()[totalColOffset];
                        $(nextCell).remove();
                    }
                }

                // == modify item class via item class parameters
            } else {
                for (var col = 0; col < whichItem.iW; col++) {
                    nextCell = $(nextRowObject).children()[temp_iC + col];
                    $(nextCell).removeClass();
                    $(nextCell).addClass(whichItem.class);
                    if ((row == 0) && (col == 0)) {
                        indexCell = $(nextRowObject).children()[temp_iC];
                        if (whichItem.image != null) {
                            newImage = $(new Image()).attr('src', "images/" + whichItem.image).appendTo($(indexCell));
                            $(newImage).attr("id", whichItem.name);
                        } else {
                            $(indexCell).attr("id", whichItem.name);
                        }
                        $(indexCell).attr("id", whichItem.name + playerIndex);
                    } else {
                        $(nextCell).attr("id", (nextRow) + "-" + (nextCol + col));
                    }
                }
            }
        }
        return indexCell;
    }

    // ======= ======= ======= unModifyGridRegion ======= ======= =======
    Display.prototype.unModifyGridRegion = function(whichItem, offsetR, offsetC) {
        console.log("unModifyGridRegion: " + whichItem.name);
        console.log("  whichItem.iR: " + whichItem.iR);
        console.log("  whichItem.iC: " + whichItem.iC);

        if (!offsetR) { offsetR = 0 };
        if (!offsetC) { offsetC = 0 };
        var tableRows = $("tr");
        var regionType = whichItem.merge;
        var gridEdgeFlag, nextRow, nextCol, nextRowObject, colspans, rowspans, temp_iC;

        // == remove cells from merge area (check row/colspans in each row)
        for (var row = 0; row < whichItem.iH; row++) {
            gridEdgeFlag = false;
            nextRow = whichItem.iR + offsetR + row;
            nextCol = whichItem.iC + offsetC;
            nextRowObject = tableRows[nextRow];
            colspans = this.checkColumnSpans(nextRowObject, nextRow, nextCol);
            rowspans = this.checkRowSpans(nextRow, nextCol);
            temp_iC = nextCol - colspans - rowspans;
            console.log(" ");
            console.log("  colspans: " + colspans);
            console.log("  rowspans: " + rowspans);
            console.log("  temp_iC: " + temp_iC);

            if (regionType == "merge") {
                for (var col = 0; col < (whichItem.iW); col++) {
                    if ((row == 0) && (col == 0)) {
                        indexCell = $(nextRowObject).children()[temp_iC];
                        $(indexCell).remove();
                        console.log("  $(indexCell).attr('id'): " + $(indexCell).attr('id'));
                    }
                    if (temp_iC < 1) {
                        indexRowCell = $(nextRowObject).children()[0];
                        // tempClass = $(indexRowCell).attr('class');
                        // tempId = $(indexRowCell).attr('id');
                        // $(indexRowCell).addClass("cell");
                        // $(indexRowCell).attr("id", (nextRow) + "-" + (nextCol + col));
                        gridEdgeFlag = true;
                    } else {
                        indexRowCell = $(nextRowObject).children()[temp_iC - 1];
                    }
                    for (var col = 0; col < whichItem.iW; col++) {
                        var newCell = document.createElement("td");
                        if ((gridEdgeFlag == true) && (offsetC == 0)) {
                            $(indexRowCell).before(newCell);
                        } else {
                            $(indexRowCell).after(newCell);
                        }
                        $(newCell).addClass("cell");
                        $(newCell).attr("id", (nextRow) + "-" + (nextCol + col));
                    }
                    if (row > 0) {
                        display.toggleRowspans(whichItem, offsetR, offsetC, "off")
                    }
                }
            } else {
                for (var col = 0; col < whichItem.iW; col++) {
                    nextCell = $(nextRowObject).children()[temp_iC + col];
                    if (whichItem.type == "slider") {
                        $(nextCell).empty();
                    } else {
                        if (whichItem.type == "btn") {
                            $(nextCell).empty();
                        }
                        $(nextCell).removeClass();
                        $(nextCell).addClass("cell");
                        $(nextCell).attr("id", (nextRow) + "-" + (temp_iC + col));
                    }
                }
            }
        }
    }

    // ======= ======= ======= activateNextItem ======= ======= =======
    Display.prototype.activateNextItem = function(whichItem, indexCell) {
        console.log("activateNextItem");

        var self = this;
        var indexElement, tooltip;
        var whichAction = whichItem.callback;

        // ======= tooltips =======
        $(indexCell).off("mouseenter").on("mouseenter", function(event){
            // console.log("-- mouseenter");
            indexElement = event.target;
            tooltip = display.getTooltip(indexElement, "over");
        });
        $(indexCell).off("mouseout").on("mouseout", function(event){
            // console.log("-- mouseout");
            indexElement = event.target;
            tooltip = display.getTooltip(indexElement, "out");
        });

        // ======= general =======
        switch(whichAction) {
            case "nextGameScreen":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- nextGameScreen -- -- -- ");
                    self.nextGameScreen();
                    $("#tooltips").text("enter player name and click ENTER");
                });
                break;
            case "saveNewPlayer":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- saveNewPlayer -- -- -- ");
                    game.saveNewPlayer();
                    if (game.playerNamesArray.length < 3) {
                        $("#tooltips").text("enter another player name or click START to begin");
                    }
                });
                break;
            case "startGame":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- startGame -- -- -- ");
                    game.startGame();
                    $("#tooltips").text("");
                });
                break;
            case "mngBets":
                $(indexCell).off("mousedown").on("mousedown", function(){
                    console.log("-- -- -- -- -- mngBets -- -- -- -- -- ");
                    display.moveSlider(event);
                });
                break;
            case "playGame":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- playGame -- -- -- ");
                    game.playGame();
                    $("#tooltips").text("");
                });
                break;
            case "hitMe":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- hitMe -- -- -- ");
                    game.hitMe();
                });
                break;
            case "holdMe":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- holdMe -- -- -- ");
                    game.holdMe();
                });
                break;
            case "playAgain":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- -- -- playAgain -- -- -- -- -- ");
                    game.playAgain();
                });
                break;
            case "newGame":
                $(indexCell).off("click").on("click", function(){
                    console.log("");
                    console.log("-- -- -- -- -- newGame -- -- -- -- -- ");
                    game.newGame();
                });
                break;
        }
    }

    // ======= ======= ======= deActivateNextItem ======= ======= =======
    Display.prototype.deActivateNextItem = function(whichItem, indexCell) {
        // console.log("deActivateNextItem: " + whichItem.name);
    }

    // ======= ======= ======= checkRowSpans ======= ======= =======
    Display.prototype.checkRowSpans = function(whichRow, whichCol) {
        // console.log("checkRowSpans");

        var rowspans = 0;
        var indexRow = 0;
        for (var col = 0; col < 18; col++) {
            if (col < whichCol) {
                rowspanSpanObject = this.rowSpansArray[whichRow][col];
                if (rowspanSpanObject.rspan == true) {
                    rowspans++;
                }
            }
        }
        return rowspans;
    }

    // ======= ======= ======= checkColumnSpans ======= ======= =======
    Display.prototype.checkColumnSpans = function(whichRowObject, whichRow, whichCol) {
        // console.log("checkColumnSpans");

        var colspans = 0;
        var indexCol = 0;
        var rowspans = this.checkRowSpans(whichRow, whichCol);
        for (var col = 0; col < $(whichRowObject).children().length; col++) {
            nextColumnObject = $(whichRowObject).children()[col];
            nextColspan = $(nextColumnObject).attr('colSpan');
            nextColId = $(nextColumnObject).attr('id');
            if ((nextColspan > 1) && (col < (whichCol - colspans - rowspans))) {
                colspans += nextColspan - 1;
            }
        }
        return colspans;
    }

    // ======= ======= ======= toggleRowspans ======= ======= =======
    Display.prototype.toggleRowspans = function(whichItem, offsetR, offsetC, onOff) {
        // console.log("toggleRowspans");

        // == record rowspan elements
        if (whichItem.iH > 1) {
            for (var row = 0; row < whichItem.iH; row++) {
                for (var col = 0; col < whichItem.iW; col++) {
                    // rowspans not recorded for first row of multi-row area
                    if (row != 0) {
                        tableRow = whichItem.iR + offsetR + row;
                        tableCol = whichItem.iC + offsetC + col;
                        if (onOff == "on") {
                            this.rowSpansArray[tableRow][tableCol].rspan = true;
                        } else {
                            this.rowSpansArray[tableRow][tableCol].rspan = false;
                        }
                    }
                }
            }
        }
    }

    // ======= ======= ======= reportRowspans ======= ======= =======
    Display.prototype.reportRowspans = function(whichRow) {
        console.log("reportRowspans ------- ------- row: " + whichRow);

        // == display rowspan status for targeted row
        targetRow = 7;
        if (whichRow == targetRow) {
            for (var row = 0; row < this.tableRowspansArray.length; row++) {
                nextRow = this.tableRowspansArray[row];
                if (row == whichRow) {
                    console.log("   nextRow.length: " + nextRow.length);
                    for (var col = 0; col < nextRow.length; col++) {
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

    // ======= ======= ======= initPlayerScreenData ======= ======= =======
    Display.prototype.initPlayerScreenData = function(whichPlayerScreen, whichPlayer) {
        console.log("initPlayerScreenData");

        if (whichPlayer.id < 4) {
            var totalBank = whichPlayer.onesBank + whichPlayer.fivesBank + whichPlayer.tensBank;
            var totalBet = whichPlayer.onesBet + whichPlayer.fivesBet + whichPlayer.tensBet;
            $("#pScore_" + whichPlayer.id).text(whichPlayer.score);
            $("#pBetOnes_" + whichPlayer.id).text("$" + whichPlayer.onesBank);
            $("#pBetFives_" + whichPlayer.id).text("$" + whichPlayer.fivesBank);
            $("#pBetTens_" + whichPlayer.id).text("$" + whichPlayer.tensBank);
            $("#pBet_1s_" + whichPlayer.id).text("$" + whichPlayer.onesBet);
            $("#pBet_5s_" + whichPlayer.id).text("$" + whichPlayer.fivesBet);
            $("#pBet_10s_" + whichPlayer.id).text("$" + whichPlayer.tensBet);
            $("#pBank_" + whichPlayer.id).text("$" + totalBank);
            $("#pBet_" + whichPlayer.id).text("$" + totalBet);
        } else {
            whichPlayer.id = "D";
            $("#pScore_" + whichPlayer.id).text(whichPlayer.score);
        }
    }

    // ======= ======= ======= getTooltip ======= ======= =======
    Display.prototype.getTooltip = function(whichElement, overOut) {
        console.log("getTooltip");

        // $("#tooltips").text(nextTooltip);
    }

    // ======= ======= ======= initRowSpans ======= ======= =======
    Display.prototype.initRowSpans = function() {
        console.log("initRowSpans");

        var nextRow, nextCol, tableCol, cellRC;
        var rowSpansArray = [];
        var tableRows = $(".row");
        for (var row = 0; row < tableRows.length; row++) {
            nextRow = tableRows[row];
            nextRowArray = [];
            tableCols = $(nextRow).children(".cell");
            for (var col = 0; col < tableCols.length; col++) {
                nextCol = tableCols[col];
                $(nextCol).attr("id", row + "-" + col);
                cellRC = { R:row, C:col, rspan:false };
                nextRowArray.push(cellRC);
            }
            rowSpansArray.push(nextRowArray);
        }
        this.rowSpansArray = rowSpansArray;
    }

    // ======= ======= ======= moveSlider ======= ======= =======
    Display.prototype.moveSlider = function(event) {
	    console.log("-- moveSlider");

	    var dX, dY;
	    var maxY = 100;
	    var minY = 100;
	    var updateChips;
	    var triggerFlag = true;
		var whichSlider = event.target;

	    // ======= selected slider object ======= ======= ======= ======= =======
	    var slider = {
	        slider_id: whichSlider.id,
	        slider_element: whichSlider,
	        player_chips: whichSlider.className.split(/\s+/)[1],
	        player_index: parseInt(whichSlider.id.charAt(whichSlider.id.length-1) - 1),
	        start_mouseX: 0,
	        start_elementX: 0,
	        drag_elementX: 0,
	        zLevel: 3,
            self: this,

	        // ======= MOUSE_DOWN ======= MOUSE_DOWN ======= MOUSE_DOWN ======= MOUSE_DOWN =======
			initSlider: function (newEvent) {
			    // console.log("  initSlider");
                // console.log("   this.slider_id: " + this.slider_id);
                // console.log("   this.player_chips: " + this.player_chips);
                // console.log("   this.player_index: " + this.player_index);
                // console.log("   slider.slider_element.id: " + slider.slider_element.id);
                // console.log("   whichSlider.className: " + whichSlider.className);

			    event.preventDefault();
		        var evt = newEvent || window.event;
	            this.start_mouseX = newEvent.clientX;
	            this.start_elementX = this.slider_element.offsetLeft;
                // console.log("   this.start_elementX: " + this.start_elementX);

		        removeEventSimple(window.document, 'mousedown', display.moveSlider);
	            addEventSimple(window.document, 'mousemove', slider.dragSlider);
	            addEventSimple(window.document, 'mouseup', slider.dropSlider);
	        },

	        // ======= MOUSE_MOVE ======= MOUSE_MOVE ======= MOUSE_MOVE ======= MOUSE_MOVE =======
	        dragSlider: function (newEvent) {
	            // console.log("dragSlider");

		        var evt = newEvent || window.event;
	            dX = parseInt(evt.clientX) - parseInt(slider.start_mouseX);
	            if (dX < -20) {
	            	dX = -20;
	            }
	            if (dX > 20) {
	            	dX = 20;
	            }
	            slider.updateSlider(dX);
	            if (triggerFlag == true) {
		            slider.updateChips(dX);
		            triggerFlag = false;
	            }
	        },
	        updateSlider: function (dX) {
	            // console.log("updateSlider");
	            slider.slider_element.style.left = slider.start_elementX + dX + "px";
	            slider.drag_elementX = slider.start_elementX + dX;
	        },
	        updateChips: function (dX) {
	            console.log("updateChips");
                var player_object = game.playerObjectsArray[this.player_index];
                var player_screen = game.subscreenObjectsArray[this.player_index];
                switch(slider.player_chips) {
                    case "ones":
                        whichBet = "onesBet";
                        whichBank = "onesBank";
                        increment = 1;
                        break;
                    case "fives":
                        whichBet = "fivesBet";
                        whichBank = "fivesBank";
                        increment = 5;
                        break;
                    case "tens":
                        whichBet = "tensBet";
                        whichBank = "tensBank";
                        increment = 10;
                        break;
                }
            	if (dX > 0) {
            		updateChips = setInterval(function() {
                        console.log("   dX+: " + dX);
                        game.placeBet(player_object, whichBet, whichBank, -increment);
                        display.initPlayerScreenData(player_screen, player_object);
            		}, 300);
            	} else {
            		updateChips = setInterval(function() {
                        console.log("   dX-: " + dX);
                        game.placeBet(player_object, whichBet, whichBank, increment);
                        display.initPlayerScreenData(player_screen, player_object);
	            	}, 300);
	            }
	        },

	        // ======= MOUSE_UP ======= MOUSE_UP ======= MOUSE_UP ======= MOUSE_UP =======
	        dropSlider: function(newEvent) {
	            // console.log("dropSlider");
	            clearInterval(updateChips);
	            slider.slider_element.style.left = slider.start_elementX + "px";
		        removeEventSimple(window.document, 'mouseup', slider.dropSlider);
		        removeEventSimple(window.document, 'mousemove', slider.dragSlider);
	        }
 		}

        // ======= events ======= ======= ======= ======= ======= ======= =======
    	function addEventSimple(obj,evt,fn) {
    	    console.log('addEventSimple');
    	    console.log('  obj: ' + obj.id);
    	    if (obj.addEventListener)
    	        obj.addEventListener(evt,fn,false);
    	    else if (obj.attachEvent)
    	        obj.attachEvent('on'+evt,fn);
    	}

    	function removeEventSimple(obj,evt,fn) {
    	    // console.log('removeEventSimple');
    	    if (obj.removeEventListener)
    	        obj.removeEventListener(evt,fn,false);
    	    else if (obj.detachEvent)
    	        obj.detachEvent('on'+evt,fn);
    	}

		slider.initSlider(event);
 		return slider;
	}





    // ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= =======





    // ======= ======= ======= saveNewPlayer ======= ======= =======
    Game.prototype.saveNewPlayer = function() {
        console.log("saveNewPlayer");

        var playerName, playerCount, playerState, newPlayer, playerNameCell;

        playerName = $('#playerNameInput').val();
        if (playerName) {
            playerCount = this.playerNamesArray.length;
            if (playerCount < 3) {

                // == get pre-made player object and set player name on it
                newPlayer = this.playerObjectsArray[playerCount];
                newPlayer.name = playerName;

                // == player names array tracks actual players in current game
                this.playerNamesArray.push(newPlayer.name);
                playerCount = this.playerNamesArray.length;
                display.nextSubscreen(playerCount);
                // display.updatePlayerNames(newPlayer, playerCount);
                playerNameCell = "#pName_" + newPlayer.id;
                $(playerNameCell).text(newPlayer.name);
                $("#tooltips").text("Enter another name or press 'start'");
            }
            if (playerCount == 1) {

                // == activates play game button if no more players to enter
                display.nextGameScreen();
            }
            if (playerCount == 3) {

                // == max of 3 players; advance to game start
                $("#tooltips").text("Max of 3 players.  Start game!");
                game.startGame();
            }
            $("#playerNameInput").val("");
        } else {
            $("#tooltips").text("Enter name or press 'start'");
        }
    }

    // ======= ======= ======= startGame ======= ======= =======
    Game.prototype.startGame = function() {
        console.log("startGame");

        var nextPlayer, nextPlayerScreen;
        display.nextSubscreen(4);   // create dealer screen elements
        playerNameCell = "#pName_D";
        $(playerNameCell).text("dealer");
        display.nextGameScreen();
        for (var i = 0; i < this.playerNamesArray.length; i++) {
            nextPlayer = this.playerObjectsArray[i];
            nextPlayerScreen = this.subscreenObjectsArray[i];
            display.updateSubscreen(nextPlayer.id, "placeBets");
        }
        this.currentPlayer = game.playerObjectsArray[0];
        game.dealCards();
    }

    // ======= ======= ======= dealCards ======= ======= =======
    Game.prototype.dealCards = function(indexCell, whichAction) {
        console.log("");
        console.log("dealCards");

        var winnersArray = [];
        var dealerScreen = this.subscreenObjectsArray[3];
        var nextPlayer, nextSuit, nextValue, nextPoints, cardPointsArray, nextCard, nextPoints;

        // ======= initialize deck
        var suitArray = ['C','D','H','S'];
        var valueArray = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        var pointsArray = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        var tableString, nextValue, nextPoints, cardPoints, nextCard, nextPlayer;

        for (var i = 0; i < suitArray.length; i++) {
            nextSuit = suitArray[i];
            for (var j = 0; j < valueArray.length; j++) {
                nextValue = valueArray[j];
                nextPoints = pointsArray[j];
                this.deckArray.push(nextValue + nextSuit);
                this.deckPointsArray.push(nextPoints);
            }
        }

        // ======= clear previous player hands
        for (var i = 0; i < (this.playerNamesArray.length); i++) {
            nextPlayer = this.playerObjectsArray[i];
            nextPlayer.hand = [];
        }

        // ======= deal cards to each player and dealer
        for (var i = 0; i < (this.playerNamesArray.length); i++) {
            nextPlayer = this.playerObjectsArray[i];
            nextPlayerScreen = this.subscreenObjectsArray[i];

            // ======= getNextCard
            for (var j = 0; j < 2; j++) {
                cardPointsArray = game.getNextCard();				// get card from deck; shrink deck
                nextCard = cardPointsArray[0];
                nextPoints = cardPointsArray[1];
                nextPlayer.hand.push(nextCard);
                nextPlayer.score = nextPlayer.score + nextPoints;   // calculate player score
                this.displayNextCard(nextPlayer, nextPlayerScreen);
            }

            // ======= if Ace card and > 21 (2 aces)
            if (nextPlayer.score > 21) {
                console.log('  2 aces: ' + nextPlayer.score);
                for (var k = 0; k < nextPlayer.hand.length; k++) {
                    nextCard = nextPlayer.hand[k];

                    // ======= change Ace value to 1
                    if (nextCard.indexOf("A") > 0) {
                        nextPlayer.score = nextPlayer.score - 10;
                        console.log('  found ace: ' + nextPlayer.score);
                        break;
                    }
                }
            }

            // ======= instant winner
            if (nextPlayer.score == 21) {
                winnersArray.push(nextPlayer);
            }

            display.initPlayerScreenData(nextPlayerScreen, nextPlayer);

            $("#tooltips").text("Click PLAY button to place bets");
        }

        // ======= deal to dealer
        dealer.hand = []
        for (var j = 0; j < 2; j++) {
            cardPointsArray = game.getNextCard();				// get card from deck; shrink deck
            nextCard = cardPointsArray[0];
            nextPoints = cardPointsArray[1];
            dealer.hand.push(nextCard);
            dealer.score = dealer.score + nextPoints;           // calculate player score
            this.displayNextCard(dealer, dealerScreen);
        }
        display.initPlayerScreenData(dealerScreen, dealer);
        this.flipCards();
    }

    // ======= ======= ======= getNextCard ======= ======= =======
    Game.prototype.getNextCard = function() {
        // console.log("getNextCard");
		var cardIndex = parseInt(Math.random() * this.deckArray.length);
		var nextCard = this.deckArray[cardIndex];
		var nextPoints = this.deckPointsArray[cardIndex];
		this.deckArray.splice(cardIndex, 1);
		this.deckPointsArray.splice(cardIndex, 1);
		return [nextCard, nextPoints];
	}

    // ======= ======= ======= displayNextCard ======= ======= =======
    Game.prototype.displayNextCard = function(whichPlayer, whichSubscreen) {
        console.log("displayNextCard");

        var whichMerge, cardDivString;
        var playerIndex = whichPlayer.id;

                // == get player card object for positioning
        whichCardObject = whichSubscreen.pCards;
        whichClass = whichCardObject.class;
        var whichName = whichCardObject.name;
        var cardCount = whichPlayer.hand.length;
        var cardValue = whichPlayer.hand[cardCount - 1];

        var whichSuit = cardValue.substr(cardValue.length - 1);
        var whichValue = cardValue.substring(0, cardValue.length - 1);
        switch(whichSuit) {
            case "C":
                imageString = "<img src='images/clubs.png' alt='clubs'>";
                break;
            case "D":
                imageString = "<img src='images/diamonds.png' alt='diamonds'>";
                break;
            case "H":
                imageString = "<img src='images/hearts.png' alt='hearts'>";
                break;
            case "S":
                imageString = "<img src='images/spades.png' alt='spades'>";
                break;
        }

        if (whichPlayer.name == "dealer") {
            offsetC = cardCount - 1;
        } else {
            offsetC = -(cardCount - 1);
        }
        offsetR = 0;

        indexCell = display.modifyGridRegion(whichCardObject, playerIndex, offsetR, offsetC)

        cardDivString = "<div class='flip-container'>";
        cardDivString += "<div id='" + cardValue + "' class='cardFlip'><div class='front " + whichClass + "'><p class='cardText'>&nbsp;</p></div>";
        cardDivString += "<div class='back " + whichClass + "'>" + imageString + "<p class='cardText'>" + whichValue + "</p></div></div></div>";

        $(indexCell).append(cardDivString);

    }

    // ======= ======= ======= flipCards ======= ======= =======
    Game.prototype.flipCards = function() {
        console.log("flipCards");

        self = this;
        interval = 400;
        cardIndex = -1;
        cardCount = 0;
        playerIndex = 0;
        nextPlayer = this.playerObjectsArray[0];

        flipCards = setInterval(function() {
            cardCount++;
            if (cardCount > 20) {
                stopFlips();
            }
            if (interval > 400) {
                stopFlips();
            }
            cardIndex++;
            if (cardIndex > nextPlayer.hand.length - 1) {
                if (nextPlayer.name == "dealer") {
                    interval = 1000;
                } else {
                    playerIndex++;
                    if (playerIndex > self.playerNamesArray.length - 1) {
                        nextPlayer = dealer;
                    } else {
                        nextPlayer = self.playerObjectsArray[playerIndex];
                    }
                }
                cardIndex = 0;
            }
            nextCard = nextPlayer.hand[cardIndex];
            $("#" + nextCard).addClass('flipper');
        }, interval);

        function stopFlips() {
            clearInterval(flipCards);
        }
    }

    // ======= ======= ======= placeBet ======= ======= =======
    Game.prototype.placeBet = function(whichPlayer, whichBet, whichBank, increment) {
        console.log("placeBet");
        var limitFlag = false;
        if (increment < 0) {
            whichPlayer[whichBank] = whichPlayer[whichBank] + increment;
            if (whichPlayer[whichBank] < 0) {
                whichPlayer[whichBank] = 0;
                limitFlag = true;
            } else {
                whichPlayer[whichBet] = whichPlayer[whichBet] - increment;
            }
            if (limitFlag == true) {
                $("#tooltips").text("Oops you're out of chips!");
            }
        } else {
            whichPlayer[whichBet] = whichPlayer[whichBet] + increment;
            if (whichPlayer[whichBet] < 0) {
                whichPlayer[whichBet] = 0;
                limitFlag = true;
            } else {
                whichPlayer[whichBank] = whichPlayer[whichBank] - increment;
            }
            if (limitFlag == true) {
                $("#tooltips").text("Total bet is returned");
            }
        }

    }

    // ======= ======= ======= playGame ======= ======= =======
    Game.prototype.playGame = function() {
        console.log("playGame");
        this.currentPlayer = game.playerObjectsArray[0];
        for (var i = 0; i < this.playerNamesArray.length; i++) {
            nextPlayer = this.playerObjectsArray[i];
            if (nextPlayer.name == this.currentPlayer.name) {
                display.updateSubscreen(nextPlayer.id, "hitMeHoldMe");
            } else {
                display.updateSubscreen(nextPlayer.id, "turnOver");
            }
        }
    }

    // ======= ======= ======= hitMe ======= ======= =======
    Game.prototype.hitMe = function() {
	    console.log("hitMe");

	    var nextPlayer = this.currentPlayer;
        var nextPlayerScreen = this.subscreenObjectsArray[nextPlayer.id - 1];
		var cardPoints = this.getNextCard();				// get card from deck; shrink deck
		var nextCard = cardPoints[0];
		var nextPoints = cardPoints[1];
		nextPlayer.hand.push(nextCard);
		nextPlayer.score = nextPlayer.score + nextPoints;
        this.displayNextCard(nextPlayer, nextPlayerScreen);
        $("#pScore_" + nextPlayer.id).text(nextPlayer.score);

		// ======= check for Aces and adjust score
		if (nextPlayer.score > 35) {
			for (var i = 0; i < nextPlayer.hand.length; i++) {
				nextCard = nextPlayer.hand[i];

				// ======= change A value to 1 if > 21 score
				// if (nextCard.indexOf("A") > 0) {
                //     $("#tooltips").text("Your're okay with ace value = 1");
				// 	nextPlayer.score = nextPlayer.score - 10;
				// 	break;
				// }
			}

			// ======= score still high after adjustment
			if (nextPlayer.score > 35) {
                $("#tooltips").text("Bummer... you're over 21!");
				this.turnOver();
			}
		}
        flipCardsP = setTimeout(function(){
            nextCard = nextPlayer.hand[nextPlayer.hand.length - 1];
             $("#" + nextCard).addClass('flipper');
         }, 200);

	}

    // ======= ======= ======= holdMe ======= ======= =======
    Game.prototype.holdMe = function() {
	    console.log("holdMe");
        $("#tooltips").text("Next player turn");
        this.turnOver();
    }

    // ======= ======= ======= turnOver ======= ======= =======
    Game.prototype.turnOver = function() {
	    console.log("turnOver");
        console.log("  PREV player: " + this.currentPlayer.name);

        var currentPlayerIndex = this.currentPlayer.id;
        var currentPlayer = this.currentPlayer;
        var nextPlayer;

        if (currentPlayerIndex < (this.playerNamesArray.length)) {
            display.updateSubscreen(currentPlayerIndex, "turnOver");
            nextPlayer = this.playerObjectsArray[currentPlayerIndex];
            this.currentPlayer = nextPlayer;
            console.log("  NEXT player: " + this.currentPlayer.name);
            display.updateSubscreen(currentPlayerIndex + 1, "hitMeHoldMe");
            $("#tooltips").text(nextPlayer.name + "'s turn");
        } else {
            display.updateSubscreen(currentPlayerIndex, "turnOver");
            this.currentPlayer = this.dealer;
            $("#tooltips").text("dealer's turn");
            this.hitDealer();
        }
    }

    // ======= ======= ======= hitDealer ======= ======= =======
    Game.prototype.hitDealer = function() {
	    console.log("");
        console.log("hitDealer");

        self = this;
        // == hit dealer again or end hand
        if (dealer.score < 18) {
            console.log("  dealer.hand.length1: " + dealer.hand.length);
            cardPointsArray = game.getNextCard();				// get card from deck; shrink deck
            nextCard = cardPointsArray[0];
            nextPoints = cardPointsArray[1];
            dealer.hand.push(nextCard);
            console.log("  dealer.hand.length1: " + dealer.hand.length);
            dealer.score = dealer.score + nextPoints;           // calculate dealer score
            this.displayNextCard(dealer, dealer_scr);                          // display new card
            $("#pScore_D").text(nextPlayer.score);

            flipCards = setTimeout(function(){
                nextCard = dealer.hand[dealer.hand.length - 1];
                 $("#" + nextCard).addClass('flipper');
                 if (dealer.score < 18) {
                     self.hitDealer();
                 } else {
                     display.nextGameScreen();
                     game.doTheMath();
                     $("#tooltips").text("");
                 }
             }, 800);

        } else {
            display.nextGameScreen();
            game.doTheMath();
            $("#tooltips").text("");
        }
    }

    // ======= ======= ======= doTheMath ======= ======= =======
    Game.prototype.doTheMath = function() {
	    console.log("doTheMath");

	    var nextPlayer, nextName, winLossLabel;
	    var dealerScore = dealer.score;
	    var playerWinLoss = 0;
	    var playerWinLossString = 'RESULTS!!\nDealer score:  ' + dealerScore + '\n\n';

	    // =======
	    for (var i = 0; i < (game.playerNamesArray.length); i++) {
	    	nextPlayer = this.playerObjectsArray[i];
            nextName = nextPlayer.name;
	    	console.log("   nextName: " + nextName);
            nextPlayerScreen = this.subscreenObjectsArray[i];

	    	// ======= calculate win/loss results
	    	playerWinLoss = nextPlayer.onesBet + nextPlayer.fivesBet + nextPlayer.tensBet;
	    	console.log("   playerWinLoss: " + playerWinLoss);

    		// ======= calculate wins/losses for players
	    	if ((nextPlayer.score > dealerScore) && (nextPlayer.score < 22)) {
	    		winLossLabel = ' and won $';
                nextPlayer.onesBank += (nextPlayer.onesBet * 2);
                nextPlayer.fivesBank += (nextPlayer.fivesBet * 2);
                nextPlayer.tensBank += (nextPlayer.tensBet * 2);
	    		nextPlayer.totalBank = nextPlayer.totalBank + (playerWinLoss * 2);
	    	} else if ((dealerScore > 21) && (nextPlayer.score < 22)) {
                winLossLabel = ' and won $';
                nextPlayer.onesBank += (nextPlayer.onesBet * 2);
                nextPlayer.fivesBank += (nextPlayer.fivesBet * 2);
                nextPlayer.tensBank += (nextPlayer.tensBet * 2);
	    		nextPlayer.totalBank = nextPlayer.totalBank + (playerWinLoss * 2);
	    	} else if (((nextPlayer.score > 21) || (nextPlayer.score < dealerScore)) && (dealerScore < 22)) {
                winLossLabel = ' and lost $';
            } else {
                winLossLabel = ' tie game' + '\n';
                nextPlayer.onesBank += nextPlayer.onesBet;
                nextPlayer.fivesBank += nextPlayer.fivesBet;
                nextPlayer.tensBank += nextPlayer.tensBet;
                nextPlayer.totalBank = nextPlayer.totalBank + playerWinLoss;
                playerWinLoss = ' no wins/losses' + '\n';
            }
            playerWinLossString += nextName + "'s score:  " + nextPlayer.score + winLossLabel + playerWinLoss + '\n\n';
            nextPlayer.score = 0;
            nextPlayer.onesBet = 0;
            nextPlayer.fivesBet = 0;
            nextPlayer.tensBet = 0;
            display.initPlayerScreenData(nextPlayerScreen, nextPlayer);
	    }
        dealer.score = 0;

        flipCardsP = setTimeout(function(){
            // alert(playerWinLossString);
        }, 1000);
	}

    // ======= ======= ======= clearAllCardstacks ======= ======= =======
    Display.prototype.clearAllCardstacks = function() {
	    console.log("clearAllCardstacks");

        var cardCount;
        var offsetR = 0;
        for (var i = 0; i < game.playerNamesArray.length; i++) {
            nextPlayer = game.playerObjectsArray[i];
            nextPlayerScreen = game.subscreenObjectsArray[i];
            nextHand = nextPlayer.hand;
            cardCount = nextPlayer.hand.length;
            playerCardObject = nextPlayerScreen.pCards;
            for (var j = 0; j < cardCount; j++) {
                // offsetC = -(cardCount - 1 - j);
                offsetC = -j;
                console.log("  offsetC: " + offsetC);
                this.unModifyGridRegion(playerCardObject, offsetR, offsetC)
            }
            display.updateSubscreen(nextPlayer.id, "placeBets");
        }
        dealer = game.playerObjectsArray[3];
        dealerScreen = game.subscreenObjectsArray[3];
        nextHand = dealer.hand;
        cardCount = dealer.hand.length;
        dealerCardObject = dealerScreen.pCards;
        for (var j = 0; j < cardCount; j++) {
            offsetC = (cardCount - 1 - j);
            console.log("  offsetC: " + offsetC);
            this.unModifyGridRegion(dealerCardObject, offsetR, offsetC)
        }
        display.nextGameScreen();
        game.dealCards();
    }

    // ======= ======= ======= playAgain ======= ======= =======
    Game.prototype.playAgain = function() {
	    console.log("playAgain");
        display.clearAllCardstacks();
        // this.startGame();
    }

    // ======= ======= ======= newGame ======= ======= =======
    Game.prototype.newGame = function() {
	    console.log("newGame");
        console.log("  game: " + game);
        console.log("  display: " + display);
        console.log("  sequencer: " + sequencer);
        console.log("  dealer: " + dealer);

        sequencer.clearAllCardstacks();
        display.housekeeping();
        display.initGridElements();
        // sequencer.nextGameState("splash");
        game = null;
        display = null;
        player1 = null;
        player2 = null;
        player3 = null;
        dealer = null;
        sequencer = null;

        game = new Game();
        display = new Display("gameDisplay");
        player1 = new Player(null, 0);
        player2 = new Player(null, 1);
        player3 = new Player(null, 2);
        dealer = new Player("dealer", 3);
        game.playerObjectsArray = [player1, player2, player3];
        game.dealer = dealer;
        sequencer = new Sequencer();
        display.housekeeping();
        display.initGridElements();
        sequencer.nextGameState("splash");

    }

    // ======= ======= ======= ======= ======= initialize ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= initialize ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= initialize ======= ======= ======= ======= =======



    var player1 = new Player(1, "player1");
    var player2 = new Player(2, "player2");
    var player3 = new Player(3, "player3");
    var dealer = new Player(4, "dealer");
    var game = new Game("game1");
    var display = new Display("display1");

    display.initRowSpans();
    display.nextGameScreen();

}
