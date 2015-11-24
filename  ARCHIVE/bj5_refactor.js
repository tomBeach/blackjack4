

// there are 1800 lines of code in blackjack...
// behold the refactor!!!

code

game
    players [player1, player2, player3, dealer]
        id,name,bet,bank,hand,score
    gameSequence [splash, nameEnter, enterPlay, placeBets, players, dealer, gameOver]
    playerSequence [inactive, active, placeBets, hitMeHoldMe, turnOver, handOver]

display
    screens [splash, nameEnter, enterPlay, placeBets, players, dealer, gameOver, player1, player2, player3, dealer, scordboard]
        {bg,btn,slider,text,input,image,subscreen}
    subscreens [player1, player2, player3, dealer, scordboard]
        {bg,btn,slider,text,input,image}
    items
        {type,id,name,value,class,text,tooltipOn,tooltipOff,RCWH}
    gameGrid
        [regions, rows, columns, rowspans, colspans, offsets, rowspanGrid]
            region
                methods: [merge/unmerge/modify/unModify/append/remove]

player
    {id,name,bet,bank,hand,score,subscreen}


initGame
    player1 = new Player()
    ...
    dealer = new Player()
    splash = new Screen() > {bg,btn,slider,text,input,image,subscreen}
    ...
    scordboard = new Screen() > {bg,btn,slider,text,input,image,subscreen}
    display = new Display()
    display.screens = [splash, nameEnter, enterPlay, placeBets, players, dealer, gameOver]
    display.subScreens = [player1, player2, player3, dealer, scordboard]
    game = new Game()
    game.allPlayers = [player1, player2, player3, dealer]
    game.gameSequence = ["splash", "nameEnter", "enterPlay", "placeBets", "players", "dealer", "gameOver"]
    game.playerSequence = ["inactive", "active", "placeBets", "hitMeHoldMe", "turnOver", "handOver"]
    game.currentPlayer
    game.currentScreen
    game.currentSubscreen




game > sequence > screen > item > tincvrtt
items { type,id,name,class,value,RCWH,tooltipOn,tooltipOff }
screens [splash, nameEnter, enterPlay, placeBets, players, dealer, gameOver, player1, player2, player3, dealer, scordboard]
screen [bg,btn,slider,text,input,image]
gameSequence [splash, nameEnter, enterPlay, placeBets, players, dealer, gameOver]
playerSequence [region, placeBets, hitMeHoldMe, turnOver, handOver]

display > screen > grid > region > [merge/unmerge/modify/unModify/append/remove]
grid > rowspans
