

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
        active: ["borderH", "borderV", "pName", "pScore", "pBank"],
        placeBets: ["borderH", "borderV", "pName", "pScore", "pBank", "pBet", "pBet_1s", "pBet_5s", "pBet_10s", "betOnesSlider", "betFivesSlider", "betTensSlider"],
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
                    console.log("  totalColOffset1: " + totalColOffset);
                }
                if (row > 0) {
                    totalColOffset = temp_iC;
                    display.toggleRowspans(whichItem, offsetR, offsetC, "on")
                }

                // remove all but index cell in merge area
                if ((row == 0) && (col == 0)) {
                    indexCell = $(nextRowObject).children()[temp_iC];
                } else {
                    console.log("  totalColOffset2: " + totalColOffset);
                    nextCell = $(nextRowObject).children()[totalColOffset];
                    console.log("  $(nextCell)...remove): " + $(nextCell).attr('id'));
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
