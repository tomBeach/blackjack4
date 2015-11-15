$(document).ready(function(){
    console.log('jQuery loaded');
    console.log('document ready');

    initGame();

});


function initGame() {
    console.log('initGame');

    // ======= ======= ======= gameParams ======= ======= =======
    Game.prototype.gameParams = function(whichParams) {
        console.log("gameParams");
        console.log("  whichParams: " + whichParams);

        var itemParams = {
            bg: {
                table: { name: "table", type: "bg", iR: 4, iC: 11, iW: 6, iH: 4, merge: null, class: "table" },
                logo: { name: "logo", type: "bg", iR: 2, iC: 1, iW: 6, iH: 1, merge: null, class: null }
            },
            btn: {
                orbBtn: { name: "orbBtn", callback: "nextGameState", type: "btn", iR: 5, iC: 12, iW: 3, iH: 1, merge: "merge", class: "orbBtn", value: "START", tooltipOver: "start the game!", tooltipOut: "" },
            },
            slider: {},
            text: {
                pName_1: { name: "pName_1", type: "text", iR: 8, iC: 12, iW: 3, iH: 1, merge: "merge", class: null, value: null },
            },
            input: {
                playerName: { name: "playerName", type: "input", iR: 5, iC: 12, iW: 3, iH: 1, merge: "merge", class: "inputText", value: "playerName" }
            },
            image: {}
        }
    }

    // ======= ======= ======= Sub Screen data ======= ======= =======
    function initSubScreenObjects() {
        console.log("initSubScreenObjects");

        var player1 = {
            name:  "player1",
            bg:     [player1.bgParams.borderH, player1.bgParams.borderV],
            btn:    null,
            slider: [player1.sliderParams.betOnesBtn, player1.sliderParams.betFivesBtn, player1.sliderParams.betTensBtn],
            text:   [player1.textParams.pName, player1.textParams.pScore, player1.textParams.pBank],
            input:  null,
            image:  null
        },
        var scoreboard = {
            name:  "scoreboard",
            bg:     [scoreboard.bgParams.border],
            btn:    null,
            slider: null,
            text:   [scoreboard.textParams.pName_1, scoreboard.textParams.pBank_1, scoreboard.textParams.pName_2, scoreboard.textParams.pBank_2, scoreboard.textParams.pName_3, scoreboard.textParams.pBank_3],
            input:  null,
            image:  null
        }
        return [player1, scoreboard];
    }

    // ======= ======= ======= Game Screen data ======= ======= =======
    function initGameScreenObjects() {
        console.log("initGameScreenObjects");

        var splash = new Screen (
    		/* name:       */ "splash",
            /* bg:         */ null,
            /* btn:        */ [game.btnParams.orbBtn],
            /* slider:     */ null,
            /* text:       */ [game.textParams.tooltips],
            /* input:      */ null,
            /* image:      */ null,
            /* subscreens: */ null
        ),
        var bet = new Screen (
    		/* name:       */ "bet",
            /* bg:         */ null,
            /* btn:        */ [game.btnParams.playBtn],
            /* slider:     */ null,
            /* text:       */ [game.textParams.tooltips],
            /* input:      */ null,
            /* image:      */ null,
            /* subscreens: */ [player1, scoreboard]
        )
        return [splash, bet];
    }

    // ======= ======= ======= Screen Object ======= ======= =======

    var bet =  {
        name = null,
        bgs = {
            table: { name: "table", type: "bg", iR: 4, iC: 11, iW: 6, iH: 4, merge: null, class: "table" },
            logo: { name: "logo", type: "bg", iR: 2, iC: 1, iW: 6, iH: 1, merge: null, class: null }
        },
        btns = null,
        sliders = null,
        texts = null,
        inputs = null,
        images = null,
        subscreens = null
    }

    // ======= ======= ======= Game Object ======= ======= =======

    function Game(whichGame) {
        console.log('Game');
        this.currentPlayer = null;
        this.currentSubScreen = null;
        this.currentGameScreen = null;
        this.allPlayers = null;
        this.allSubScreens = initSubScreenObjects();
        this.allGameScreens = initGameScreenObjects();
        this.playerNames = [];
        this.screenSequence = [this.allGameScreens.splash, this.allGameScreens.bet];
        this.dealer = null;
        this.deckArray = [];
        this.deckPointsArray = [];
    }

    // ======= ======= ======= Player Object ======= ======= =======

    function Player(playerName) {
        console.log('Player');
        this.name = null;
        this.bet1 = 0;
        this.bet2 = 0;
        this.bet3 = 0;
        this.bank = 0;
        this.score = 0;
        this.hand = null;
    }

    // ======= ======= ======= init ======= ======= =======
    var game = new Game();

    // var display = new Display("gameDisplay");
    //
    // var player1 = new Player(null, 0);
    // var player2 = new Player(null, 1);
    // var player3 = new Player(null, 2);
    // var dealer = new Player("dealer", 3);
    //
    // game.playerObjectsArray = [player1, player2, player3];
    // game.dealer = dealer;
}
