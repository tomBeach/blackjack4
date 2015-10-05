$(document).ready(function(){
    console.log('jQuery loaded');
    console.log('document ready');

    var bootstrap3_enabled = (typeof $().emulateTransitionEnd == 'function');
    console.log("bootstrap3_enabled: " + bootstrap3_enabled);

    initGame();

});


function initGame() {
    console.log('initGame');

    // ======= ======= ======= playerParams ======= ======= =======
    Player.prototype.playerParams = function(whichPlayerIndex, whichParams) {
        // console.log("playerParams");
        // console.log("  whichPlayerIndex: " + whichPlayerIndex);
        // console.log("  whichParams: " + whichParams);

        // == classes: pBorder-1, pBorder-2, dBorder, pBorder-3, button, card

        // ======= player1 =======
        var playerParams1 = {
            bgParams: {
                borderH: { player: 1, name: "borderH_1", type: "bg", iR: 2, iC: 1, iW: 6, iH: 1, merge: null, class: "pBorder-1" },
                borderV: { player: 1, name: "borderV_1", type: "bg", iR: 2, iC: 6, iW: 1, iH: 3, merge: null, class: "pBorder-1" }
            },
            btnParams: {
                hitMeBtn: { name: "hitMeBtn", callback: "", type: "btn", iR: 2, iC: 7, iW: 1, iH: 1, mmerge: null, class: "button", image: "hitMe.png", value: null },
                holdMeBtn: { name: "holdMeBtn", callback: "", type: "btn", iR: 2, iC: 8, iW: 1, iH: 1, mmerge: null, class: "button", image: "holdMe.png", value: null },
                betOnesBtn: { name: "betOnesBtn", callback: "", type: "btn", iR:2, iC: 7, iW: 1, iH: 1, mmerge: null, class: "button", value: "$1", tooltip: null },
                betFivesBtn: { name: "betFivesBtn", callback: "", type: "btn", iR: 2, iC: 8, iW: 1, iH: 1, mmerge: null, class: "button", value: "$5", tooltip: null },
                betTensBtn: { name: "betTensBtn", callback: "", type: "btn", iR: 2, iC: 9, iW: 1, iH: 1, mmerge: null, class: "button", value: "$10", tooltip: null },
            },
            textParams: {
                pName: { player: 1, name: "pName_1", type: "text", iR: 2, iC: 3, iW: 3, iH: 1, merge: "merge", class: "pBorder-1", value: null },
                pScore: { player: 1, name: "pScore_1", type: "text", iR: 2, iC: 6, iW: 1, iH: 1, mmerge: null, class: "pBorder-1", value: 0 },
                pBank: { player: 1, name: "pBank_1", type: "text", iR: 1, iC: 6, iW: 1, iH: 1, mmerge: null, class: "pBorder-1", value: 100 },
                pCards: { player: 1, name: "pCards_1", type: "text", iR: 3, iC: 6, iW: 1, iH: 1, mmerge: null, class: "card", value: null }
            },
            inputParams: {},
            imageParams: {}
        };

        // ======= player2 =======
        var playerParams2 = {
            bgParams: {
                borderH: { player: 2, name: "borderH_2", type: "bg", iR: 5, iC: 2, iW: 6, iH: 1, merge: null, class: "pBorder-2" },
                borderV: { player: 2, name: "borderV_2", type: "bg", iR: 5, iC: 7, iW: 1, iH: 3, merge: null, class: "pBorder-2" }
            },
            btnParams: {
                hitMeBtn: { name: "hitMeBtn", callback: "", type: "btn", iR: 5, iC: 8, iW: 1, iH: 1, merge: null, class: "button", image: "hitMe.png", value: null },
                holdMeBtn: { name: "holdMeBtn", callback: "", type: "btn", iR: 5, iC: 9, iW: 1, iH: 1, merge: null, class: "button", image: "holdMe.png", value: null },
                betOnesBtn: { name: "betOnesBtn", callback: "", type: "btn", iR:5, iC: 8, iW: 1, iH: 1, merge: null, class: "button", value: "$1", tooltip: null },
                betFivesBtn: { name: "betFivesBtn", callback: "", type: "btn", iR: 5, iC: 9, iW: 1, iH: 1, merge: null, class: "button", value: "$5", tooltip: null },
                betTensBtn: { name: "betTensBtn", callback: "", type: "btn", iR: 5, iC: 10, iW: 1, iH: 1, merge: null, class: "button", value: "$10", tooltip: null },
            },
            textParams: {
                pName: { player: 2, name: "pName_2", type: "text", iR: 5, iC: 4, iW: 3, iH: 1, merge: "merge", class: "pBorder-2", value: null },
                pScore: { player: 2, name: "pScore_2", type: "text", iR: 5, iC: 7, iW: 1, iH: 1, merge: null, class: "pBorder-2", value: 0 },
                pBank: { player: 2, name: "pBank_2", type: "text", iR: 4, iC: 7, iW: 1, iH: 1, merge: null, class: "pBorder-2", value: 100 },
                pCards: { player: 2, name: "pCards_2", type: "text", iR: 6, iC: 7, iW: 1, iH: 1, merge: null, class: "card", value: null }
            },
            inputParams: {},
            imageParams: {}
        };

        // ======= player3 =======
        var playerParams3 = {
            bgParams: {
                borderH: { player: 3, name: "borderH_3", type: "bg", iR: 8, iC: 3, iW: 6, iH: 1, merge: null, class: "pBorder-3" },
                borderV: { player: 3, name: "borderV_3", type: "bg", iR: 8, iC: 8, iW: 1, iH: 3, merge: null, class: "pBorder-3" }
            },
            btnParams: {
                hitMeBtn: { name: "hitMeBtn", callback: "", type: "btn", iR: 8, iC: 9, iW: 1, iH: 1, merge: null, class: "hitMe", image: "hitMe.png", value: "hitMe" },
                holdMeBtn: { name: "holdMeBtn", callback: "", type: "btn", iR: 8, iC: 10, iW: 1, iH: 1, merge: null, class: "holdMe", image: "holdMe.png", value: "holdMe" },
                betOnesBtn: { name: "betOnesBtn", callback: "", type: "btn", iR:8, iC: 9, iW: 1, iH: 1, merge: null, class: "button", value: "$1", tooltip: "$1" },
                betFivesBtn: { name: "betFivesBtn", callback: "", type: "btn", iR: 8, iC: 10, iW: 1, iH: 1, merge: null, class: "button", value: "$5", tooltip: "$5" },
                betTensBtn: { name: "betTensBtn", callback: "", type: "btn", iR: 8, iC: 11, iW: 1, iH: 1, merge: null, class: "button", value: "$10", tooltip: "$10" },

            },
            textParams: {
                pName: { player: 3, name: "pName_3", type: "text", iR: 8, iC: 5, iW: 3, iH: 1, merge: true, class: "pBorder-3", value: null },
                pScore: { player: 3, name: "pScore_3", type: "text", iR: 8, iC: 8, iW: 1, iH: 1, merge: null, class: "pBorder-3", value: 0 },
                pBank: { player: 3, name: "pBank_3", type: "text", iR: 7, iC: 8, iW: 1, iH: 1, merge: null, class: "pBorder-3", value: 100 },
                pCards: { player: 3, name: "pCards_3", type: "text", iR: 9, iC: 8, iW: 1, iH: 1, merge: null, class: "card", value: null }
            },
            inputParams: {},
            imageParams: {}
        };

        // ======= dealer =======
        var dealerParams = {
            bgParams: {
                borderH: { player: "D", name: "borderH_D", type: "bg", iR: 3, iC: 11, iW: 6, iH: 1, merge: null, class: "dBorder" },
                borderV: { player: "D", name: "borderV_D", type: "bg", iR: 1, iC: 11, iW: 1, iH: 3, merge: null, class: "dBorder" }
            },
            btnParams: {},
            textParams: {
                dName: { player: "D", name: "dName", type: "text", iR: 8, iC: 5, iW: 3, iH: 1, merge: true, class: "dBorder", value: null },
                dScore: { player: "D", name: "dScore", type: "text", iR: 8, iC: 8, iW: 1, iH: 1, merge: null, class: "dBorder", value: null },
                dCards: { player: "D", name: "dCards", type: "text", iR: 9, iC: 8, iW: 1, iH: 1, merge: null, class: "card", value: null }
            },
            inputParams: {},
            imageParams: {}
        };

        var paramsArray = [playerParams1, playerParams2, playerParams3, dealerParams];

        switch(whichParams) {
            case "bg":
                return paramsArray[whichPlayerIndex].bgParams;
                break;
            case "btn":
                return paramsArray[whichPlayerIndex].btnParams;
                break;
            case "text":
                return paramsArray[whichPlayerIndex].textParams;
                break;
            case "input":
                return paramsArray[whichPlayerIndex].inputParams;
                break;
            case "image":
                return paramsArray[whichPlayerIndex].imageParams;
                break;
        }
    }

    // ======= ======= ======= gameParams ======= ======= =======
    Game.prototype.gameParams = function(whichParams) {
        // console.log("gameParams");
        // console.log("  whichParams: " + whichParams);

        var itemParams = {
            bg: {
                table: { name: "table", type: "bg", iR: 5, iC: 12, iW: 3, iH: 3, merge: true, class: null },
                logo: { name: "logo", type: "bg", iR: 2, iC: 1, iW: 6, iH: 1, merge: false, class: null }
            },
            btn: {
                orbBtn: { name: "orbBtn", callback: "updateGameState", type: "btn", iR: 6, iC: 13, iW: 1, iH: 1, merge: null, class: "orbBtn", value: "", tooltip: "start playing!" },
                enterBtn: { name: "enterBtn", callback: "saveNewPlayer", type: "btn", iR: 5, iC: 12, iW: 3, iH: 1, merge: "merge", class: "enterBtn", value: "enter", tooltip:  "click to save player" },
                startBtn: { name: "startBtn", callback: "startGame", type: "btn", iR: 7, iC: 12, iW: 3, iH: 1, merge: "merge", class: "startBtn", value: "start", tooltip: "start game" },
                dealBtn: { name: "dealBtn", callback: "updateGameState", type: "btn", iR: 6, iC: 13, iW: 1, iH: 1, merge: "merge", class: "dealBtn", value: "deal", tooltip: null },
                retOnesBtn: { name: "retOnesBtn", callback: "", type: "btn", iR: 5, iC: 12, iW: 1, iH: 1, merge: null, class: "ones", value: "ones", tooltip: null },
                retFivesBtn: { name: "retFivesBtn", callback: "", type: "btn", iR: 5, iC: 13, iW: 1, iH: 1, merge: null, class: "fives", value: "fives", tooltip: null },
                retTensBtn: { name: "retTensBtn", callback: "", type: "btn", iR: 5, iC: 14, iW: 1, iH: 1, merge: null, class: "tens", value: "tens", tooltip: null },
                newGameBtn: { name: "newGameBtn", callback: "updateGameState", type: "btn", iR: 11, iC: 13, iW: 1, iH: 1, merge: "merge", class: "newGameBtn", value: "new game", tooltip: null }
            },
            text: {
                pName_1: { name: "pName_1", type: "text", iR: 8, iC: 12, iW: 3, iH: 1, merge: "merge", class: null, value: null },
                pName_2: { name: "pName_2", type: "text", iR: 9, iC: 12, iW: 3, iH: 1, merge: "merge", class: null, value: null },
                pName_3: { name: "pName_3", type: "text", iR: 10, iC: 12, iW: 3, iH: 1, merge: "merge", class: null, value: null },
                pBank_1: { name: "pBank_1", type: "text", iR: 8, iC: 15, iW: 3, iH: 2, merge: null, class: null, value: 20 },
                pBank_2: { name: "pBank_2", type: "text", iR: 9, iC: 15, iW: 3, iH: 2, merge: null, class: null, value: 40 },
                pBank_3: { name: "pBank_3", type: "text", iR: 10, iC: 15, iW: 3, iH: 2, merge: null, class: null, value: 60 },
                totalBet: { name: "totalBet", type: "text", iR: 5, iC: 15, iW: 1, iH: 1, merge: null, class: null, value: 0 },
                tooltips: { name: "tooltips", type: "text", iR: 9, iC: 12, iW: 3, iH: 1, merge: "merge", class: "tooltips", value: null }
            },
            input: {
                playerName: { name: "playerName", type: "input", iR: 4, iC: 12, iW: 3, iH: 1, merge: "merge", class: "inputText", value: "playerName" }
            },
            images: {}
        }

        // ======= data connection =======
        switch(whichParams) {
            case "bg":
                return itemParams.bd;
                break;
            case "btn":
                return itemParams.btn;
                break;
            case "text":
                return itemParams.text;
                break;
            case "input":
                return itemParams.input;
                break;
            case "image":
                return itemParams.image;
                break;
        }
    }

    // ======= ======= ======= Sequencer params ======= ======= =======
    Sequencer.prototype.sequencerParams = function(whichState) {
        // console.log("seqencerParams");
        // console.log("  whichState: " + whichState);
        // console.log("  game.currentPlayer: " + game.currentPlayer);
        // bg, text, input, button, image

        var player = game.playerObjectsArray[0];
        var playerIndex = 0;

        // ======= states =======
        var splash = {
            name: "splash",
            bg: null,
            btn: [game.btnParams.orbBtn],
            text: [game.textParams.tooltips],
            input: null,
            image: null
        }
        var login = {
            name: "login",
            bg: null,
            btn: [game.btnParams.enterBtn],
            text: [game.textParams.tooltips],
            input: [game.inputParams.playerName],
            image: null
        }
        var saveStart = {
            name: "saveStart",
            bg: null,
            btn: [game.btnParams.enterBtn, game.btnParams.startBtn],
            text: [game.textParams.tooltips],
            input: [game.inputParams.playerName],
            image: null
        }
        var deal = {
            name: "deal",
            bg: null,
            btn: [game.gameParams("btn").dealBtn],
            text: [game.gameParams("text").tooltips],
            input: null,
            image: null
        }
        playGame = {
            name: "playGame",
            bg: null,
            btn: null,
            text: [game.gameParams("text").tooltips],
            input: null,
            image: null
        }
        bet = {
            name: "bet",
            bg: null,
            btn: [game.gameParams("btn").retOnesBtn, game.gameParams("btn").retFivesBtn, game.gameParams("btn").retTensBtn, game.gameParams("btn").newGameBtn, player.btnParams.betOnesBtn, player.btnParams.betFivesBtn, player.btnParams.betTensBtn],
            text: [game.gameParams("text").tooltips],
            input: null,
            image: null
        }
        hitMe = {
            name: "hitMe",
            bg: null,
            btn: [player.btnParams.hitMeBtn, player.btnParams.holdMeBtn],
            text: [game.gameParams("text").tooltips],
            input: null,
            image: null
        }
        holdMe = {
            name: "holdMe",
            bg: null,
            btn: [player.btnParams.hitMeBtn, player.btnParams.holdMeBtn],
            text: [game.gameParams("text").tooltips],
            input: null,
            image: null
        }
        turnOver = {
            name: "turnOver",
            bg: null,
            btn: null,
            text: [game.gameParams("text").tooltips],
            input: null,
            image: null
        }
        hitDealer = {
            name: "hitDealer",
            bg: null,
            btn: null,
            text: [game.gameParams("text").tooltips],
            input: null,
            image: null
        }
        gameOver = {
            name: "gameOver",
            bg: null,
            btn: null,
            text: [game.gameParams("text").tooltips],
            input: null,
            image: null
        }
        doTheMath = {
            name: "doTheMath",
            bg: null,
            btn: [game.gameParams("btn").newGameBtn],
            text: [game.gameParams("text").tooltips],
            input: null,
            image: null
        }

        // ======= data connection =======
        switch(whichState) {
            case "splash":
                return splash;
                break;
            case "login":
                return login;
                break;
            case "saveStart":
                return saveStart;
                break;
            case "deal":
                return deal;
                break;
            case "playGame":
                return playGame;
                break;
            case "bet":
                return bet;
                break;
            case "hitMe":
                return hitMe;
                break;
            case "holdMe":
                return holdMe;
                break;
            case "turnOver":
                return turnOver;
                break;
            case "hitDealer":
                return hitDealer;
                break;
            case "gameOver":
                return gameOver;
                break;
            case "doTheMath":
                return doTheMath;
                break;
        }
    };


    // ======= ======= ======= Player ======= ======= =======

    function Player(name, id) {
        console.log('Player');
        this.id = id;
        this.name = name;
        this.hand = null;
        this.score = 0;
        this.onesBank = 20;
        this.fivesBank = 30;
        this.tensBank = 50;
        this.totalBank = this.onesBank + this.fivesBank + this.tensBank;
        this.bgParams = this.playerParams(id, "bg");
        this.btnParams = this.playerParams(id, "btn");
        this.textParams = this.playerParams(id, "text");
        this.inputParams = this.playerParams(id, "input");
        this.imageParams = this.playerParams(id, "image");
    }

    // ======= ======= ======= Game Object ======= ======= =======

    function Game(whichGame) {
        console.log('Game');
        this.name = whichGame;
        this.dealer = null;
        this.currentPlayer = null;
        this.playerNamesArray = [];
        this.playerObjectsArray = null;
        this.tableCellsArray = null;
        this.bgParams = this.gameParams("bg");
        this.btnParams = this.gameParams("btn");
        this.textParams = this.gameParams("text");
        this.inputParams = this.gameParams("input");
        this.imageParams = this.gameParams("image");
        this.prevBgs = [];
        this.prevBtns = [];
        this.prevTexts = [];
        this.prevInputs = [];
        this.prevImages = [];
        this.display = null;
        this.message = null;
    }


    // ======= ======= ======= Display ======= ======= =======

    function Display(whichDisplay) {
        console.log('Display');
        this.name = whichDisplay;
        this.tableCellsArray = null;
    }

    // ======= ======= ======= Sequencer ======= ======= =======

    function Sequencer() {
        console.log('Display');
        this.name = "Sequencer";
        this.currentGameState = "doTheMath";
        // this.gameStatesArray = ["splash", "login", "saveStart", "deal"];
        this.gameStatesArray = ["splash", "login", "saveStart", "deal", "playGame", "bet", "hitMe", "holdMe", "turnOver", "hitDealer", "gameOver", "doTheMath"];
        this.splash = this.sequencerParams("splash");
        this.login = this.sequencerParams("login");
        this.saveStart = this.sequencerParams("saveStart");
    }

    // ======= ======= ======= modifyGridRegion ======= ======= =======
    Display.prototype.modifyGridRegion = function(whichItem, prevNext) {
        console.log("modifyGridRegion");
        console.log("  prevNext: " + prevNext);

        var whichMerge;
        if (prevNext == "prev") {
            if (whichItem.merge == "merge") {
                whichMerge = "unmerge";
            } else {
                whichMerge = "restore";
            }
        } else {
            if (whichItem.merge == "merge") {
                whichMerge = "merge";
            } else {
                whichMerge = null;
            }
        }

        var whichType = whichItem.type;
        var whichValue = whichItem.value;
        var whichName = whichItem.name;

        if (whichMerge == "merge") {
            indexCell = this.mergeRegion(whichItem);
        } else if (whichMerge == "unmerge") {
            indexCell = this.unMergeRegion(whichItem);
        } else if (whichMerge == "restore") {
            indexCell = this.deselectTableCells(whichItem);
        } else {
            indexCell = this.selectTableCells(whichItem);
        }

        // ======= data connection =======
        switch(whichType) {
            case "bg":
                break;
            case "btn":
                $(indexCell).text(whichValue);
                sequencer.activateButton(indexCell, whichItem.callback)
                break;
            case "text":
                $(indexCell).text(whichValue);
                break;
            case "input":
                newTextInput = "<input id='" + whichItem.name + "Input' class='" + whichItem.class + "' type='text' value='Tom'>"
                $(indexCell).append(newTextInput);
                $(newTextInput).attr("id", whichItem.name);
            case "image":
                break;
        }
    }

    // ======= ======= ======= processItemArrays ======= ======= =======
    Sequencer.prototype.processItemArrays = function(nextItemsParamsObject, prevItemsParamsObject, itemType) {
        console.log("processItemArrays");

        var REMprevItems = [];
        var ADDnextItems = [];
        var tempNamesOld = [];
        var tempNamesNew = [];
        nextNewArray = nextItemsParamsObject;
        nextOldArray = prevItemsParamsObject;

        // == get items names for array processing
        for (var i = 0; i < nextOldArray.length; i++) {
            nextItemArray = nextOldArray[i];
            if (nextItemArray) {
                for (var j = 0; j < nextItemArray.length; j++) {
                    nextItem = nextItemArray[j];
                    nextItemName = nextItem.name;
                    tempNamesOld.push(nextItemName);
                }
            }
        }
        for (var i = 0; i < nextNewArray.length; i++) {
            nextItemArray = nextNewArray[i];
            if (nextItemArray) {
                for (var j = 0; j < nextItemArray.length; j++) {
                    nextItem = nextItemArray[j];
                    nextItemName = nextItem.name;
                    tempNamesNew.push(nextItemName);
                }
            }
        }
        console.log("  tempNamesOld: " + tempNamesOld);
        console.log("  tempNamesNew: " + tempNamesNew);

        // == find array differences
        ADDnextNames = $(tempNamesNew).not(tempNamesOld).get();
        REMprevNames = $(tempNamesOld).not(tempNamesNew).get();

        for (var i = 0; i < nextOldArray.length; i++) {
            nextItemArray = nextOldArray[i];
            if (nextItemArray) {
                for (var j = 0; j < nextItemArray.length; j++) {
                    nextItem = nextItemArray[j];
                    nextItemName = nextItem.name;
                    var found = $.inArray(nextItemName, REMprevNames)
                    if (found > -1) {
                        REMprevItems.push(nextItem);
                    }
                }
            }
        }
        for (var i = 0; i < nextNewArray.length; i++) {
            nextItemArray = nextNewArray[i];
            if (nextItemArray) {
                for (var j = 0; j < nextItemArray.length; j++) {
                    nextItem = nextItemArray[j];
                    nextItemName = nextItem.name;
                    var found = $.inArray(nextItemName, ADDnextNames)
                    if (found > -1) {
                        ADDnextItems.push(nextItem);
                    }
                }
            }
        }
        console.log("  REMprevNames: " + REMprevNames)
        console.log("  ADDnextNames: " + ADDnextNames)
        return [REMprevNames, ADDnextNames, REMprevItems, ADDnextItems];
    }

    // ======= ======= ======= mergeRegion ======= ======= =======
    Display.prototype.mergeRegion = function(whichItem) {
        console.log("mergeRegion");
        var indexCell = this.tableCellsArray[whichItem.iR][whichItem.iC];
        for (var j = 0; j < whichItem.iH; j++) {
            for (var i = 0; i < whichItem.iW; i++) {
                nextCell = this.tableCellsArray[whichItem.iR + j][whichItem.iC + i];
                if (!((i == 0) && (j == 0))) {
                    $(nextCell).remove();
                }
            }
        }
        $(indexCell).attr("colSpan", whichItem.iW);
        $(indexCell).attr("rowSpan", whichItem.iH);
        $(indexCell).addClass(whichItem.class);
        if (whichItem.type != "input") {
            $(indexCell).attr("id", whichItem.name);
        }
        return indexCell;
    }

    // ======= ======= ======= unMergeRegion ======= ======= =======
    Display.prototype.unMergeRegion = function(whichItem) {
        console.log("unMergeRegion");
        console.log("  whichItem.name: " + whichItem.name);
        var indexCell = this.tableCellsArray[whichItem.iR][whichItem.iC];
        $(indexCell).attr("colSpan", 1);
        $(indexCell).attr("rowSpan", 1);
        $(indexCell).text("");
        $(indexCell).removeClass(whichItem.class);
        for (var j = 0; j < whichItem.iH; j++) {
            for (var i = 0; i < whichItem.iW; i++) {
                if (!((i == 0) && (j == 0))) {
                    var newCell = document.createElement("td");
                    $(indexCell).after(newCell);
                    $(newCell).addClass("cell");
                }
            }
        }
        $(indexCell).attr("id", "");
        if ($(indexCell).children().length > 0) {
            console.log("CHILDREN!!!");
            var newCell = document.createElement("td");
            $(indexCell).after(newCell);
            $(newCell).addClass("cell");
            $(indexCell).remove();
        }
        // return newCell;
    }

    // ======= ======= ======= selectTableCells ======= ======= =======
    Display.prototype.selectTableCells = function(whichItem) {
        console.log("selectTableCells");
        var indexCell = this.tableCellsArray[whichItem.iR][whichItem.iC];
        for (var j = 0; j < whichItem.iH; j++) {
            for (var i = 0; i < whichItem.iW; i++) {
                nextCell = this.tableCellsArray[whichItem.iR + j][whichItem.iC + i];
                $(nextCell).attr("colSpan", 1);
                $(nextCell).attr("rowSpan", 1);
                $(nextCell).addClass(whichItem.class);
            }
        }
        $(indexCell).attr("id", whichItem.name);
        $(indexCell).addClass(whichItem.class);
        return indexCell;
    }

    // ======= ======= ======= deselectTableCells ======= ======= =======
    Display.prototype.deselectTableCells = function(whichItem) {
        // console.log("deselectTableCells");
        var indexCell = this.tableCellsArray[whichItem.iR][whichItem.iC];
        for (var j = 0; j < whichItem.iH; j++) {
            for (var i = 0; i < whichItem.iW; i++) {
                nextCell = this.tableCellsArray[whichItem.iR + j][whichItem.iC + i];
                $(nextCell).attr("colSpan", 1);
                $(nextCell).attr("rowSpan", 1);
            }
        }
        $(indexCell).attr("id", "");
        $(indexCell).removeClass(whichItem.class);
        $(indexCell).empty();
        return indexCell;
    }

    // ======= ======= ======= loadNextGameState ======= ======= =======
    Sequencer.prototype.loadNextGameState = function(prevNext) {
        console.log("loadNextGameState");

        var currentGameState = this.currentGameState;
        var sequencerParams = this.sequencerParams(currentGameState);
        var itemTypesArray = [sequencerParams.bg, sequencerParams.btn, sequencerParams.text, sequencerParams.input, sequencerParams.image]

        for (var j = 0; j < itemTypesArray.length; j++) {
            nextItemTypes = itemTypesArray[j];
            if (nextItemTypes != null) {
                for (var i = 0; i < nextItemTypes.length; i++) {
                    nextItem = nextItemTypes[i];
                    display.modifyGridRegion(nextItem, prevNext);
                }
            }
        }
    }

    // ======= ======= ======= updateGameState ======= ======= =======
    Sequencer.prototype.updateGameState = function() {
        console.log("");
        console.log("== updateGameState ==");

        var currentGameStateIndex = this.gameStatesArray.indexOf(this.currentGameState);

        var currentGameState = this.currentGameState;
        console.log("== " + currentGameState + " ==");
        var sequencerParams = this.sequencerParams(currentGameState);
        var prevItemTypesArray = [sequencerParams.bg, sequencerParams.btn, sequencerParams.text, sequencerParams.input, sequencerParams.image]

        if (currentGameStateIndex == this.gameStatesArray.length - 1) {
            currentGameState = this.gameStatesArray[0];
            this.currentGameState = currentGameState;
            console.log("== " + currentGameState + " ==");
            this.loadNextGameState("next");
        } else {
            currentGameState = this.gameStatesArray[currentGameStateIndex + 1];
            this.currentGameState = currentGameState;
            console.log("== " + currentGameState + " ==");
            var sequencerParams = this.sequencerParams(currentGameState);
            var nextItemTypesArray = [sequencerParams.bg, sequencerParams.btn, sequencerParams.text, sequencerParams.input, sequencerParams.image]
            var changeItemsArray = this.processItemArrays(nextItemTypesArray, prevItemTypesArray);
            var removeItemsArray = changeItemsArray[2];
            var addItemsArray = changeItemsArray[3];
            // this.loadNextGameState("prev");
            for (var j = 0; j < removeItemsArray.length; j++) {
                nextItem = removeItemsArray[j];
                display.modifyGridRegion(nextItem, "prev");
            }
            for (var j = 0; j < addItemsArray.length; j++) {
                nextItem = addItemsArray[j];
                display.modifyGridRegion(nextItem, "next");
            }
        }
    }

    // ======= ======= ======= activateButton ======= ======= =======
    Sequencer.prototype.activateButton = function(indexCell, whichAction) {
        console.log("activateButton");

        self = this;

        // ======= tooltips =======
        $(indexCell).on("mouseenter", function(event){
            // console.log("-- mouseenter");
            whichIndexCell = event.target;
            display.tooltips(whichIndexCell, "on");
        });
        $(indexCell).on("mouseout", function(){
            // console.log("-- mouseout");
            whichIndexCell = event.target;
            display.tooltips(whichIndexCell, "off");
        });

        // ======= general =======
        switch(whichAction) {
            case "updateGameState":
                $(indexCell).on("click", function(){
                    console.log("-- updateGameState");
                    self.updateGameState();
                });
                break;
            case "saveNewPlayer":
                $(indexCell).on("click", function(){
                    console.log("-- saveNewPlayer");
                    self.saveNewPlayer();
                });
                break;
            case "startGame":
                $(indexCell).on("click", function(){
                    console.log("-- startGame");
                    self.startGame();
                });
                break;
        }
    }

    // ======= ======= ======= startGame ======= ======= =======
    Sequencer.prototype.startGame = function() {
        console.log("startGame");
        game.loadDealer();
        this.updateGameState();
    }

    // ======= ======= ======= updatePlayerValues ======= ======= =======
    Game.prototype.updatePlayerValues = function(whichPlayer, playerId) {
        console.log("updatePlayerValues");
        whichPlayer.name = $('#playerNameInput').val();
        whichPlayer.textParams.pName.value = whichPlayer.name;
        var playerNameCell = "#pName_" + playerId;
        $(playerNameCell).text(whichPlayer.name);
        whichPlayer.textParams.pScore.value = 0;
    }

    // ======= ======= ======= saveNewPlayer ======= ======= =======
    Sequencer.prototype.saveNewPlayer = function() {
        console.log("saveNewPlayer");

        var playerCount = game.playerNamesArray.length;
        console.log("  ###playerCount1: " + playerCount);
        if (playerCount < 3) {
            newPlayer = game.playerObjectsArray[playerCount]
            game.playerNamesArray.push(newPlayer.name)
            var playerCount = game.playerNamesArray.length;
            console.log("  ###playerCount2: " + playerCount);
            game.loadNewPlayer(newPlayer);
            game.updatePlayerValues(newPlayer, playerCount);
        }
        if (playerCount == 1) {
            this.updateGameState();
        }
        if (playerCount == 3) {
            $("#tooltips").text("Max of 3 players.  Start game!");
            this.updateGameState();
            game.loadDealer();
            this.updateGameState();
        }

    }

    // ======= ======= ======= loadNewPlayer ======= ======= =======
    Game.prototype.loadNewPlayer = function() {
        console.log("loadNewPlayer");

        var playerCount = game.playerNamesArray.length;
        var currentPlayer = game.playerObjectsArray[playerCount - 1];
        var playerParamsArray = [currentPlayer.bgParams.borderH, currentPlayer.bgParams.borderV, currentPlayer.btnParams.betOnesBtn, currentPlayer.btnParams.betFivesBtn, currentPlayer.btnParams.betTensBtn, currentPlayer.textParams.pName, currentPlayer.textParams.pScore, currentPlayer.textParams.pBank];
        for (var j = 0; j < playerParamsArray.length; j++) {
            nextItem = playerParamsArray[j];
            if (nextItem != null) {
                display.modifyGridRegion(nextItem, "next");
            }
        }

        currentPlayer.btnParams.betOnesBtn.value = "$20";
        currentPlayer.btnParams.betFivesBtn.value = "$30";
        currentPlayer.btnParams.betTensBtn.value = "$50";
        currentPlayer.textParams.pName.value = this.name;
        currentPlayer.textParams.pScore.value = 0;
        currentPlayer.textParams.pBank.value = currentPlayer.totalBank;
    }

    // ======= ======= ======= loadDealer ======= ======= =======
    Game.prototype.loadDealer = function() {
        console.log("loadDealer");

        var playerParamsArray = [dealer.bgParams.borderH, dealer.bgParams.borderV, dealer.textParams.pName, dealer.textParams.pScore];
        for (var j = 0; j < playerParamsArray.length; j++) {
            nextItem = playerParamsArray[j];
            if (nextItem) {
                display.modifyGridRegion(nextItem, "next");
            }
        }
        dealer.textParams.dName.value = this.name;
        dealer.textParams.dScore.value = 0;
    }

    // ======= ======= ======= tooltips ======= ======= =======
    Display.prototype.tooltips = function(whichItem, onOff) {
        // console.log("tooltips");
        var nextTooltip = whichItem.id
        var tooltipIndexCell = this.tableCellsArray[9][12];
        if (onOff == "on") {
            $(tooltipIndexCell).text(nextTooltip);
        } else {
            $(tooltipIndexCell).text("");
        }
    }


    // ======= ======= ======= initGridElements ======= ======= =======
    Display.prototype.initGridElements = function() {
        console.log("initGridElements");

        var tableCols;
        var tableCellsArray = [];
        var tableRows = $(".row");
        for (var i = 0; i < tableRows.length; i++) {
            nextRow = tableRows[i];
            tableCols = $(nextRow).children(".cell");
            tableCellsArray.push(tableCols);
        }
        this.tableCellsArray = tableCellsArray;
    }

    // ======= ======= ======= init ======= ======= =======
    var game = new Game();
    var display = new Display("gameDisplay");
    var player1 = new Player(null, 0);
    var player2 = new Player(null, 1);
    var player3 = new Player(null, 2);
    var dealer = new Player("dealer", 3);

    game.playerObjectsArray = [player1, player2, player3];
    game.dealer = dealer;
    var sequencer = new Sequencer();
    display.initGridElements();
    sequencer.updateGameState();


}



// ======== ======= ======= ARCHIVE ======= ======= =======


// // ======= ======= ======= mergeRegion ======= ======= =======
// Display.prototype.mergeRegion = function(whichRegion, whichAction, whichStyle) {
//     console.log("mergeRegion");
//     var indexCell = this.tableCellsArray[whichRegion.iR][whichRegion.iC];
//     for (var j = 0; j < whichRegion.iH; j++) {
//         for (var i = 0; i < whichRegion.iW; i++) {
//             nextCell = this.tableCellsArray[whichRegion.iR + j][whichRegion.iC + i];
//             if (!((i == 0) && (j == 0))) {
//                 $(nextCell).remove();
//             }
//         }
//     }
//     $(indexCell).attr("colSpan", whichRegion.iW);
//     $(indexCell).attr("rowSpan", whichRegion.iH);
//     $(indexCell).addClass(whichStyle);
//     $(indexCell).attr("id", whichRegion.name);
//     return indexCell;
// }
//
// // ======= ======= ======= unMergeRegion ======= ======= =======
// Display.prototype.unMergeRegion = function(whichRegion, whichAction, whichStyle) {
//     console.log("unMergeRegion");
//     var indexCell = this.tableCellsArray[whichRegion.iR][whichRegion.iC];
//     $(indexCell).attr("colSpan", 1);
//     $(indexCell).attr("rowSpan", 1);
//     $(indexCell).removeClass(whichStyle);
//     for (var j = 0; j < whichRegion.cGroupH; j++) {
//         for (var i = 0; i < whichRegion.cGroupW; i++) {
//             if (!((i == 0) && (j == 0))) {
//                 var newCell = document.createElement("td");
//                 $(indexCell).after(newCell);
//                 $(newCell).addClass("cell");
//             }
//         }
//     }
//     $(indexCell).attr("id", "");
//     return indexCell;
// }
//
// // ======= ======= ======= selectTableCells ======= ======= =======
// Display.prototype.selectTableCells = function(whichRegion, whichAction, whichStyle) {
//     console.log("selectTableCells");
//     var indexCell = this.tableCellsArray[whichRegion.iR][whichRegion.iC];
//     for (var j = 0; j < whichRegion.cGroupH; j++) {
//         for (var i = 0; i < whichRegion.cGroupW; i++) {
//             nextCell = this.tableCellsArray[whichRegion.iR + j][whichRegion.iC + i];
//             $(nextCell).attr("colSpan", 1);
//             $(nextCell).attr("rowSpan", 1);
//             $(nextCell).addClass(whichStyle);
//         }
//     }
//     $(indexCell).attr("id", whichRegion.name);
//     return indexCell;
// }
//






// Display.prototype.modifyGridRegion = function(whichItem, whichMerge, whichAction, whichStyle, whichValue) {
// var self = this;
// var indexCell;
// for (var i = 0; i < this.gridRegionsObject.length; i++) {
//     nextRegion = this.gridRegionsObject[i];
//     nextRegionName = this.gridRegionsObject[i].name;
//     if (nextRegionName == whichItem) {
//         if (whichMerge == "merge") {
//             indexCell = this.mergeRegion(nextRegion, whichAction, whichStyle);
//         } else if (whichMerge == "unmerge") {
//             indexCell = this.unMergeRegion(nextRegion, whichAction, whichStyle);
//         } else {
//             indexCell = this.selectTableCells(nextRegion, whichAction, whichStyle);
//         }
//         break;
//     }
// }




// ======= ======= ======= initGridRegions ======= ======= =======
// Display.prototype.initGridRegions = function() {
//     console.log("initGridRegions");
//     for (var i = 0; i < this.gridRegionsObject.length; i++) {
//         nextRegion = this.gridRegionsObject[i];
//         this.selectTableCells(nextRegion.iRow, nextRegion.iCol, nextRegion.cGroupW, nextRegion.cGroupH);
//     }
// }
