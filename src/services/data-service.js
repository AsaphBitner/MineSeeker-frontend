

export const dataService = {
    buildNewBoard,
    renderBoard,
    makeId,
}





function buildNewBoard(size) {
    let board = [];
    for (var ii = 0; ii < size; ii++) {
        board.push([]);
        for (var jj = 0; jj < size; jj++)
            board[ii][jj] = { _id: makeId(), mineInCell: false, flagInCell: false, cellClicked: false, minesAround: -1, testText: 'A!!!', };
    }
    return board;
}

//             onclick="cellClicked(this,${i},${j})">${board[i][j]}</td>`
// oncontextmenu="rightClick(); return false" onclick="leftClick()

function renderBoard(board) {
    var elBoard = document.querySelector('.game_board');
    elBoard.innerHTML = '<table border="1" class= "game_board"';
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            strHTML += `<td class="unclicked" id="${i}-${j}" oncontextmenu="rightClick(${i}, ${j}); return false" onclick="leftClick(${i}, ${j})"><td/>`;
        }
        strHTML += '</tr>'
    };
    elBoard.innerHTML += strHTML;
    elBoard.innerHTML += '</table>';
}


function makeId(length = 7) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var ii = 0; ii < length; ii++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

