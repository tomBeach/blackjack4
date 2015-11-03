
    // ======= ======= ======= processGridCells ======= ======= =======
    Display.prototype.processGridCells = function(whichItem, offsetR, offsetC, whichProcess) {
        console.log("processGridCells");
        console.log("  ======= ======= ======= item: " + whichItem.name);
        console.log("  offsetC: " + offsetC);

        if (!offsetR) { offsetR = 0 };
        if (!offsetC) { offsetC = 0 };
        var indexRow, indexCell, indexRowObject, rowspanSpanObject, colspans, rowspans;

        // == record rowspan elements
        if (whichProcess == "merge") {
            toggleRowspans(whichItem, offsetR, offsetC, "on");
        } else if (whichProcess == "unmerge") {
            toggleRowspans(whichItem, offsetR, offsetC, "off");
        }

        // == get index cell location (check row/colspans in index row)
        var tableRows = $("tr");
        indexRow = whichItem.iR + offsetR;
        indexCol = whichItem.iC + offsetC;
        indexRowObject = tableRows[indexRow];
        colspans = this.checkColumnSpans(indexRowObject, indexCol);
        rowspans = this.checkRowSpans(indexRow, indexCol);
        totalColOffset = indexCol - colspans - rowspans;
        indexCell = $(indexRowObject).children()[totalColOffset];

        // == record rowspan elements
        if (whichProcess == "merge") {
            $(indexCell).remove();
        }

        // == remove cells from merge area (check row/colspans in each row)
        for (var row = 0; row < whichItem.iH; row++) {
            nextRowObject = tableRows[indexRow + row];
            nextRow = indexRow + row;
            colspans = this.checkColumnSpans(nextRowObject, indexCol);
            rowspans = this.checkRowSpans(nextRow, indexCol);

            if (whichProcess == "merge") {
                for (var col = 0; col < whichItem.iW; col++) {
                    nextCell = $(nextRowObject).children()[totalColOffset + col];

                    // == remove all but index cell in merge area
                    if (!((row == 0) && (col == 0))) {
                        $(nextCell).remove();
                    }
                }
            } else if (whichProcess == "unmerge")  {
                indexRowCell = $(nextRowObject).children()[totalColOffset - 1];
                for (var col = 0; col < whichItem.iW; col++) {
                    var newCell = document.createElement("td");
                    $(indexRowCell).after(newCell);
                    $(newCell).addClass("cell");
                    $(newCell).attr("id", (indexRow + row) + "-" + (indexCol + col));
                }
            } else if (whichProcess == "select") {
                for (var col = 0; col < whichItem.iW; col++) {
                    nextCell = $(nextRowObject).children()[totalColOffset + col];
                    $(nextCell).addClass(whichItem.class);
                    if ((row == 0) && (col == 0)) {
                        $(nextCell).attr("id", whichItem.name);
                        indexCell = $(nextRowObject).children()[totalColOffset];
                    }
                    $(nextCell).attr("id", (indexRow + row) + "-" + (indexCol + col));
                }
            } else if (whichProcess == "deselect") {
                for (var col = 0; col < whichItem.iW; col++) {
                    nextCell = $(nextRowObject).children()[totalColOffset + col];
                    $(nextCell).removeClass(whichItem.class);
                    $(nextCell).addClass("cell");
                    $(nextCell).text("");
                    if ((row == 0) && (col == 0)) {
                        // $(nextCell).attr("id", whichItem.name);
                        indexCell = $(nextRowObject).children()[totalColOffset];
                        indexCell.empty();
                    }
                    $(nextCell).attr("id", (indexRow + row) + "-" + (indexCol + col));
                }
            }
        }

        // == set row/colspans on index cell to fill space
        if (whichProcess == "merge") {
            $(indexCell).attr("colSpan", whichItem.iW);
            $(indexCell).attr("rowSpan", whichItem.iH);
            $(indexCell).addClass(whichItem.class);
            if (whichItem.type != "input") {
                $(indexCell).attr("id", whichItem.name);
            }
        }
        return indexCell;
    }

    // ======= ======= ======= toggleRowspans ======= ======= =======
    Display.prototype.toggleRowspans = function(whichItem, offsetR, offsetC, onOff) {
        console.log("toggleRowspans");
        console.log("  ======= ======= ======= item: " + whichItem.name);
        console.log("  offsetC: " + offsetC);

        // == record rowspan elements
        if (whichItem.iH > 1) {
            for (row = 0; row < whichItem.iH; row++) {
                for (col = 0; col < whichItem.iW; col++) {
                    if (row != 0) {
                        tableRow = whichItem.iR + offsetR + row;
                        tableCol = whichItem.iC + offsetC + col;
                        rowspanSpanObject = this.tableRowspansArray[tableRow][tableCol];
                        if (onOff == "on") {
                            rowspanSpanObject.rspan = true;
                            console.log("  rowspan SET: " + tableRow + "/" +  tableCol);
                        } else {
                            rowspanSpanObject.rspan = false;
                            console.log("  rowspan CLEARED: " + tableRow + "/" +  tableCol);
                        }
                    }
                }
            }
        }
    }
