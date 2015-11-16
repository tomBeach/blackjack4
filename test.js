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

    var player1_scr = new Screen(
        /* name:   */ "player1",
        /* type:   */ "player",
        /* bg:     */ [
            { player: 1, name: "borderH_1", type: "bg", iR: 1, iC: 0, iW: 6, iH: 1, merge: null, class: "pBorder-1" },
            { player: 1, name: "borderV_1", type: "bg", iR: 1, iC: 5, iW: 1, iH: 3, merge: null, class: "pBorder-1" }],
        /* btn:    */ [{ name: "hitMeBtn", callback: "hitMe", type: "btn", iR: 1, iC: 7, iW: 1, iH: 1, merge: null, class: "button", image: "hitMeBW.png", value: "hit me!" },
            { name: "holdMeBtn", callback: "holdMe", type: "btn", iR: 1, iC: 8, iW: 1, iH: 1, merge: null, class: "button", image: "holdMeBW.png", value: "hold" }],
        /* slider: */ [
            { name:"betOnesSlider_1", callback:"mngBets", type:"slider", iR:1, iC:6, iW:1, iH:1, merge:null, class:"ones", value:"$20", tooltipOver: "slide to bet $1", tooltipOut: ""  },
            { name:"betFivesSlider_1", callback:"mngBets", type:"slider", iR:2, iC:6, iW:1, iH:1, merge:null, class:"fives", value:"$30", tooltipOver: "slide to bet $5", tooltipOut: ""  },
            { name:"betTensSlider_1", callback:"mngBets", type:"slider", iR:3, iC:6, iW:1, iH:1, merge:null, class:"tens", value:"$50", tooltipOver: "slide to bet $10", tooltipOut: ""  }],
        /* text:   */ [
            { player: 1, name: "pName_1", type: "text", iR: 1, iC: 2, iW: 3, iH: 1, merge: "merge", class: "pBorder-1", value: null },
            { player: 1, name: "pScore_1", type: "text", iR: 2, iC: 5, iW: 1, iH: 1, merge: null, class: "pBorder-1", value: 0 },
            { player: 1, name: "pBank_1", type: "text", iR: 1, iC: 5, iW: 1, iH: 1, merge: null, class: "pBorder-1 bank", value: "100" },
            { player: 1, name: "pBet_1", type: "text", iR: 4, iC: 15, iW: 1, iH: 1, merge: null, class: "pBorder-1 bet", value: "0" },
            { name: "pBet_1s_1", type: "text", iR: 4, iC: 12, iW: 1, iH: 1, merge: null, class: "pBorder-1 table", value: "0" },
            { name: "pBet_5s_1", type: "text", iR: 4, iC: 13, iW: 1, iH: 1, merge: null, class: "pBorder-1 table", value: "0" },
            { name: "pBet_10s_1", type: "text", iR: 4, iC: 14, iW: 1, iH: 1, merge: null, class: "pBorder-1 table", value: "0" },
            { player: 1, name: "pCards_1", type: "text", iR: 2, iC: 4, iW: 1, iH: 2, merge: "merge", class: "card-1", value: null }],
        /* input:  */ null,
        /* image:  */ null);

    var player2_scr = new Screen();
    var player3_scr = new Screen();
    var dealer_scr = new Screen();
    var scoreboard_scr = new Screen();

    var splash = new Screen(
        /* name:   */ "splash",
        /* type:   */ "game",
        /* bg:     */ null,
        /* btn:    */ { name: "orbBtn", callback: "nextGameScreen", type: "btn", iR: 5, iC: 12, iW: 3, iH: 1, merge: "merge", class: "orbBtn", value: "START", tooltipOver: "start the game!", tooltipOut: "" },
        /* slider: */ null,
        /* text:   */ { name: "tooltips", type: "text", iR: 9, iC: 11, iW: 5, iH: 2, merge: "merge", class: "tooltips", value: "" },
        /* input:  */ null,
        /* image:  */ null,
        /* subScr: */ ["player", "scoreboard"]);

    var nameEnter = new Screen(
        /* name:   */ "nameEnter",
        /* type:   */ "game",
        /* bg:     */ null,
        /* btn:    */ { name: "enterBtn", callback: "saveNewPlayer", type: "btn", iR: 6, iC: 12, iW: 3, iH: 1, merge: "merge", class: "enterBtn", value: "ENTER", tooltipOver:  "click ENTER to save player", tooltipOut: "" },
        /* slider: */ null,
        /* text:   */ { name: "tooltips", type: "text", iR: 9, iC: 11, iW: 5, iH: 2, merge: "merge", class: "tooltips", value: "" },
        /* input:  */ { name: "playerName", type: "input", iR: 5, iC: 12, iW: 3, iH: 1, merge: "merge", class: "inputText", value: "playerName" },
        /* image:  */ null,
        /* subScr: */ ["player"]);

    var enterPlay = new Screen(
        /* name:   */ "enterPlay",
        /* type:   */ "game",
        /* bg:     */ null,
        /* btn:    */ [{ name: "enterBtn", callback: "saveNewPlayer", type: "btn", iR: 6, iC: 12, iW: 3, iH: 1, merge: "merge", class: "enterBtn", value: "ENTER", tooltipOver:  "click ENTER to save player", tooltipOut: "" }, { name: "startBtn", callback: "startGame", type: "btn", iR: 7, iC: 12, iW: 3, iH: 1, merge: "merge", class: "startBtn", value: "START", tooltipOver: "start game", tooltipOut: "click DEAL to deal cards" }],
        /* slider: */ null,
        /* text:   */ { name: "tooltips", type: "text", iR: 9, iC: 11, iW: 5, iH: 2, merge: "merge", class: "tooltips", value: "" },
        /* input:  */ { name: "playerName", type: "input", iR: 5, iC: 12, iW: 3, iH: 1, merge: "merge", class: "inputText", value: "playerName" },
        /* image:  */ null,
        /* subScr: */ ["player", "scoreboard"]);



    // ======= ======= ======= ======= ======= PLAYERS ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= PLAYERS ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= PLAYERS ======= ======= ======= ======= =======



    function Player(id, name) {
        console.log('Player');
        this.id = id;
        this.name = name;
        this.state = "active";
        this.hand = null;
        this.score = 0;
        this.onesBet = 0;
        this.fivesBet = 0;
        this.tensBet = 0;
        this.onesBank = 20;
        this.fivesBank = 30;
        this.tensBank = 50;
    }



    // ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======
    // ======= ======= ======= ======= ======= DISPLAY ======= ======= ======= ======= =======



    function Display(whichDisplay) {
        console.log('Display');
        this.name = whichDisplay;
        this.rowSpansArray = null;
        this.inactive = ["borderH_1", "borderV_1", "pName_1", "pScore_1", "pBank_1"];
        this.active = ["borderH_1", "borderV_1", "pName_1", "pScore_1", "pBank_1", "pCards_1"];
        this.placeBets = ["borderH_1", "borderV_1", "pName_1", "pScore_1", "pBank_1", "pCards_1", "pBet_1", "pBet_1s_1", "pBet_5s_1", "pBet_10s_1", "betOnesSlider_1", "betFivesSlider_1", "betTensSlider_1"];
        this.hitMeHoldMe = ["borderH_1", "borderV_1", "pName_1", "pScore_1", "pBank_1", "pCards_1", "pBet_1", "pBet_1s_1", "pBet_5s_1", "pBet_10s_1", "hitMeBtn", "holdMeBtn"];
        this.turnOver = ["borderH_1", "borderV_1", "pName_1", "pScore_1", "pBank_1", "pCards_1"];
        this.handOver = ["borderH_1", "borderV_1", "pName_1", "pScore_1", "pBank_1"];
    }

    // ======= ======= ======= getNextSubscreen ======= ======= =======
    Display.prototype.getNextSubscreen = function() {
        console.log("getNextSubscreen");
    }

    // ======= ======= ======= getNextScreen ======= ======= =======
    Display.prototype.getNextScreen = function() {
        console.log("getNextScreen");

        // identify where we are in the game (prev screen/next screen/selected screen)
        // use current screen name to identify current screen index
        // increment screen index to get next screen object

        var prevScreen, nextScreen;

        // == game start initialize first screen ("splash")
        if (game.currentScreen == null) {
            game.currentScreen = splash;
            prevScreen = null;
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

        // == identify items to remove, add or keep unchanged
        var changeItemsArray = this.processPrevNextItems(prevScreen, nextScreen);
        var removeItemsArray = changeItemsArray[0];     // delete these items
        var addItemsArray = changeItemsArray[1];        // add these items

        // == send screen data to screen building functions
        display.processScreenItems(removeItemsArray, addItemsArray);
    }

    // ======= ======= ======= processPrevNextItems ======= ======= =======
    Display.prototype.processPrevNextItems = function(prevScreen, nextScreen) {
        console.log("processPrevNextItems");

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

    // ======= ======= ======= processScreenItems ======= ======= =======
    Display.prototype.processScreenItems = function(removeItemsArray, addItemsArray) {
        console.log("processScreenItems");

        var nextItem, nextType, indexCell, newTextInput;

        // == remove prev items/add next items
        if (removeItemsArray) {
            for (var j = 0; j < removeItemsArray.length; j++) {
                nextItem = removeItemsArray[j];
                nextType = nextItem.type;
                indexCell = display.unModifyGridRegion(nextItem);
                if ((nextType == "btn") || (nextType == "slider")) {
                    display.deActivateNextItem(nextItem, indexCell);
                }
            }
        }
        for (var j = 0; j < addItemsArray.length; j++) {
            nextItem = addItemsArray[j];
            nextType = nextItem.type;
            indexCell = display.modifyGridRegion(nextItem);
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

    // ======= ======= ======= modifyGridRegion ======= ======= =======
    Display.prototype.modifyGridRegion = function(whichItem, offsetR, offsetC) {
        console.log("modifyGridRegion: " + whichItem.name);

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
            totalSpanOffset = nextCol - colspans - rowspans;

            if (regionType == "merge") {
                for (var col = 0; col < whichItem.iW; col++) {
                    if (((row == 0) && (col == 1))) {
                        totalColOffset = totalSpanOffset + col;
                    }
                    if (row > 0) {
                        totalColOffset = totalSpanOffset;
                    }

                    // remove all but index cell in merge area
                    if ((row == 0) && (col == 0)) {
                        indexCell = $(nextRowObject).children()[totalSpanOffset];
                        console.log("  $(indexCell).attr('id'): " + $(indexCell).attr('id'));
                    } else {
                        nextCell = $(nextRowObject).children()[totalColOffset];
                        $(nextCell).remove();
                    }

                }

                // == set row/colspans on index cell to fill space
                $(indexCell).attr("colSpan", whichItem.iW);
                $(indexCell).attr("rowSpan", whichItem.iH);
                $(indexCell).addClass(whichItem.class);
                if (whichItem.type != "input") {
                    $(indexCell).attr("id", whichItem.name);
                }

                // == modify item class via iem class parameters
            } else {
                for (var col = 0; col < whichItem.iW; col++) {
                    nextCell = $(nextRowObject).children()[totalSpanOffset + col];
                    $(nextCell).removeClass();
                    $(nextCell).addClass(whichItem.class);
                    if ((row == 0) && (col == 0)) {
                        indexCell = $(nextRowObject).children()[totalSpanOffset];
                        $(indexCell).attr("id", whichItem.name);
                    } else {
                        $(nextCell).attr("id", (nextRow) + "-" + (nextCol + col));
                    }
                }
            }
        }
        display.toggleRowspans(whichItem, offsetR, offsetC, "on")
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
            totalSpanOffset = nextCol - colspans - rowspans;
            console.log("  totalSpanOffset: " + totalSpanOffset);

            if (regionType == "merge") {
                for (var col = 0; col < (whichItem.iW); col++) {
                    if ((row == 0) && (col == 0)) {
                        indexCell = $(nextRowObject).children()[totalSpanOffset];
                        $(indexCell).remove();
                        console.log("  $(indexCell).attr('id'): " + $(indexCell).attr('id'));
                    }
                    indexRowCell = $(nextRowObject).children()[totalSpanOffset - 1];
                    for (var col = 0; col < whichItem.iW; col++) {
                        var newCell = document.createElement("td");
                        $(indexRowCell).after(newCell);
                        $(newCell).addClass("cell");
                        $(newCell).attr("id", (nextRow) + "-" + (nextCol + col));
                    }
                }
            }
        }
        display.toggleRowspans(whichItem, offsetR, offsetC, "off")
    }

    // ======= ======= ======= deActivateNextItem ======= ======= =======
    Display.prototype.deActivateNextItem = function(whichItem, indexCell) {
        console.log("deActivateNextItem: " + whichItem.name);
    }

    // ======= ======= ======= activateNextItem ======= ======= =======
    Display.prototype.activateNextItem = function(whichItem, indexCell) {
        console.log("activateNextItem: " + whichItem.name);

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
                    game.nextGameScreen();
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
        }
    }

    // ======= ======= ======= getTooltip ======= ======= =======
    Display.prototype.getTooltip = function(whichElement, overOut) {
        console.log("getTooltip");

        // $("#tooltips").text(nextTooltip);
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



    function Game(whichGame) {
        console.log('Game');
        this.name = whichGame;
        this.deckArray = [];
        this.deckPointsArray = [];
        this.currentPlayer = 0;
        this.currentScreen = null;
        this.currentSubscreen = null;
        this.playerNamesArray = [];
        this.playerObjectsArray = [player1, player2, player3, dealer];
        this.screenObjectsArray = [splash, nameEnter, enterPlay];
        this.subcreenObjectsArray = [player1_scr, player2_scr, player3_scr, dealer_scr, scoreboard_scr];
        this.playerStates = ["inactive", "active", "placeBets", "hitMeHoldMe", "turnOver", "handOver"]
        this.onesBet = 0;
        this.fivesBet = 0;
        this.tensBet = 0;
    }


    // ======= ======= ======= nextGameScreen ======= ======= =======
    Game.prototype.nextGameScreen = function() {
        console.log("nextGameScreen");
        display.getNextScreen();
    }

    // ======= ======= ======= saveNewPlayer ======= ======= =======
    Game.prototype.saveNewPlayer = function() {
        console.log("saveNewPlayer");

        playerName = $('#playerNameInput').val();
        if (playerName) {
            var playerCount = this.playerNamesArray.length;
            if (playerCount < 3) {
                newPlayer = this.playerObjectsArray[playerCount];
                this.playerNamesArray.push(newPlayer.name);
                var playerCount = this.playerNamesArray.length;
                display.makeSubscreen(playerCount);
                // this.updatePlayerNames(newPlayer, playerCount);
                $("#tooltips").text("Enter another name or press 'start'");
            }
            if (playerCount == 1) {
                this.nextGameScreen();
            }
            if (playerCount == 3) {
                // $("#tooltips").text("Max of 3 players.  Start game!");
                display.makeSubscreen(4);
                this.currentPlayer = game.playerObjectsArray[0];
                // this.updatePlayerNames(this.dealer, 4);
                this.nextGameScreen();
                $("#tooltips").text("click DEAL to deal cards");
            }
            $("#playerNameInput").val("");
        } else {
            $("#tooltips").text("Enter name or press 'start'");
        }
    }

    // ======= ======= ======= makeSubscreen ======= ======= =======
    Display.prototype.makeSubscreen = function(playerIndex) {
        console.log("makeSubscreen");

        // identify where we are in the game (prev screen/next screen/selected screen)
        // use current screen name to identify current screen index
        // increment screen index to get next screen object

        // create array of screen items
        var nextItemType, items, nextItem, nextItemName;
        var tempItemsNext = [];
        var tempNamesNext = [];
        nextScreen = game.subcreenObjectsArray[playerIndex - 1];
        itemTypesArray = ["bg", "btn", "slider", "text", "input", "image"];
        for (var i = 0; i < itemTypesArray.length; i++) {
            nextItemType = itemTypesArray[i];
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

        for (var j = 0; j < tempItemsNext.length; j++) {
            nextItem = tempItemsNext[j];
            nextType = nextItem.type;
            indexCell = display.modifyGridRegion(nextItem);
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
    display.getNextScreen();
    // display.getNextsubscreen();

}

    // game.gameScreens[currentScreen]
    // display.makeScreenRegions
    // display.activateButtons
    // display.activateSliders
