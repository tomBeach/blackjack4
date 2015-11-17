$(document).ready(function(){
    console.log('jQuery loaded');
    console.log('document ready');

    initGame();

});


function initGame() {
    console.log('initGame');

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
        this.gameStateItems = {
            splash: ["orbBtn", "tooltips"],
            nameEnter: ["enterBtn", "playerName", "tooltips"],
            enterPlay: ["enterBtn", "startBtn", "playerName", "tooltips"],
            playGame: ["playBtn", "tooltips"]
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



    // ======= ======= ======= ======= ======= SCREENS ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= SCREENS ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= SCREENS ======= ======= ======= ======= =======




    var player1_scr = new Screen(
        /* name:   */ "player1",
        /* type:   */ "player",
        /* bg:     */ [
            { player: 1, name: "borderH", type: "bg", iR:1, iC:0, iW:6, iH:1, merge: null, class: "pBorder-1" },
            { player: 1, name: "borderV", type: "bg", iR:1, iC:5, iW:1, iH:3, merge: null, class: "pBorder-1" }],
        /* btn:    */ [{ name: "hitMeBtn", callback: "hitMe", type: "btn", iR:1, iC:7, iW:1, iH:1, merge: null, class: "button", image: "hitMeBW.png", value: "hit me!" },
            { name: "holdMeBtn", callback: "holdMe", type: "btn", iR:1, iC:8, iW:1, iH:1, merge: null, class: "button", image: "holdMeBW.png", value: "hold" }],
        /* slider: */ [
            { name:"betOnesSlider", callback:"mngBets", type:"slider", iR:1, iC:6, iW:1, iH:1, merge:null, class:"ones", value:"$20", tooltipOver: "slide to bet $1", tooltipOut: ""  },
            { name:"betFivesSlider", callback:"mngBets", type:"slider", iR:2, iC:6, iW:1, iH:1, merge:null, class:"fives", value:"$30", tooltipOver: "slide to bet $5", tooltipOut: ""  },
            { name:"betTensSlider", callback:"mngBets", type:"slider", iR:3, iC:6, iW:1, iH:1, merge:null, class:"tens", value:"$50", tooltipOver: "slide to bet $10", tooltipOut: ""  }],
        /* text:   */ [
            { player: 1, name: "pName", type: "text", iR:1, iC:1, iW:3, iH:1, merge: "merge", class: "pBorder-1", value: null },
            { player: 1, name: "pBank", type: "text", iR:1, iC:5, iW:1, iH:1, merge: null, class: "pBorder-1 bank", value: "100" },
            { player: 1, name: "pScore", type: "text", iR:2, iC:5, iW:1, iH:1, merge: null, class: "pBorder-1", value: 0 },
            { player: 1, name: "pBet", type: "text", iR:4, iC:15, iW:1, iH:1, merge: null, class: "pBorder-1 bet", value: "0" },
            { name: "pBet_1s", type: "text", iR:4, iC:12, iW:1, iH:1, merge: null, class: "pBorder-1 table", value: "0" },
            { name: "pBet_5s", type: "text", iR:4, iC:13, iW:1, iH:1, merge: null, class: "pBorder-1 table", value: "0" },
            { name: "pBet_10s", type: "text", iR:4, iC:14, iW:1, iH:1, merge: null, class: "pBorder-1 table", value: "0" },
            { player: 1, name: "pCards", type: "text", iR:2, iC:4, iW:1, iH:2, merge: "merge", class: "card-1", value: null }],
        /* input:  */ null,
        /* image:  */ null);

    var player2_scr = new Screen(
        /* name:   */ "player2",
        /* type:   */ "player",
        /* bg:     */ [
            { player: 2, name: "borderH", type: "bg", iR:5, iC:1, iW:6, iH:1, merge: null, class: "pBorder-2" },
            { player: 2, name: "borderV", type: "bg", iR:5, iC:6, iW:1, iH:3, merge: null, class: "pBorder-2" }],
        /* btn:    */ [{ name: "hitMeBtn", callback: "hitMe", type: "btn", iR:5, iC:8, iW:1, iH:1, merge: null, class: "button", image: "hitMeBW.png", value: "hit me!" },
            { name: "holdMeBtn", callback: "holdMe", type: "btn", iR:5, iC:9, iW:1, iH:1, merge: null, class: "button", image: "holdMeBW.png", value: "hold" }],
        /* slider: */ [
            { name:"betOnesSlider", callback:"mngBets", type:"slider", iR:5, iC:7, iW:1, iH:1, merge:null, class:"ones", value:"$20", tooltipOver: "slide to bet $1", tooltipOut: ""  },
            { name:"betFivesSlider", callback:"mngBets", type:"slider", iR:6, iC:7, iW:1, iH:1, merge:null, class:"fives", value:"$30", tooltipOver: "slide to bet $5", tooltipOut: ""  },
            { name:"betTensSlider", callback:"mngBets", type:"slider", iR:7, iC:7, iW:1, iH:1, merge:null, class:"tens", value:"$50", tooltipOver: "slide to bet $10", tooltipOut: ""  }],
        /* text:   */ [
            { player: 2, name: "pName", type: "text", iR:5, iC:2, iW:3, iH:1, merge: "merge", class: "pBorder-2", value: null },
            { player: 2, name: "pBank", type: "text", iR:5, iC:6, iW:1, iH:1, merge: null, class: "pBorder-2 bank", value: "100" },
            { player: 2, name: "pScore", type: "text", iR:6, iC:6, iW:1, iH:1, merge: null, class: "pBorder-2", value: 0 },
            { player: 2, name: "pBet", type: "text", iR:5, iC:15, iW:1, iH:1, merge: null, class: "pBorder-2 bet", value: "0" },
            { name: "pBet_1s", type: "text", iR:5, iC:12, iW:1, iH:1, merge: null, class: "pBorder-2 table", value: "0" },
            { name: "pBet_5s", type: "text", iR:5, iC:13, iW:1, iH:1, merge: null, class: "pBorder-2 table", value: "0" },
            { name: "pBet_10s", type: "text", iR:5, iC:14, iW:1, iH:1, merge: null, class: "pBorder-2 table", value: "0" },
            { player: 2, name: "pCards", type: "text", iR:6, iC:5, iW:1, iH:2, merge: "merge", class: "card-2", value: null }],
        /* input:  */ null,
        /* image:  */ null);

    var player3_scr = new Screen(
        /* name:   */ "player3",
        /* type:   */ "player",
        /* bg:     */ [
            { player: 3, name: "borderH", type: "bg", iR:9, iC:2, iW:6, iH:1, merge: null, class: "pBorder-3" },
            { player: 3, name: "borderV", type: "bg", iR:9, iC:7, iW:1, iH:3, merge: null, class: "pBorder-3" }],
        /* btn:    */ [{ name: "hitMeBtn", callback: "hitMe", type: "btn", iR:9, iC:9, iW:1, iH:1, merge: null, class: "button", image: "hitMeBW.png", value: "hit me!" },
            { name: "holdMeBtn", callback: "holdMe", type: "btn", iR:9, iC:10, iW:1, iH:1, merge: null, class: "button", image: "holdMeBW.png", value: "hold" }],
        /* slider: */ [
            { name:"betOnesSlider", callback:"mngBets", type:"slider", iR:9, iC:8, iW:1, iH:1, merge:null, class:"ones", value:"$20", tooltipOver: "slide to bet $1", tooltipOut: ""  },
            { name:"betFivesSlider", callback:"mngBets", type:"slider", iR:10, iC:8, iW:1, iH:1, merge:null, class:"fives", value:"$30", tooltipOver: "slide to bet $5", tooltipOut: ""  },
            { name:"betTensSlider", callback:"mngBets", type:"slider", iR:11, iC:8, iW:1, iH:1, merge:null, class:"tens", value:"$50", tooltipOver: "slide to bet $10", tooltipOut: ""  }],
        /* text:   */ [
            { player: 3, name: "pName", type: "text", iR:9, iC:3, iW:3, iH:1, merge: "merge", class: "pBorder-3", value: null },
            { player: 3, name: "pBank", type: "text", iR:9, iC:7, iW:1, iH:1, merge: null, class: "pBorder-3 bank", value: "100" },
            { player: 3, name: "pScore", type: "text", iR:10, iC:7, iW:1, iH:1, merge: null, class: "pBorder-3", value: 0 },
            { player: 3, name: "pBet", type: "text", iR:6, iC:15, iW:1, iH:1, merge: null, class: "pBorder-3 bet", value: "0" },
            { name: "pBet_1s", type: "text", iR:6, iC:12, iW:1, iH:1, merge: null, class: "pBorder-3 table", value: "0" },
            { name: "pBet_5s", type: "text", iR:6, iC:13, iW:1, iH:1, merge: null, class: "pBorder-3 table", value: "0" },
            { name: "pBet_10s", type: "text", iR:6, iC:14, iW:1, iH:1, merge: null, class: "pBorder-3 table", value: "0" },
            { player: 3, name: "pCards", type: "text", iR:10, iC:6, iW:1, iH:2, merge: "merge", class: "card-3", value: null }],
        /* input:  */ null,
        /* image:  */ null);

    var dealer_scr = new Screen(
        /* name:   */ "dealer",
        /* type:   */ "player",
        /* bg:     */ [
            { player: "D", name: "borderH", type: "bg", iR:3, iC:10, iW:6, iH:1, merge: null, class: "dBorder" },
            { player: "D", name: "borderV", type: "bg", iR:1, iC:10, iW:1, iH:3, merge: null, class: "dBorder" }],
        /* btn:    */ null,
        /* slider: */ null,
        /* text:   */ [
            { player: "D", name: "pName", type: "text", iR:3, iC:12, iW:3, iH:1, merge: "merge", class: "dBorder", value: null },
            { player: "D", name: "pScore", type: "text", iR:3, iC:10, iW:1, iH:1, merge: null, class: "dBorder", value: 0 },
            { player: "D", name: "pCards", type: "text", iR:1, iC:11, iW:1, iH:2, merge: "merge", class: "card-d", value: null }],
        /* input:  */ null,
        /* image:  */ null);

    var scoreboard_scr = new Screen();

    var splash = new Screen(
        /* name:   */ "splash",
        /* type:   */ "game",
        /* bg:     */ null,
        /* btn:    */ { name: "orbBtn", callback: "nextGameScreen", type: "btn", iR:5, iC:12, iW:3, iH:1, merge: "merge", class: "orbBtn", value: "START", tooltipOver: "start the game!", tooltipOut: "" },
        /* slider: */ null,
        /* text:   */ { name: "tooltips", type: "text", iR:9, iC:11, iW:5, iH:2, merge: "merge", class: "tooltips", value: "" },
        /* input:  */ null,
        /* image:  */ null,
        /* subScr: */ ["player", "scoreboard"]);

    var nameEnter = new Screen(
        /* name:   */ "nameEnter",
        /* type:   */ "game",
        /* bg:     */ null,
        /* btn:    */ { name: "enterBtn", callback: "saveNewPlayer", type: "btn", iR:6, iC:12, iW:3, iH:1, merge: "merge", class: "enterBtn", value: "ENTER", tooltipOver:  "click ENTER to save player", tooltipOut: "" },
        /* slider: */ null,
        /* text:   */ { name: "tooltips", type: "text", iR:9, iC:11, iW:5, iH:2, merge: "merge", class: "tooltips", value: "" },
        /* input:  */ { name: "playerName", type: "input", iR:5, iC:12, iW:3, iH:1, merge: "merge", class: "inputText", value: "playerName" },
        /* image:  */ null,
        /* subScr: */ ["player"]);

    var enterPlay = new Screen(
        /* name:   */ "enterPlay",
        /* type:   */ "game",
        /* bg:     */ null,
        /* btn:    */ [
            { name: "enterBtn", callback: "saveNewPlayer", type: "btn", iR:6, iC:12, iW:3, iH:1, merge: "merge", class: "enterBtn", value: "ENTER", tooltipOver:  "click ENTER to save player", tooltipOut: "" },
            { name: "startBtn", callback: "startGame", type: "btn", iR:7, iC:12, iW:3, iH:1, merge: "merge", class: "startBtn", value: "START", tooltipOver: "start game", tooltipOut: "click DEAL to deal cards" }],
        /* slider: */ null,
        /* text:   */ { name: "tooltips", type: "text", iR:9, iC:11, iW:5, iH:2, merge: "merge", class: "tooltips", value: "" },
        /* input:  */ { name: "playerName", type: "input", iR:5, iC:12, iW:3, iH:1, merge: "merge", class: "inputText", value: "playerName" },
        /* image:  */ null,
        /* subScr: */ ["player", "scoreboard"]);

    var playGame = new Screen(
        /* name:   */ "playGame",
        /* type:   */ "game",
        /* bg:     */ null,
        /* btn:    */ [{ name: "playBtn", callback: "playGame", type: "btn", iR:7, iC:12, iW:3, iH:1, merge: "merge", class: "startBtn", value: "BET", tooltipOver: "place bets", tooltipOut: "" }],
        /* slider: */ null,
        /* text:   */ { name: "tooltips", type: "text", iR:9, iC:11, iW:5, iH:2, merge: "merge", class: "tooltips", value: "" },
        /* input:  */ null,
        /* image:  */ null,
        /* subScr: */ null);



    // ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======



    // ======= ======= ======= makeSlider ======= ======= =======
    Display.prototype.makeSlider = function(whichItem, playerIndex) {
        console.log("makeSlider");
        console.log("  whichItem: " + whichItem.name);
        console.log("  playerIndex: " + playerIndex);

        var sliderLoc = $("#" + whichItem.name + "_" + playerIndex).offset();   // location of grid cell
        var locX =  sliderLoc.left + 100;
        var locY =  sliderLoc.top + 15;
        var sliderId = "slider_" + whichItem.name;

        sliderString = "<div id='" + sliderId + "' class='slider " + whichItem.class + "'>&nbsp;</div>";
        $("body").append(sliderString);
        $("#" + sliderId).css("left", locX);
        $("#" + sliderId).css("top", locY);
        // console.log("  sliderId.eq: " + $(sliderId).eq(0));
        // console.log("  sliderId.eq: " + $(sliderId).eq(1));
        var sliderDiv = $("#" + sliderId);

        return sliderDiv;
    }

    // ======= ======= ======= updateSubscreen ======= ======= =======
    Display.prototype.updateSubscreen = function(playerIndex, nextPlayerState) {
        console.log("");
        console.log("updateSubscreen");
        console.log("  playerIndex: " + playerIndex);

        var prevScreen, nextScreen;
        var REMprevItems = [];
        var ADDnextItems = [];
        var whichPlayer = game.playerObjectsArray[playerIndex - 1];
        var whichPlayerScreen = game.subcreenObjectsArray[playerIndex - 1];
        var prevPlayerState = whichPlayer.state;
        prevPlayerItems = this.playerStateItems[prevPlayerState];
        whichPlayer.state = nextPlayerState;
        nextPlayerItems = this.playerStateItems[nextPlayerState];

        var REMprevNames = $(prevPlayerItems).not(nextPlayerItems).get();
        var ADDnextNames = $(nextPlayerItems).not(prevPlayerItems).get();
        console.log("  prevPlayerItems: " + prevPlayerItems);
        console.log("  nextPlayerItems: " + nextPlayerItems);
        console.log("  REMprevNames: " + REMprevNames);
        console.log("  ADDnextNames: " + ADDnextNames);

        itemTypesArray = ["bg", "btn", "slider", "text", "input", "image"];
        for (var i = 0; i < itemTypesArray.length; i++) {
            nextItemType = itemTypesArray[i];
            if (whichPlayerScreen[nextItemType]) {
                items = Array.isArray(whichPlayerScreen[nextItemType]);
                if (items) {
                    for (var j = 0; j < whichPlayerScreen[nextItemType].length; j++) {
                        nextItem = whichPlayerScreen[nextItemType][j];
                        nextItemName = nextItem.name;
                        var found = $.inArray(nextItemName, REMprevNames) > -1;
                        if (found) {
                            console.log("  nextItemName: " + nextItemName);
                            REMprevItems.push(nextItem);
                        }
                    }
                } else {
                    nextItem = whichPlayerScreen[nextItemType];
                    nextItemName = nextItem.name;
                    var found = $.inArray(nextItemName, REMprevNames) > -1;
                    if (found) {
                        console.log("  nextItemName: " + nextItemName);
                        REMprevItems.push(nextItem);
                    }
                }
            }
        }

        for (var i = 0; i < itemTypesArray.length; i++) {
            nextItemType = itemTypesArray[i];
            if (whichPlayerScreen[nextItemType]) {
                items = Array.isArray(whichPlayerScreen[nextItemType]);
                if (items) {
                    for (var j = 0; j < whichPlayerScreen[nextItemType].length; j++) {
                        nextItem = whichPlayerScreen[nextItemType][j];
                        nextItemName = nextItem.name;
                        var found = $.inArray(nextItemName, ADDnextNames) > -1;
                        if (found) {
                            console.log("  nextItemName: " + nextItemName);
                            ADDnextItems.push(nextItem);
                        }
                    }
                } else {
                    nextItem = whichPlayerScreen[nextItemType];
                    nextItemName = nextItem.name;
                    var found = $.inArray(nextItemName, ADDnextNames) > -1;
                    if (found) {
                        console.log("  nextItemName: " + nextItemName);
                        ADDnextItems.push(nextItem);
                    }
                }
            }
        }
        console.log("  REMprevItems: " + REMprevItems);
        console.log("  ADDnextItems: " + ADDnextItems);

        this.addRemoveScreenItems(REMprevItems, ADDnextItems, playerIndex);
    }

    // ======= ======= ======= nextSubscreen ======= ======= =======
    Display.prototype.nextSubscreen = function(playerIndex) {
        console.log("nextSubscreen");
        console.log("  playerIndex: " + playerIndex);

        // == player screen items include player index as suffix (e.g. "_1")
        // == makePlayerItems adds current player suffix to generic item names
        currentPlayerScreen = game.subcreenObjectsArray[playerIndex - 1];
        console.log("  currentPlayerScreen.name: " + currentPlayerScreen.name);

        // == check for special case of dealer
        if (playerIndex == 4) {
            playerIndex = "D";
        }
        subscreenItems = this.playerStateItems["inactive"];
        // subscreenPlayerItems = subscreenItems.map(makePlayerItems);
        // console.log("  subscreenPlayerItems: " + subscreenPlayerItems);
        // function makePlayerItems(itemName) {
        //     var nextItemName = itemName + "_" + playerIndex;
        //     return nextItemName;
        // }

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
                        var found = $.inArray(nextItemName, subscreenItems) > -1;
                        if (found) {
                            tempItemsNext.push(nextItem);
                            tempNamesNext.push(nextItemName);
                        }
                    }
                } else {
                    nextItem = currentPlayerScreen[nextItemType];
                    nextItemName = nextItem.name;
                    var found = $.inArray(nextItemName, subscreenItems) > -1;
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

    // ======= ======= ======= nextGameScreen ======= ======= =======
    Display.prototype.nextGameScreen = function() {
        console.log("");
        console.log("nextGameScreen");

        // identify where we are in the game (prev screen/next screen/selected screen)
        // use current screen name to identify current screen index
        // increment screen index to get next screen object

        var prevScreen, nextScreen;

        // == game start initialize first screen ("splash")
        if (game.currentScreen == null) {
            game.currentScreen = splash;
            prevScreen = { name: "start"};
            nextScreenIndex = 0;

        // == get prev and next screen objects
        } else {
            prevScreen = game.currentScreen;
            prevScreenName = prevScreen.name;
            for (var i = 0; i < game.screenObjectsArray.length; i++) {
                nextName = game.screenObjectsArray[i].name;
                if (nextName == prevScreenName) {
                    nextScreenIndex = i + 1;
                    break
                }
            }
        }
        nextScreen = game.screenObjectsArray[nextScreenIndex];
        game.currentScreen = nextScreen;
        console.log("== " + prevScreen.name + " ==");
        console.log("== " + nextScreen.name + " ==");


        // == identify items to remove, add or keep
        var changeItemsArray = this.sortPrevNextItems(prevScreen, nextScreen);
        var removeItemsArray = changeItemsArray[0];     // delete these items
        var addItemsArray = changeItemsArray[1];        // add these items

        // == send screen data to screen building functions
        this.addRemoveScreenItems(removeItemsArray, addItemsArray);
    }

    // ======= ======= ======= sortPrevNextItems ======= ======= =======
    Display.prototype.sortPrevNextItems = function(prevScreen, nextScreen) {
        console.log("sortPrevNextItems");

        // transitioning from screen to screen requires distinguishing item changes
        // some items should be removed, others added, others left as-is
        // add and remove lists are built based on item names
        // add/remove name lists are used to create add/remove object lists

        var REMprevItems = [];
        var ADDnextItems = [];
        var tempNamesPrev = [];
        var tempNamesNext = [];
        var tempItemsPrev = [];
        var tempItemsNext = [];

        // create lists of screen item NAMES for prev and next screen items
        itemTypesArray = ["bg", "btn", "slider", "text", "input", "image"];
        for (var i = 0; i < itemTypesArray.length; i++) {
            nextItemType = itemTypesArray[i];
            if (prevScreen) {
                if (prevScreen[nextItemType]) {
                    items = Array.isArray(prevScreen[nextItemType]);
                    if (items) {
                        for (var j = 0; j < prevScreen[nextItemType].length; j++) {
                            nextItem = prevScreen[nextItemType][j];
                            nextItemName = nextItem.name;
                            tempItemsPrev.push(nextItem);
                            tempNamesPrev.push(nextItemName);
                        }
                    } else {
                        nextItem = prevScreen[nextItemType];
                        nextItemName = nextItem.name;
                        tempItemsPrev.push(nextItem);
                        tempNamesPrev.push(nextItemName);
                    }
                }
            }
            if (nextScreen[nextItemType]) {
                items = Array.isArray(nextScreen[nextItemType]);
                if (items) {
                    for (var j = 0; j < nextScreen[nextItemType].length; j++) {
                        nextItem = nextScreen[nextItemType][j];
                        nextItemName = nextItem.name;
                        tempItemsNext.push(nextItem);
                        tempNamesNext.push(nextItemName);
                    }
                } else {
                    nextItem = nextScreen[nextItemType];
                    nextItemName = nextItem.name;
                    tempItemsNext.push(nextItem);
                    tempNamesNext.push(nextItemName);
                }
            }
        }

        // == identify items to add or remove (by comparison of NAME strings)
        REMprevNames = $(tempNamesPrev).not(tempNamesNext).get();
        ADDnextNames = $(tempNamesNext).not(tempNamesPrev).get();
        // console.log("  tempNamesPrev: " + tempNamesPrev);
        // console.log("  tempNamesNext: " + tempNamesNext);
        // console.log("  REMprevNames: " + REMprevNames);
        // console.log("  ADDnextNames: " + ADDnextNames);

        // == get screen item OBJECTS from lists of screen item NAMES
        if (tempItemsPrev) {
            for (var i = 0; i < tempItemsPrev.length; i++) {
                nextItem = tempItemsPrev[i];
                nextItemName = nextItem.name;
                var found = $.inArray(nextItemName, REMprevNames)
                if (found > -1) {
                    REMprevItems.push(nextItem);
                }
            }
        }
        for (var i = 0; i < tempItemsNext.length; i++) {
            nextItem = tempItemsNext[i];
            nextItemName = nextItem.name;
            var found = $.inArray(nextItemName, ADDnextNames)
            if (found > -1) {
                ADDnextItems.push(nextItem);
            }
        }
        return [REMprevItems, ADDnextItems];
    }

    // ======= ======= ======= addRemoveScreenItems ======= ======= =======
    Display.prototype.addRemoveScreenItems = function(removeItemsArray, addItemsArray, playerIndex) {
        console.log("addRemoveScreenItems");
        // console.log("  removeItemsArray: " + removeItemsArray);

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
                newSliderElement = display.makeSlider(nextItem, playerIndex);
                $(indexCell).append(newSliderElement);
                $(newSliderElement).attr("id", nextItem.name + "_slider");
            }

            // == activate interacive elements (buttons/sliders)
            if ((nextType == "btn") || (nextType == "slider")) {
                display.activateNextItem(nextItem, indexCell);
            }
        }
    }

    // ======= ======= ======= modifyGridRegion ======= ======= =======
    Display.prototype.modifyGridRegion = function(whichItem, playerIndex, offsetR, offsetC) {
        console.log("modifyGridRegion: " + whichItem.name);
        console.log("  playerIndex: " + playerIndex);

        if (playerIndex) {
            playerIndex = "_" + playerIndex;
        }
        if (!offsetR) { offsetR = 0 };
        if (!offsetC) { offsetC = 0 };
        var tableRows = $("tr");
        var regionType = whichItem.merge;
        // console.log("  whichItem.merge: " + whichItem.merge);

        // == remove cells from merge area (check row/colspans in each row)
        for (var row = 0; row < whichItem.iH; row++) {
            nextRow = whichItem.iR + offsetR + row;
            nextCol = whichItem.iC + offsetC;
            nextRowObject = tableRows[nextRow];
            colspans = this.checkColumnSpans(nextRowObject, nextRow, nextCol);
            rowspans = this.checkRowSpans(nextRow, nextCol);
            temp_iC = nextCol - colspans - rowspans;
            console.log("  colspans: " + colspans);
            console.log("  rowspans: " + rowspans);
            console.log("  temp_iC: " + temp_iC);

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
                    } else {
                        nextCell = $(nextRowObject).children()[totalColOffset];
                        console.log("  $(nextCell).attr('id'): " + $(nextCell).attr('id'));
                        $(nextCell).remove();
                    }
                }

                // == set row/colspans on index cell to fill space
                $(indexCell).attr("colSpan", whichItem.iW);
                $(indexCell).attr("rowSpan", whichItem.iH);
                $(indexCell).addClass(whichItem.class);
                if (whichItem.type != "input") {
                    $(indexCell).attr("id", whichItem.name + playerIndex);
                }

                // == modify item class via item class parameters
            } else {
                for (var col = 0; col < whichItem.iW; col++) {
                    nextCell = $(nextRowObject).children()[temp_iC + col];
                    $(nextCell).removeClass();
                    $(nextCell).addClass(whichItem.class);
                    if ((row == 0) && (col == 0)) {
                        indexCell = $(nextRowObject).children()[temp_iC];
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

        if (!offsetR) { offsetR = 0 };
        if (!offsetC) { offsetC = 0 };
        var tableRows = $("tr");
        var regionType = whichItem.merge;

        // == remove cells from merge area (check row/colspans in each row)
        for (var row = 0; row < whichItem.iH; row++) {
            nextRow = whichItem.iR + offsetR + row;
            nextCol = whichItem.iC + offsetC;
            nextRowObject = tableRows[nextRow];
            colspans = this.checkColumnSpans(nextRowObject, nextRow, nextCol);
            rowspans = this.checkRowSpans(nextRow, nextCol);
            temp_iC = nextCol - colspans - rowspans;
            // console.log("  temp_iC: " + temp_iC);

            if (regionType == "merge") {
                for (var col = 0; col < (whichItem.iW); col++) {
                    if ((row == 0) && (col == 0)) {
                        indexCell = $(nextRowObject).children()[temp_iC];
                        $(indexCell).remove();
                        // console.log("  $(indexCell).attr('id'): " + $(indexCell).attr('id'));
                    }
                    indexRowCell = $(nextRowObject).children()[temp_iC - 1];
                    for (var col = 0; col < whichItem.iW; col++) {
                        var newCell = document.createElement("td");
                        $(indexRowCell).after(newCell);
                        $(newCell).addClass("cell");
                        $(newCell).attr("id", (nextRow) + "-" + (nextCol + col));
                    }
                    if (row > 0) {
                        display.toggleRowspans(whichItem, offsetR, offsetC, "off")
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
        }
    }

    // ======= ======= ======= deActivateNextItem ======= ======= =======
    Display.prototype.deActivateNextItem = function(whichItem, indexCell) {
        console.log("deActivateNextItem: " + whichItem.name);
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
        for (var col = 0; col < $(whichRowObject).children().length; col++) {
            nextColumnObject = $(whichRowObject).children()[col];
            nextColspan = $(nextColumnObject).attr('colSpan');
            nextColId = $(nextColumnObject).attr('id');
            if ((nextColspan > 1) && (col < (whichCol - colspans))) {
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



    // ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= =======




    // ======= ======= ======= dealCards ======= ======= =======
    Game.prototype.dealCards = function(indexCell, whichAction) {
        console.log("");
        console.log("dealCards");

        var winnersArray = [];
        var dealer = this.playerObjectsArray[3];
        var dealerScreen = this.subcreenObjectsArray[3];
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
        console.log('  this.playerNamesArray.length: ' + this.playerNamesArray.length);
        console.log('  this.playerNamesArray[3]: ' + this.playerNamesArray[3]);
        for (var i = 0; i < (this.playerNamesArray.length); i++) {
            nextPlayer = this.playerObjectsArray[i];
            nextPlayerScreen = this.subcreenObjectsArray[i];
            console.log('');
            console.log('  ******* nextPlayer.name: ' + nextPlayer.name);

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

            // this.updatePlayerScoreText(nextPlayer);

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
        // this.updatePlayerScoreText(dealer);
        this.flipCards();
    }

    // ======= ======= ======= displayNextCard ======= ======= =======
    Game.prototype.displayNextCard = function(whichPlayer, whichSubscreen) {
        console.log("displayNextCard");

        var whichMerge, cardDivString;
        var playerIndex = whichPlayer.id;
        var subscreenTextObjects = whichSubscreen.text;
        for (var i = 0; i < subscreenTextObjects.length; i++) {
            nextTextObject = subscreenTextObjects[i];
            nextTextObjectName = subscreenTextObjects[i].name;
            nextTextObjectClass = subscreenTextObjects[i].class;
            if (nextTextObjectName == "pCards") {
                whichCardObject = nextTextObject;
                whichClass = nextTextObjectClass;
                break;
            }
        }
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
        // cardDivString += "<div class='back " + whichClass + "'><p class='cardText'>" + cardValue + "</p></div></div></div>";
        cardDivString += "<div class='back " + whichClass + "'>" + imageString + "<p class='cardText'>" + whichValue + "</p></div></div></div>";

        $(indexCell).append(cardDivString);

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

    // ======= ======= ======= startGame ======= ======= =======
    Game.prototype.startGame = function() {
        console.log("startGame");

        display.nextSubscreen(4);   // create dealer screen elements
        display.nextGameScreen();
        for (var i = 0; i < this.playerNamesArray.length; i++) {
            nextPlayer = this.playerObjectsArray[i];
            nextPlayerScreen = this.subcreenObjectsArray[i];
            nextPlayerId = nextPlayer.id;
            display.updateSubscreen(nextPlayerId, "placeBets");
        }
        this.currentPlayer = game.playerObjectsArray[0];
        game.dealCards();

    }

    // ======= ======= ======= saveNewPlayer ======= ======= =======
    Game.prototype.saveNewPlayer = function() {
        console.log("saveNewPlayer");

        var playerName, playerCount, playerState, newPlayer;

        playerName = $('#playerNameInput').val();
        if (playerName) {
            playerCount = this.playerNamesArray.length;
            if (playerCount < 3) {
                console.log("  playerCount: " + playerCount);
                newPlayer = this.playerObjectsArray[playerCount];
                this.playerNamesArray.push(newPlayer.name);
                playerCount = this.playerNamesArray.length;
                display.nextSubscreen(playerCount);
                // this.updatePlayerNames(newPlayer, playerCount);
                $("#tooltips").text("Enter another name or press 'start'");
            }
            if (playerCount == 1) {
                display.nextGameScreen();
            }
            if (playerCount == 3) {
                $("#tooltips").text("Max of 3 players.  Start game!");
                game.startGame();
                // this.updatePlayerNames(this.dealer, 4);
            }
            $("#playerNameInput").val("");
        } else {
            $("#tooltips").text("Enter name or press 'start'");
        }
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
        // console.log("  nextPlayer.name: " + nextPlayer.name);

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
                    nextPlayer = self.playerObjectsArray[playerIndex];
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
    // display.getNextsubscreen();

}

    // game.gameScreens[currentScreen]
    // display.makeScreenRegions
    // display.activateButtons
    // display.activateSliders
