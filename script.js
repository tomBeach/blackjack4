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
                hitMeBtn: { name: "hitMeBtn", callback: "hitMe", type: "btn", iR: 3, iC: 7, iW: 1, iH: 1, merge: null, class: "button", image: "hitMe.png", value: "hitMe" },
                holdMeBtn: { name: "holdMeBtn", callback: "holdMe", type: "btn", iR: 3, iC: 8, iW: 1, iH: 1, merge: null, class: "button", image: "holdMe.png", value: "holdMe" },
                betOnesBtn: { name: "betOnesBtn", callback: "betOne", type: "btn", iR:2, iC: 7, iW: 1, iH: 1, merge: null, class: "button", value: "$20", tooltip: null },
                betFivesBtn: { name: "betFivesBtn", callback: "betFive", type: "btn", iR: 2, iC: 8, iW: 1, iH: 1, merge: null, class: "button", value: "$30", tooltip: null },
                betTensBtn: { name: "betTensBtn", callback: "betTen", type: "btn", iR: 2, iC: 9, iW: 1, iH: 1, merge: null, class: "button", value: "$50", tooltip: null },
            },
            textParams: {
                pName: { player: 1, name: "pName_1", type: "text", iR: 2, iC: 3, iW: 3, iH: 1, merge: "merge", class: "pBorder-1", value: null },
                pScore: { player: 1, name: "pScore_1", type: "text", iR: 3, iC: 6, iW: 1, iH: 1, merge: null, class: "pBorder-1", value: 0 },
                pBank: { player: 1, name: "pBank_1", type: "text", iR: 2, iC: 6, iW: 1, iH: 1, merge: null, class: "pBorder-1", value: 100 },
                pBet_1s: { name: "pBet_1s_1", type: "text", iR: 0, iC: 12, iW: 1, iH: 1, merge: null, class: "pBorder-1", value: "$0" },
                pBet_5s: { name: "pBet_5s_1", type: "text", iR: 0, iC: 13, iW: 1, iH: 1, merge: null, class: "pBorder-1", value: "$0" },
                pBet_10s: { name: "pBet_10s_1", type: "text", iR: 0, iC: 14, iW: 1, iH: 1, merge: null, class: "pBorder-1", value: "$0" },
                pCards: { player: 1, name: "pCards_1", type: "text", iR: 3, iC: 5, iW: 1, iH: 2, merge: "merge", class: "card-1", value: null }
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
                hitMeBtn: { name: "hitMeBtn", callback: "hitMe", type: "btn", iR: 5, iC: 8, iW: 1, iH: 1, merge: null, class: "button", image: "hitMe.png", value: "hitMe" },
                holdMeBtn: { name: "holdMeBtn", callback: "holdMe", type: "btn", iR: 5, iC: 9, iW: 1, iH: 1, merge: null, class: "button", image: "holdMe.png", value: "holdMe" },
                betOnesBtn: { name: "betOnesBtn", callback: "betOne", type: "btn", iR:5, iC: 8, iW: 1, iH: 1, merge: null, class: "button", value: "$1", tooltip: null },
                betFivesBtn: { name: "betFivesBtn", callback: "betFive", type: "btn", iR: 5, iC: 9, iW: 1, iH: 1, merge: null, class: "button", value: "$5", tooltip: null },
                betTensBtn: { name: "betTensBtn", callback: "betTen", type: "btn", iR: 5, iC: 10, iW: 1, iH: 1, merge: null, class: "button", value: "$10", tooltip: null },
            },
            textParams: {
                pName: { player: 2, name: "pName_2", type: "text", iR: 5, iC: 4, iW: 3, iH: 1, merge: "merge", class: "pBorder-2", value: null },
                pScore: { player: 2, name: "pScore_2", type: "text", iR: 6, iC: 7, iW: 1, iH: 1, merge: null, class: "pBorder-2", value: 0 },
                pBank: { player: 2, name: "pBank_2", type: "text", iR: 5, iC: 7, iW: 1, iH: 1, merge: null, class: "pBorder-2", value: 100 },
                pBet_1s: { name: "pBet_1s_2", type: "text", iR: 5, iC: 12, iW: 1, iH: 1, merge: null, class: null, value: "$0" },
                pBet_5s: { name: "pBet_5s_2", type: "text", iR: 5, iC: 13, iW: 1, iH: 1, merge: null, class: null, value: "$0" },
                pBet_10s: { name: "pBet_10s_2", type: "text", iR: 5, iC: 14, iW: 1, iH: 1, merge: null, class: null, value: "$0" },
                pCards: { player: 2, name: "pCards_2", type: "text", iR: 6, iC: 7, iW: 1, iH: 2, merge: "merge", class: "card-2", value: null }
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
                hitMeBtn: { name: "hitMeBtn", callback: "hitMe", type: "btn", iR: 9, iC: 9, iW: 1, iH: 1, merge: null, class: "hitMe", image: "hitMe.png", value: "hitMe" },
                holdMeBtn: { name: "holdMeBtn", callback: "holdMe", type: "btn", iR: 9, iC: 10, iW: 1, iH: 1, merge: null, class: "holdMe", image: "holdMe.png", value: "holdMe" },
                betOnesBtn: { name: "betOnesBtn", callback: "betOne", type: "btn", iR:8, iC: 9, iW: 1, iH: 1, merge: null, class: "button", value: "$1", tooltip: "$1" },
                betFivesBtn: { name: "betFivesBtn", callback: "betFive", type: "btn", iR: 8, iC: 10, iW: 1, iH: 1, merge: null, class: "button", value: "$5", tooltip: "$5" },
                betTensBtn: { name: "betTensBtn", callback: "betTen", type: "btn", iR: 8, iC: 11, iW: 1, iH: 1, merge: null, class: "button", value: "$10", tooltip: "$10" },

            },
            textParams: {
                pName: { player: 3, name: "pName_3", type: "text", iR: 8, iC: 5, iW: 3, iH: 1, merge: true, class: "pBorder-3", value: null },
                pScore: { player: 3, name: "pScore_3", type: "text", iR: 9, iC: 8, iW: 1, iH: 1, merge: null, class: "pBorder-3", value: 0 },
                pBank: { player: 3, name: "pBank_3", type: "text", iR: 8, iC: 8, iW: 1, iH: 1, merge: null, class: "pBorder-3", value: 100 },
                pBet_1s: { name: "pBet_1s_3", type: "text", iR: 6, iC: 12, iW: 1, iH: 1, merge: null, class: null, value: "$0" },
                pBet_5s: { name: "pBet_5s_3", type: "text", iR: 6, iC: 13, iW: 1, iH: 1, merge: null, class: null, value: "$0" },
                pBet_10s: { name: "pBet_10s_3", type: "text", iR: 6, iC: 14, iW: 1, iH: 1, merge: null, class: null, value: "$0" },
                pCards: { player: 3, name: "pCards_3", type: "text", iR: 9, iC: 8, iW: 1, iH: 2, merge: "merge", class: "card-3", value: null }
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
                pName: { player: "D", name: "pName", type: "text", iR: 3, iC: 12, iW: 3, iH: 1, merge: "merge", class: "dBorder", value: null },
                pScore: { player: "D", name: "pScore", type: "text", iR: 3, iC: 11, iW: 1, iH: 1, merge: null, class: "dBorder", value: 0 },
                pCards: { player: "D", name: "pCards", type: "text", iR: 1, iC: 12, iW: 1, iH: 2, merge: "merge", class: "card-d", value: null }
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
        console.log("gameParams");
        console.log("  whichParams: " + whichParams);

        var itemParams = {
            bg: {
                table: { name: "table", type: "bg", iR: 5, iC: 12, iW: 3, iH: 3, merge: true, class: null },
                logo: { name: "logo", type: "bg", iR: 2, iC: 1, iW: 6, iH: 1, merge: false, class: null }
            },
            btn: {
                orbBtn: { name: "orbBtn", callback: "updateGameState", type: "btn", iR: 6, iC: 13, iW: 1, iH: 1, merge: null, class: "orbBtn", value: "", tooltip: "start playing!" },
                enterBtn: { name: "enterBtn", callback: "saveNewPlayer", type: "btn", iR: 5, iC: 12, iW: 3, iH: 1, merge: "merge", class: "enterBtn", value: "enter", tooltip:  "click to save player" },
                startBtn: { name: "startBtn", callback: "startGame", type: "btn", iR: 7, iC: 12, iW: 3, iH: 1, merge: "merge", class: "startBtn", value: "start", tooltip: "start game" },
                dealBtn: { name: "dealBtn", callback: "deal", type: "btn", iR: 6, iC: 13, iW: 1, iH: 1, merge: "merge", class: "dealBtn", value: "deal", tooltip: null },
                retOnesBtn: { name: "retOnesBtn", callback: "retOne", type: "btn", iR: 7, iC: 12, iW: 1, iH: 1, merge: "merge", class: "ones", value: "ones", tooltip: null },
                retFivesBtn: { name: "retFivesBtn", callback: "retFive", type: "btn", iR: 7, iC: 13, iW: 1, iH: 1, merge: "merge", class: "fives", value: "fives", tooltip: null },
                retTensBtn:  { name: "retTensBtn",  callback: "retTen", type: "btn", iR: 7, iC: 14, iW: 1, iH: 1,  merge: "merge", class: "tens", value: "tens", tooltip: null },
                playGameBtn: { name: "playGameBtn", callback: "updateGameState", type: "btn", iR: 8, iC: 13, iW: 1, iH: 1, merge: "merge", class: "playGameBtn", value: "play game", tooltip: null },
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
        switch(whichState) {
            case "splash":
                var splash = {
                    name: "splash",
                    bg: null,
                    btn: [game.btnParams.orbBtn],
                    text: [game.textParams.tooltips],
                    input: null,
                    image: null
                }
                return splash;
                break;
            case "login":
                var login = {
                    name: "login",
                    bg: null,
                    btn: [game.btnParams.enterBtn],
                    text: [game.textParams.tooltips],
                    input: [game.inputParams.playerName],
                    image: null
                }
                return login;
                break;
            case "saveStart":
                var saveStart = {
                    name: "saveStart",
                    bg: null,
                    btn: [game.btnParams.enterBtn, game.btnParams.startBtn],
                    text: [game.textParams.tooltips],
                    input: [game.inputParams.playerName],
                    image: null
                }
                return saveStart;
                break;
            case "deal":
                var deal = {
                    name: "deal",
                    bg: null,
                    btn: [game.gameParams("btn").dealBtn],
                    text: [game.gameParams("text").tooltips],
                    input: null,
                    image: null
                }
                return deal;
                break;
            case "bet":
                bet = {
                    name: "bet",
                    bg: null,
                    btn: [game.btnParams.retOnesBtn, game.btnParams.retFivesBtn, game.btnParams.retTensBtn, game.btnParams.playGameBtn, player.btnParams.betOnesBtn, player.btnParams.betFivesBtn, player.btnParams.betTensBtn],
                    text: [game.gameParams("text").tooltips],
                    input: null,
                    image: null
                }
                return bet;
                break;
            case "playGame":
                playGame = {
                    name: "playGame",
                    bg: null,
                    btn: [game.btnParams.retOnesBtn, game.btnParams.retFivesBtn, game.btnParams.retTensBtn, player.btnParams.betOnesBtn, player.btnParams.betFivesBtn, player.btnParams.betTensBtn, player.btnParams.hitMeBtn, player.btnParams.holdMeBtn],
                    text: [game.gameParams("text").tooltips],
                    input: null,
                    image: null
                }
                return playGame;
                break;
            case "hitMe":
                hitMe = {
                    name: "hitMe",
                    bg: null,
                    btn: [player.btnParams.hitMeBtn, player.btnParams.holdMeBtn],
                    text: [game.gameParams("text").tooltips],
                    input: null,
                    image: null
                }
                return hitMe;
                break;
            case "holdMe":
                holdMe = {
                    name: "holdMe",
                    bg: null,
                    btn: [player.btnParams.hitMeBtn, player.btnParams.holdMeBtn],
                    text: [game.gameParams("text").tooltips],
                    input: null,
                    image: null
                }
                return holdMe;
                break;
            case "turnOver":
                turnOver = {
                    name: "turnOver",
                    bg: null,
                    btn: [game.btnParams.retOnesBtn, game.btnParams.retFivesBtn, game.btnParams.retTensBtn, player.btnParams.betOnesBtn, player.btnParams.betFivesBtn, player.btnParams.betTensBtn, player.btnParams.hitMeBtn, player.btnParams.holdMeBtn],
                    text: [game.gameParams("text").tooltips],
                    input: null,
                    image: null
                }
                return turnOver;
                break;
            case "hitDealer":
                hitDealer = {
                    name: "hitDealer",
                    bg: null,
                    btn: null,
                    text: [game.gameParams("text").tooltips],
                    input: null,
                    image: null
                }
                return hitDealer;
                break;
            case "doTheMath":
                doTheMath = {
                    name: "doTheMath",
                    bg: null,
                    btn: [game.gameParams("btn").newGameBtn],
                    text: [game.gameParams("text").tooltips],
                    input: null,
                    image: null
                }
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
        this.onesBet = 0;
        this.fivesBet = 0;
        this.tensBet = 0;
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
        this.deckArray = [];
        this.deckPointsArray = [];
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
        this.onesBet = 0;
        this.fivesBet = 0;
        this.tensBet = 0;
        this.display = null;
        this.message = null;
    }


    // ======= ======= ======= Sequencer ======= ======= =======

    function Sequencer() {
        console.log('Sequencer');
        this.name = "Sequencer";
        this.currentGameState = "doTheMath";
        this.gameStatesArray = ["splash", "login", "saveStart", "deal", "bet", "playGame", "hitMe", "holdMe", "turnOver", "hitDealer", "doTheMath"];
    }

    // ======= ======= ======= Display ======= ======= =======

    function Display(whichDisplay) {
        console.log('Display');
        this.name = whichDisplay;
        this.tableCellsArray = null;
    }



    // ======= ======= ======= ======= ======= ======= SEQUENCER ======= ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= ======= SEQUENCER ======= ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= ======= SEQUENCER ======= ======= ======= ======= ======= =======



    // ======= ======= ======= startGame ======= ======= =======
    Sequencer.prototype.startGame = function() {
        console.log("startGame");
        game.loadDealer();
        game.updatePlayerNames(game.dealer, 4);
        game.currentPlayer = game.playerObjectsArray[0];
        this.updateGameState();
    }

    // ======= ======= ======= loadStartGameState ======= ======= =======
    Sequencer.prototype.loadStartGameState = function(prevNext) {
        console.log("loadStartGameState");

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
    Sequencer.prototype.updateGameState = function(whichState) {
        console.log("");
        console.log("== updateGameState ==");

        // == get current state
        var currentGameState = this.currentGameState;
        console.log("== " + currentGameState + " ==");
        var sequencerParams = this.sequencerParams(currentGameState);
        var prevItemTypesArray = [sequencerParams.bg, sequencerParams.btn, sequencerParams.text, sequencerParams.input, sequencerParams.image]
        var currentGameStateIndex = this.gameStatesArray.indexOf(this.currentGameState);

        // == return to start game
        if ((currentGameStateIndex == this.gameStatesArray.length - 1) && (!whichState)) {
            console.log("  ** last game state");
            currentGameState = this.gameStatesArray[0];
            this.currentGameState = currentGameState;
            console.log("== " + currentGameState + " ==");
            // this.doTheMath();
            game.clearPrevGameState();
            this.loadStartGameState("next");
        } else {
            if (whichState) {
                currentGameState = whichState;
                this.currentGameState = whichState;
            } else {
                currentGameState = this.gameStatesArray[currentGameStateIndex + 1];
                this.currentGameState = currentGameState;
            }

            console.log("== " + currentGameState + " ==");
            var sequencerParams = this.sequencerParams(currentGameState);
            var nextItemTypesArray = [sequencerParams.bg, sequencerParams.btn, sequencerParams.text, sequencerParams.input, sequencerParams.image]

            // == identify items to delete/keep/add
            var changeItemsArray = this.processItemArrays(nextItemTypesArray, prevItemTypesArray);
            var removeItemsArray = changeItemsArray[2];     // delete these items
            var addItemsArray = changeItemsArray[3];        // add these items

            // == remove prev items; add next items
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

    // ======= ======= ======= saveNewPlayer ======= ======= =======
    Sequencer.prototype.saveNewPlayer = function() {
        console.log("saveNewPlayer");

        var playerCount = game.playerNamesArray.length;
        if (playerCount < 3) {
            newPlayer = game.playerObjectsArray[playerCount]
            game.playerNamesArray.push(newPlayer.name)
            var playerCount = game.playerNamesArray.length;
            game.loadNewPlayer(newPlayer);
            game.updatePlayerNames(newPlayer, playerCount);
        }
        if (playerCount == 1) {
            this.updateGameState();
        }
        if (playerCount == 3) {
            $("#tooltips").text("Max of 3 players.  Start game!");
            game.loadDealer();
            game.updatePlayerNames(game.dealer, 4);
            this.updateGameState();
        }

    }

    // ======= ======= ======= processItemArrays ======= ======= =======
    Sequencer.prototype.processItemArrays = function(nextItemsParamsObject, prevItemsParamsObject, itemType) {
        // console.log("processItemArrays");

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
        return [REMprevNames, ADDnextNames, REMprevItems, ADDnextItems];
    }

    // ======= ======= ======= activateButton ======= ======= =======
    Sequencer.prototype.activateButton = function(indexCell, whichAction) {
        console.log("activateButton");
        console.log("  action: " + whichAction);

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
            case "deal":
                $(indexCell).on("click", function(){
                    console.log("-- deal");
                    game.deal();
                });
                break;
            case "betOne":
                $(indexCell).on("click", function(){
                    console.log("-- betOne");
                    game.placeBet("ones");
                });
                break;
            case "betFive":
                $(indexCell).on("click", function(){
                    console.log("-- betFive");
                    game.placeBet("fives");
                });
                break;
            case "betTen":
                $(indexCell).on("click", function(){
                    console.log("-- betTen");
                    game.placeBet("tens");
                });
                break;
            case "retOne":
                $(indexCell).on("click", function(){
                    console.log("-- retOne");
                    game.returnBet("ones");
                });
                break;
            case "retFive":
                $(indexCell).on("click", function(){
                    console.log("-- retFive");
                    game.returnBet("fives");
                });
                break;
            case "retTen":
                $(indexCell).on("click", function(){
                    console.log("-- retTen");
                    game.returnBet("tens");
                });
                break;
            case "playGame":
                $(indexCell).on("click", function(){
                    console.log("-- playGame");
                    game.updateGameState();
                });
                break;
            case "hitMe":
                $(indexCell).on("click", function(){
                    console.log("-- hitMe");
                    game.hitMe();
                });
                break;
            case "holdMe":
                $(indexCell).on("click", function(){
                    console.log("-- holdMe");
                    game.holdMe();
                });
                break;
        }
    }

    // ======= ======= ======= deActivateButton ======= ======= =======
    Sequencer.prototype.deActivateButton = function(indexCell, whichAction) {
        console.log("deActivateButton");
        console.log("  action: " + whichAction);

        // ======= event listeners =======
        $(indexCell).off("mouseenter", null);
        $(indexCell).off("click", null);
    }

    // ======= ======= ======= doTheMath ======= ======= =======
    Sequencer.prototype.doTheMath = function() {
	    console.log("doTheMath");

	    var nextPlayer, nextName, winLossLabel;
	    var dealerScore = game.dealer.score;
	    var playerWinLoss = 0;
	    var playerWinLossString = 'RESULTS!!\nDealer score:  ' + dealerScore + '\n';

	    // =======
	    for (var i = 0; i < (game.playerNamesArray.length); i++) {
	    	nextPlayer = game.playerObjectsArray[i];
	    	nextName = nextPlayer.name;
	    	console.log("   nextName: " + nextName);

	    	// ======= calculate win/loss results
	    	playerWinLoss = (nextPlayer.onesBet) + (nextPlayer.fivesBet) + (nextPlayer.tensBet);
	    	console.log("   playerWinLoss: " + playerWinLoss);

    		// ======= calculate wins/losses for players
	    	if ((nextPlayer.score > dealerScore) && (nextPlayer.score < 22)) {
	    		winLossLabel = ' and won $';
	    		nextPlayer.totalBank = nextPlayer.totalBank + playerWinLoss;
				nextPlayer.onesBank = nextPlayer.onesBank + nextPlayer.onesBet;
                nextPlayer.fivesBank = nextPlayer.fivesBank + nextPlayer.fivesBet;
                nextPlayer.tensBank = nextPlayer.tensBank + nextPlayer.tensBet;
	    	} else {
	    		winLossLabel = ' and lost $';
				nextPlayer.totalBal = nextPlayer.totalBal - playerWinLoss;
                nextPlayer.onesBank = nextPlayer.onesBank - nextPlayer.onesBet;
                nextPlayer.fivesBank = nextPlayer.fivesBank - nextPlayer.fivesBet;
                nextPlayer.tensBank = nextPlayer.tensBank - nextPlayer.tensBet;
	    	}

            playerWinLossString += nextName + "'s score:  " + nextPlayer.score + winLossLabel + playerWinLoss + '\n';

		    // ======= set bet values on player object
		    nextPlayer.onesBet = 0;
		    nextPlayer.fivesBet = 0;
		    nextPlayer.tensBet = 0;

		    // ======= initialize all players/dealer for next hand
	    	nextPlayer.hand = [];
			nextPlayer.score = 0;
	    }

	    // updateDisplay('calculateWinner');
	    alert(playerWinLossString);
	    // dealCards();
	}



    // ======= ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= ======= GAME ======= ======= ======= ======= ======= =======



    // ======= ======= ======= clearPrevGameState ======= ======= =======
    Game.prototype.clearPrevGameState = function() {
        console.log("clearPrevGameState");

        if (game.playerNamesArray.length > 0) {
            var nextPlayer, cardCount, offsetC, whichCardObject, nextItem, indexCell;
            var offsetR = 0;
            for (var i = 0; i < game.playerNamesArray.length; i++) {
                nextPlayer = game.playerObjectsArray[i];
                cardCount = nextPlayer.hand.length;
                whichCardObject = nextPlayer.textParams.pCards;
                offsetC = -(cardCount - 1);

                // == remove prev items; add next items
                for (var j = 0; j < nextPlayer.hand.length; j++) {
                    nextItem = nextPlayer.hand[j];
                    offsetC = offsetC + j;
                    indexCell = display.unMergeRegion(whichCardObject, offsetR, offsetC);
                }
            }
            if (game.dealer.hand.length > 0) {
                cardCount = game.dealer.hand.length;
                offsetC = cardCount - 1;
                for (var j = 0; j < game.dealer.hand.length; j++) {
                    nextItem = game.dealer.hand[j];
                    offsetC = offsetC + j;
                    indexCell = display.unMergeRegion(whichCardObject, offsetR, offsetC);
                }
            }
        }
    }

    // ======= ======= ======= hitDealer ======= ======= =======
    Game.prototype.hitDealer = function() {
	    console.log("hitDealer");

        // == hit dealer again or end hand
        if (dealer.score < 18) {
            cardPointsArray = game.getNextCard();				// get card from deck; shrink deck
            nextCard = cardPointsArray[0];
            nextPoints = cardPointsArray[1];
            dealer.hand.push(nextCard);
            dealer.score = dealer.score + nextPoints;           // calculate dealer score
            console.log("  dealer.score: " + dealer.score);
            this.dealNextCard(dealer);                          // display new card
            this.updatePlayerScoreText(dealer);                 // display dealer score

            // == pause between dealer cards
            // setTimeout(function() {
            //      console.log("dealer pause");
            // }, 2000);

            if (dealer.score < 18) {
                this.hitDealer();
            } else {
                sequencer.updateGameState();
                sequencer.doTheMath();
            }
        } else {
            sequencer.updateGameState();
            sequencer.doTheMath();
        }
    }

    // ======= ======= ======= turnOver ======= ======= =======
    Game.prototype.turnOver = function() {
	    console.log("turnOver");

        var currentPlayerIndex = this.currentPlayer.id;
        console.log("  currentPlayerIndex: " + currentPlayerIndex);
        console.log("  this.playerNamesArray.length: " + this.playerNamesArray.length);
        if (currentPlayerIndex < (this.playerNamesArray.length - 1)) {
            var nextPlayer = this.playerObjectsArray[this.currentPlayer.id];
            this.currentPlayer = nextPlayer;
            $("#tooltips").text(nextPlayer.name + "'s turn");
            sequencer.updateGameState("playGame");
        } else {
            this.currentPlayer = this.dealer;
            $("#tooltips").text("dealer's turn");
            sequencer.updateGameState("hitDealer");
            this.hitDealer();
        }
    }

    // ======= ======= ======= hitMe ======= ======= =======
    Game.prototype.hitMe = function() {
	    console.log("hitMe");

	    var nextPlayer = this.currentPlayer;
		var cardPoints = this.getNextCard();				// get card from deck; shrink deck
		var nextCard = cardPoints[0];
		var nextPoints = cardPoints[1];
		console.log('  nextCard: ' + nextCard);
		nextPlayer.hand.push(nextCard);
		nextPlayer.score = nextPlayer.score + nextPoints;
        this.dealNextCard(nextPlayer);
        this.updatePlayerScoreText(nextPlayer);

		// ======= check for Aces and adjust score
		if (nextPlayer.score > 21) {
			for (var i = 0; i < nextPlayer.hand.length; i++) {
				nextCard = nextPlayer.hand[i];

				// ======= change A value to 1 if > 21 score
				if (nextCard.indexOf("A") > 0) {
					nextPlayer.score = nextPlayer.score - 10;
					break;
				}
			}

			// ======= score still high after adjustment
			if (nextPlayer.score > 21) {
                $("#tooltips").text("Bummer... you're over 21!");
				nextPlayer.totalBank = nextPlayer.totalBank - (nextPlayer.onesBank + nextPlayer.fivesBank + nextPlayer.tensBank);
				this.turnOver();
			}
		}
	}

    // ======= ======= ======= holdMe ======= ======= =======
    Game.prototype.holdMe = function() {
	    console.log("holdMe");
        $("#tooltips").text("Next player turn");
        this.turnOver();
    }

    // ======= ======= ======= returnBet ======= ======= =======
    Game.prototype.returnBet = function(whichBet) {
        // console.log("returnBet");

        var onesBank = game.currentPlayer.onesBank;
        var fivesBank = game.currentPlayer.fivesBank;
        var tensBank = game.currentPlayer.tensBank;
        var onesBet = game.currentPlayer.onesBet;
        var fivesBet = game.currentPlayer.fivesBet;
        var tensBet = game.currentPlayer.tensBet;
        var limitFlag = false;

        switch(whichBet) {
            case "ones":
                onesBet = onesBet - 1;
                if (onesBet < 0) {
                    onesBet = 0;
                    limitFlag = true;
                } else {
                    onesBank = onesBank + 1;
                }
                break;
            case "fives":
                fivesBet = fivesBet - 5;
                if (fivesBet < 0) {
                    fivesBet = 0;
                    limitFlag = true;
                } else {
                    fivesBank = fivesBank + 5;
                }
                break;
            case "tens":
                tensBet = tensBet - 10;
                if (tensBet < 0) {
                    tensBet = 0;
                    limitFlag = true;
                } else {
                    tensBank = tensBank + 10;
                }
                break;
        }

        if (limitFlag == false) {
            game.currentPlayer.onesBank = onesBank;
            game.currentPlayer.fivesBank = fivesBank;
            game.currentPlayer.tensBank = tensBank;
            game.currentPlayer.onesBet = onesBet;
            game.currentPlayer.fivesBet = fivesBet;
            game.currentPlayer.tensBet = tensBet;
            game.updateBetButtonText(game.currentPlayer);
        } else {
            $("#tooltips").text("Total bet is returned");
        }

    }

    // ======= ======= ======= placeBet ======= ======= =======
    Game.prototype.placeBet = function(whichBet) {
        // console.log("placeBet");

        var onesBank = game.currentPlayer.onesBank;
        var fivesBank = game.currentPlayer.fivesBank;
        var tensBank = game.currentPlayer.tensBank;
        var onesBet = game.currentPlayer.onesBet;
        var fivesBet = game.currentPlayer.fivesBet;
        var tensBet = game.currentPlayer.tensBet;
        var limitFlag = false;

        switch(whichBet) {
            case "ones":
                onesBank = onesBank - 1;
                if (onesBank < 0) {
                    onesBank = 0;
                    limitFlag = true;
                } else {
                    onesBet = onesBet + 1;
                }
                break;
            case "fives":
                fivesBank = fivesBank - 5;
                if (fivesBank < 0) {
                    fivesBank = 0;
                    limitFlag = true;
                } else {
                    fivesBet = fivesBet + 5;
                }
                break;
            case "tens":
                tensBank = tensBank - 10;
                if (tensBank < 0) {
                    tensBank = 0;
                    limitFlag = true;
                } else {
                    tensBet = tensBet + 10;
                }
                break;
        }

        if (limitFlag == false) {
            game.currentPlayer.onesBank = onesBank;
            game.currentPlayer.fivesBank = fivesBank;
            game.currentPlayer.tensBank = tensBank;
            game.currentPlayer.onesBet = onesBet;
            game.currentPlayer.fivesBet = fivesBet;
            game.currentPlayer.tensBet = tensBet;
            game.updateBetButtonText(game.currentPlayer);
        } else {
            $("#tooltips").text("Oops you're out of money!");
        }

    }

    // ======= ======= ======= updateBetButtonText ======= ======= =======
    Game.prototype.updateBetButtonText = function(whichPlayer) {
        console.log("updateBetButtonText");
        $("#" + whichPlayer.btnParams.betOnesBtn.name).text("$" + whichPlayer.onesBank);
        $("#" + whichPlayer.btnParams.betFivesBtn.name).text("$" + whichPlayer.fivesBank);
        $("#" + whichPlayer.btnParams.betTensBtn.name).text("$" + whichPlayer.tensBank);
        $("#" + whichPlayer.textParams.pBet_1s.name).text("$" + whichPlayer.onesBet);
        $("#" + whichPlayer.textParams.pBet_5s.name).text("$" + whichPlayer.fivesBet);
        $("#" + whichPlayer.textParams.pBet_10s.name).text("$" + whichPlayer.tensBet);
    }

    // ======= ======= ======= updatePlayerScoreText ======= ======= =======
    Game.prototype.updatePlayerScoreText = function(whichPlayer) {
        console.log("updatePlayerScoreText");
        if (whichPlayer.name == "dealer") {
            var playerScoreCell = "#pScore";
        } else {
            var playerScoreCell = "#pScore_" + (whichPlayer.id + 1);
        }
        whichPlayer.textParams.pScore.value = whichPlayer.score;
        $(playerScoreCell).text(whichPlayer.score);
    }

    // ======= ======= ======= dealNextCard ======= ======= =======
    Game.prototype.dealNextCard = function(whichPlayer) {
        console.log("dealNextCard");

        var whichMerge, cardDivString;
        var whichCardObject = whichPlayer.textParams.pCards;
        var whichName = whichCardObject.name;
        var whichClass = whichCardObject.class;
        var cardCount = whichPlayer.hand.length;
        var cardValue = whichPlayer.hand[cardCount - 1];

        if (whichPlayer.name == "dealer") {
            offsetC = cardCount - 1;
        } else {
            offsetC = -(cardCount - 1);
        }
        offsetR = 0;

        if (whichCardObject.merge == "merge") {
            indexCell = display.mergeRegion(whichCardObject, offsetR, offsetC);
        } else {
            indexCell = display.unMergeRegion(whichCardObject);
        }

        cardDivString = "<div class='flip-container " + whichClass + "' ontouchstart='this.classList.toggle('hover');'>";
        cardDivString += "<div class='flipper'><div class='front'><p class='cardText'>" + cardValue + "</p></div>";
        cardDivString += "<div class='back'><p class='cardText'>" + cardValue + "</p></div></div></div>";

        $(indexCell).append(cardDivString);
    }

    // ======= ======= ======= getNextCard ======= ======= =======
    Game.prototype.getNextCard = function() {
        console.log("getNextCard");
		var cardIndex = parseInt(Math.random() * this.deckArray.length);
		var nextCard = this.deckArray[cardIndex];
		var nextPoints = this.deckPointsArray[cardIndex];
		this.deckArray.splice(cardIndex, 1);
		this.deckPointsArray.splice(cardIndex, 1);
		return [nextCard, nextPoints];
	}

    // ======= ======= ======= deal ======= ======= =======
    Game.prototype.deal = function(indexCell, whichAction) {
        console.log("deal");

        // ======= initialize deck
        // var suitArray = ['&clubs; ','&diams; ','&hearts; ','&spades; '];
        var suitArray = ['C','D','H','S'];
        var valueArray = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        var pointsArray = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        var nextValue, nextPoints, cardPoints, nextCard, nextPlayer;

        for (var i = 0; i < suitArray.length; i++) {
            nextSuit = suitArray[i];
            for (var j = 0; j < valueArray.length; j++) {
                nextValue = valueArray[j];
                nextPoints = pointsArray[j];
                this.deckArray.push(nextValue + nextSuit);
                this.deckPointsArray.push(nextPoints);
            }
        }

        // ======= clear previous player hand
        for (var i = 0; i < (this.playerNamesArray.length); i++) {
            var nextPlayer = this.playerObjectsArray[i];
            nextPlayer.hand = [];
        }

        // ======= deal cards to each player and dealer
        var winnersArray = [];
        var nextPlayer;
        for (var i = 0; i < (this.playerNamesArray.length); i++) {
            nextPlayer = this.playerObjectsArray[i];
            console.log('  nextPlayer.name: ' + nextPlayer.name);

            // ======= getNextCard
            for (var j = 0; j < 2; j++) {
                cardPointsArray = game.getNextCard();				// get card from deck; shrink deck
                nextCard = cardPointsArray[0];
                nextPoints = cardPointsArray[1];
                nextPlayer.hand.push(nextCard);
                nextPlayer.score = nextPlayer.score + nextPoints;   // calculate player score
                this.dealNextCard(nextPlayer);
            }

            // ======= if Ace card and > 21 (2 aces)
            if (nextPlayer.score > 21) {
                for (var k = 0; k < nextPlayer.hand.length; k++) {
                    nextCard = nextPlayer.hand[k];

                    // ======= change Ace value to 1
                    if (nextCard.indexOf("A") > 0) {
                        nextPlayer.score = nextPlayer.score - 10;
                        break;
                    }
                }
            }

            // ======= instant winner
            if (nextPlayer.score == 21) {
                winnersArray.push(nextPlayer);
            }
            this.updatePlayerScoreText(nextPlayer);
            var playerParamsArray = [nextPlayer.textParams.pBet_1s, nextPlayer.textParams.pBet_5s, nextPlayer.textParams.pBet_10s];
            // var playerParamsArray = [nextPlayer.textParams.pBet_10s];
            for (var j = 0; j < playerParamsArray.length; j++) {
                nextItem = playerParamsArray[j];
                console.log("  nextItem.name: " + nextItem.name);
                if (nextItem != null) {
                    display.modifyGridRegion(nextItem, "next");
                }
            }
        }

        // ======= deal to dealer
        dealer.hand = []
        for (var j = 0; j < 2; j++) {
            cardPointsArray = game.getNextCard();				// get card from deck; shrink deck
            nextCard = cardPointsArray[0];
            nextPoints = cardPointsArray[1];
            dealer.hand.push(nextCard);
            dealer.score = dealer.score + nextPoints;           // calculate player score
            this.dealNextCard(dealer);
        }
        this.updatePlayerScoreText(dealer);

        // ======= set default player (unless winner)
        if (winnersArray.length > 0) {
            // calculateWinner();
        } else {
            this.activePlayer = 1;
            sequencer.updateGameState();
        }
    }

    // ======= ======= ======= updatePlayerNames ======= ======= =======
    Game.prototype.updatePlayerNames = function(whichPlayer, playerId) {
        // console.log("updatePlayerNames");
        if (whichPlayer.name == "dealer") {
            var playerNameCell = "#pName";
            $(playerNameCell).text("dealer");
        } else {
            var playerNameCell = "#pName_" + playerId;
            whichPlayer.name = $('#playerNameInput').val();
            whichPlayer.textParams.pName.value = whichPlayer.name;
            $(playerNameCell).text(whichPlayer.name);
        }
        whichPlayer.textParams.pScore.value = 0;
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

                // == player buttons not active yet (display amounts only)
                if (nextItem.type == "btn") {
                    var indexCell = display.tableCellsArray[nextItem.iR][nextItem.iC];
                    sequencer.deActivateButton(indexCell, "click")
                }
            }
        }

        currentPlayer.textParams.pName.value = this.name;
        currentPlayer.textParams.pScore.value = 0;
        currentPlayer.textParams.pBank.value = currentPlayer.totalBank;
    }

    // ======= ======= ======= loadDealer ======= ======= =======
    Game.prototype.loadDealer = function() {
        // console.log("loadDealer");

        var playerParamsArray = [dealer.bgParams.borderH, dealer.bgParams.borderV, dealer.textParams.pName, dealer.textParams.pScore];
        for (var j = 0; j < playerParamsArray.length; j++) {
            nextItem = playerParamsArray[j];
            if (nextItem) {
                display.modifyGridRegion(nextItem, "next");
            }
        }
        dealer.textParams.pName.value = this.name;
        dealer.textParams.pScore.value = 0;
    }



    // ======= ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= ======= =======



    // ======= ======= ======= modifyGridRegion ======= ======= =======
    Display.prototype.modifyGridRegion = function(whichItem, prevNext) {
        console.log("modifyGridRegion");

        var whichMerge, buttonActivate;
        if (prevNext == "prev") {
            if (whichItem.merge == "merge") {
                whichMerge = "unmerge";
            } else {
                whichMerge = "restore";
            }
            buttonActivate = false;
        } else {
            if (whichItem.merge == "merge") {
                whichMerge = "merge";
            } else {
                whichMerge = null;
            }
            buttonActivate = true;
        }

        var whichType = whichItem.type;
        var whichValue = whichItem.value;
        var whichName = whichItem.name;
        console.log("  whichItem.name: " + whichItem.name);
        console.log("  whichItem.type: " + whichItem.type);
        console.log("  whichValue: " + whichValue);

        if (whichMerge == "merge") {
            indexCell = this.mergeRegion(whichItem);
        } else if (whichMerge == "unmerge") {
            indexCell = this.unMergeRegion(whichItem);
        } else if (whichMerge == "restore") {
            indexCell = this.deselectTableCells(whichItem);
        } else {
            indexCell = this.selectTableCells(whichItem);
        }
        console.log("  indexCell: " + indexCell);
        console.log("  indexCell.attr('class'): " + $(indexCell).attr('class'));

        // ======= data connection =======
        switch(whichType) {
            case "bg":
                break;
            case "btn":
                if (buttonActivate == true) {
                    $(indexCell).text(whichValue);
                    sequencer.activateButton(indexCell, whichItem.callback)
                    console.log("  whichItem.callback: " + whichItem.callback);
                } else {
                    sequencer.deActivateButton(indexCell, whichItem.callback)
                }
                break;
            case "text":
                $(indexCell).text(whichValue);
                console.log("  whichValue: " + whichValue);
                break;
            case "input":
                newTextInput = "<input id='" + whichItem.name + "Input' class='" + whichItem.class + "' type='text' value='Tom'>"
                $(indexCell).append(newTextInput);
                $(newTextInput).attr("id", whichItem.name);
            case "image":
                break;
        }
    }

    // ======= ======= ======= mergeRegion ======= ======= =======
    Display.prototype.mergeRegion = function(whichItem, offsetR, offsetC) {
        console.log("mergeRegion");
        if (!offsetR) { offsetR = 0 };
        if (!offsetC) { offsetC = 0 };
        var offsetR = parseInt(offsetR);
        var offsetC = parseInt(offsetC);
        var indexCell = this.tableCellsArray[whichItem.iR + offsetR][whichItem.iC + offsetC];
        for (var j = 0; j < whichItem.iH; j++) {
            for (var i = 0; i < whichItem.iW; i++) {
                nextCell = this.tableCellsArray[whichItem.iR + offsetR + j][whichItem.iC + offsetC + i];
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
    Display.prototype.unMergeRegion = function(whichItem, offsetR, offsetC) {
        // console.log("unMergeRegion");
        if (!offsetR) { offsetR = 0 };
        if (!offsetC) { offsetC = 0 };
        var offsetR = parseInt(offsetR);
        var offsetC = parseInt(offsetC);
        var indexCell = this.tableCellsArray[whichItem.iR + offsetR][whichItem.iC + offsetC];
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
                console.log("  whichItem.iC: " + whichItem.iC);
                console.log("  whichItem.iR: " + whichItem.iR);
                console.log("  whichItem.class: " + whichItem.class);
            }
        }
        $(indexCell).attr("id", whichItem.name);
        $(indexCell).addClass(whichItem.class);
        console.log("  $(indexCell).attr('id'): " + $(indexCell).attr("id"));
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
        // console.log("initGridElements");

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
