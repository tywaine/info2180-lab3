document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let player = 'X';
    const board = Array(9).fill(null);

    squares.forEach((square, i) => {
        square.classList.add('square');

        square.addEventListener('click', function() {
            if (!board[i]) {
                board[i] = player;
                square.textContent = player;
                square.classList.add(player);

                player = (player === 'X') ? 'O' : 'X';
            }
        });

        square.addEventListener('mouseover', function (){
            if(!board[i]){
                square.classList.add('hover');
                square.classList.add(player);
            }
        })

        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');

            if(!board){
                square.classList.remove(player);
            }

        })

    });
});