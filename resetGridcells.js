// ======= ======= ======= resetGridCells ======= ======= =======
Display.prototype.resetGridCells = function() {
    console.log("resetGridCells");

    var tableRows = $("tr");
    for (var row = 0; row < 12; row++){
        var addCells = 0;
        nextRow = $(tableRows)[row];
        cellCount = $(nextRow).children().length;
        for (var col = 0; col < cellCount; col++) {
            nextCell = $(nextRow).children()[col];
            rowspans = $(nextCell).attr('rowSpan');
            colspans = $(nextCell).attr('colSpan');
            // console.log("  R/C: " + row + " / " + col);
            if (rowspans > 1) {
                console.log("  rowspans cell " + row + "-" + col + ": " + rowspans);
                $(nextCell).empty();
                $(nextCell).removeClass();
                $(nextCell).addClass("indexCell");
                $(nextCell).attr('rowSpan', 1)
                $(nextCell).attr("id", row + "-" + col);
            }
            if (colspans > 1) {
                console.log("  colspans cell " + row + "-" + col + ": " + colspans);
                $(nextCell).empty();
                $(nextCell).removeClass();
                $(nextCell).addClass("indexCell");
                $(nextCell).attr('colSpan', 1)
                $(nextCell).attr("id", row + "-" + col);
                for (var newCellCol = 1; newCellCol < colspans; newCellCol++) {
                    var newCell = document.createElement("td");
                    $(nextCell).after(newCell);
                    $(newCell).addClass("testCell");
                    $(newCell).attr("id", row + "-" + (col + newCellCol));
                    console.log("  $(newCell).attr('id'): " + $(newCell).attr('id'));
                    console.log("  $(newCell).attr('class'): " + $(newCell).attr('class'));
                }
                col = col + (colspans - 1);
            } else {
                $(nextCell).empty();
                $(nextCell).removeClass();
                $(nextCell).addClass("cell");
                $(nextCell).attr('colSpan', 1)
                $(nextCell).attr("id", row + "-" + col);
            }
        }
        var tableRowsTest = $("tr");
        nextRowTest = $(tableRowsTest)[row];
        cellCountTest = $(nextRowTest).children().length;
        console.log("  ROW " + row + " -- cellCountTest: " + cellCountTest);
        if (cellCountTest < 18) {
            addCells = 18 - cellCountTest;
            console.log("  addCells: " + addCells);
        }
        if (addCells > 0) {
            indexCell = $(nextRowTest).children()[cellCountTest - 1];
            console.log("  $(indexCell).attr('id'): " + $(indexCell).attr('id'));
            for (var i = 0; i < addCells; i++) {
                console.log("  new cell: " + i);
                var newCell = document.createElement("td");
                $(indexCell).after(newCell);
                $(newCell).addClass("testCell");
                $(newCell).attr("id", row + "-" + (cellCountTest + i));
                console.log("  $(newCell).attr('id'): " + $(newCell).attr('id'));
                console.log("  $(newCell).attr('class'): " + $(newCell).attr('class'));
            }
        }
    }
}


// console.logs and special classes removed

// ======= ======= ======= resetGridCells ======= ======= =======
Display.prototype.resetGridCells = function() {
    console.log("resetGridCells");

    var tableRows = $("tr");
    for (var row = 0; row < 12; row++){
        var addCells = 0;
        nextRow = $(tableRows)[row];
        cellCount = $(nextRow).children().length;
        for (var col = 0; col < cellCount; col++) {
            nextCell = $(nextRow).children()[col];
            rowspans = $(nextCell).attr('rowSpan');
            colspans = $(nextCell).attr('colSpan');
            if (rowspans > 1) {
                $(nextCell).empty();
                $(nextCell).removeClass();
                $(nextCell).addClass("cell");
                $(nextCell).attr('rowSpan', 1)
                $(nextCell).attr("id", row + "-" + col);
            }
            if (colspans > 1) {
                $(nextCell).empty();
                $(nextCell).removeClass();
                $(nextCell).addClass("cell");
                $(nextCell).attr('colSpan', 1)
                $(nextCell).attr("id", row + "-" + col);
                for (var newCellCol = 1; newCellCol < colspans; newCellCol++) {
                    var newCell = document.createElement("td");
                    $(nextCell).after(newCell);
                    $(newCell).addClass("cell");
                    $(newCell).attr("id", row + "-" + (col + newCellCol));
                }
                col = col + (colspans - 1);
            } else {
                $(nextCell).empty();
                $(nextCell).removeClass();
                $(nextCell).addClass("cell");
                $(nextCell).attr('colSpan', 1)
                $(nextCell).attr("id", row + "-" + col);
            }
        }
        var tableRowsTest = $("tr");
        nextRowTest = $(tableRowsTest)[row];
        cellCountTest = $(nextRowTest).children().length;
        if (cellCountTest < 18) {
            addCells = 18 - cellCountTest;
        }
        if (addCells > 0) {
            indexCell = $(nextRowTest).children()[cellCountTest - 1];
            for (var i = 0; i < addCells; i++) {
                var newCell = document.createElement("td");
                $(indexCell).after(newCell);
                $(newCell).addClass("cell");
                $(newCell).attr("id", row + "-" + (cellCountTest + i));
            }
        }
    }
}
