
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
