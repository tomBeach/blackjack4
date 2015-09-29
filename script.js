$(document).ready(function(){
    console.log('jQuery loaded');
    console.log('document ready');

    var bootstrap3_enabled = (typeof $().emulateTransitionEnd == 'function');
    console.log("bootstrap3_enabled: " + bootstrap3_enabled);



    // ======= ======= ======= Display ======= ======= =======
    // ======= ======= ======= Display ======= ======= =======
    // ======= ======= ======= Display ======= ======= =======



    function Display(whichDisplay) {
        console.log('Display');
        this.name = whichDisplay;
        this.tableCellsArray = null;
        this.gridRegionsObject = [
            { name: "playerBorderH_1", iRow: 2, iCol: 1, cGroupW: 6, cGroupH: 1 },
            { name: "playerBorderV_1", iRow: 2, iCol: 6, cGroupW: 1, cGroupH: 3 },
            { name: "playerBorderH_2", iRow: 5, iCol: 2, cGroupW: 6, cGroupH: 1 },
            { name: "playerBorderV_2", iRow: 5, iCol: 7, cGroupW: 1, cGroupH: 3 },
            { name: "playerBorderH_3", iRow: 8, iCol: 3, cGroupW: 6, cGroupH: 1 },
            { name: "playerBorderV_3", iRow: 8, iCol: 8, cGroupW: 1, cGroupH: 3 },
            { name: "dealerBorderH_D", iRow: 3, iCol: 11, cGroupW: 6, cGroupH: 1 },
            { name: "dealerBorderV_D", iRow: 1, iCol: 11, cGroupW: 1, cGroupH: 3 },
            { name: "playerName_1", iRow: 2, iCol: 3, cGroupW: 3, cGroupH: 1 },
            { name: "playerName_2", iRow: 5, iCol: 4, cGroupW: 3, cGroupH: 1 },
            { name: "playerName_3", iRow: 8, iCol: 5, cGroupW: 3, cGroupH: 1 },
            { name: "bankChips_1", iRow: 3, iCol: 7, cGroupW: 3, cGroupH: 2 },
            { name: "bankChips_2", iRow: 6, iCol: 8, cGroupW: 3, cGroupH: 2 },
            { name: "bankChips_3", iRow: 9, iCol: 9, cGroupW: 3, cGroupH: 2 },
            { name: "gameTable", iRow: 5, iCol: 12, cGroupW: 3, cGroupH: 3 },
        ]
    }
    var displayObject = new Display("gameDisplay");

    // ======= ======= ======= modifyGridRegion ======= ======= =======
    Display.prototype.modifyGridRegion = function(whichRegion, whichMerge) {
        console.log("modifyGridRegion");
        var self = this;
        for (var i = 0; i < this.gridRegionsObject.length; i++) {
            nextRegion = this.gridRegionsObject[i];
            nextRegionName = this.gridRegionsObject[i].name;
            if (nextRegionName == whichRegion) {
                this.selectTableCells(nextRegion.iRow, nextRegion.iCol, nextRegion.cGroupW, nextRegion.cGroupH);
                if (whichMerge == "merge") {
                    this.mergeRegion(nextRegion);
                } else {
                    this.unMergeRegion(nextRegion);
                }
                break;
            }
        }
    }

    // ======= ======= ======= unMergeRegion ======= ======= =======
    Display.prototype.unMergeRegion = function(whichRegion) {
        console.log("unMergeRegion");
        var indexCell = this.tableCellsArray[whichRegion.iRow][whichRegion.iCol];
        $(indexCell).attr("colSpan", 1);
        $(indexCell).attr("rowSpan", 1);
        $(indexCell).removeClass("indexCell");
        for (var j = 0; j < whichRegion.cGroupH; j++) {
            for (var i = 0; i < whichRegion.cGroupW; i++) {
                if (!((i == 0) && (j == 0))) {
                    var newCell = document.createElement("td");
                    $(indexCell).after(newCell);
                    $(newCell).addClass("cell");
                }
            }
        }
    }

    // ======= ======= ======= mergeRegion ======= ======= =======
    Display.prototype.mergeRegion = function(whichRegion) {
        console.log("mergeRegion");
        var indexCell = this.tableCellsArray[whichRegion.iRow][whichRegion.iCol];
        for (var j = 0; j < whichRegion.cGroupH; j++) {
            for (var i = 0; i < whichRegion.cGroupW; i++) {
                nextCell = this.tableCellsArray[whichRegion.iRow + j][whichRegion.iCol + i];
                if (!((i == 0) && (j == 0))) {
                    $(nextCell).remove();
                }
            }
        }
        $(indexCell).attr("colSpan", whichRegion.cGroupW);
        $(indexCell).attr("rowSpan", whichRegion.cGroupH);
        $(indexCell).addClass("indexCell");
    }

    // ======= ======= ======= initGridRegions ======= ======= =======
    Display.prototype.initGridRegions = function() {
        console.log("initGridRegions");
        for (var i = 0; i < this.gridRegionsObject.length; i++) {
            nextRegion = this.gridRegionsObject[i];
            this.selectTableCells(nextRegion.iRow, nextRegion.iCol, nextRegion.cGroupW, nextRegion.cGroupH);
        }
    }

    // ======= ======= ======= selectTableCells ======= ======= =======
    Display.prototype.selectTableCells = function(row, col, w, h) {
        console.log("selectTableCells");
        console.log("  row/col/w/h: " + row + "/" + col + " " + w + "/" + h);

        var indexTableCell = this.tableCellsArray[row][col];
        var rowCellsArray = [];
        var colCellsArray = [];
        for (var j = 0; j < h; j++) {
            for (var i = 0; i < w; i++) {
                nextCell = this.tableCellsArray[row + j][col + i];
                $(nextCell).addClass("deleteCell");
            }
        }
        // $(indexTableCell).removeClass("deleteCell").addClass("indexCell");
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
    displayObject.initGridElements();
    // displayObject.initGridRegions();
    displayObject.modifyGridRegion("playerName_1", "merge");
    displayObject.modifyGridRegion("playerName_2", "merge");
    displayObject.modifyGridRegion("playerName_3", "merge");
    displayObject.modifyGridRegion("bankChips_1", "merge");
    displayObject.modifyGridRegion("bankChips_2", "merge");
    displayObject.modifyGridRegion("bankChips_3", "merge");
    displayObject.modifyGridRegion("playerName_1", "unmerge");

});
