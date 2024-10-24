document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
    let player = 'X';
    const board = Array(9).fill(null);
    let isActive = true

    squares.forEach((square, i) => {
        square.classList.add('square');

        square.addEventListener('click', function() {
            if (!board[i] && isActive) {
                board[i] = player;
                square.textContent = player;
                square.classList.add(player);

                if(isWinnerAvailable(board, player)){
                    status.textContent = "Congratulations! " + player + " is the Winner!";
                    status.classList.add('you-won');
                    isActive = false;
                    return;
                }

                if(isDraw(board)){
                    status.textContent = "Game was a Draw!";
                    isActive = false;
                    return;
                }

                player = (player === 'X') ? 'O' : 'X';
            }
        });

        square.addEventListener('mouseover', function (){
            if(!board[i] && isActive){
                square.classList.add('hover');
                square.classList.add(player);
            }
        })

        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');

            if(!board[i]){
                square.classList.remove(player);
            }
        })
    });

    const newGameBtn = document.querySelector('.btn');

    newGameBtn.addEventListener('click', function(){
        for(let i = 0; i < board.length; i++){
            board[i] = null
        }

        squares.forEach(square => {
            square.textContent = '';
        });

        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove('you-won');

        player = 'X'
        isActive = true;
    });
});


function isWinnerAvailable(board, player){
    for(let i = 0; i < 9; i+=3){
        if(board[i] === player && board[i + 1] === player && board[i + 2] === player){
            return true;
        }
    }

    for(let i = 0; i < 3; i++){
        if(board[i] === player && board[i + 3] === player && board[i + 6] === player){
            return true;
        }
    }

    return (board[0] === player && board[4] === player && board[8] === player) ||
        (board[2] === player && board[4] === player && board[6] === player);
}


function isDraw(board){
    for(let i = 0; i < board.length; i++){
        if(board[i] === null){
            return false;
        }
    }

    return true;
}