



export const instructions = {
    headline: <h2>Hi! Welcome to ${<span className="strike-through">MineSweeper</span>} MineSeeker!</h2>,
    
    p1: <p>
    This game is pretty similar to the old windows game Minesweeper, but with a few small differences.
    </p>,
    
    p2: <p>
    Press on any square to start the game -- don't worry, the first square will never be a mine!
    </p>,

    p3: <p> 
    Once the timer starts, the game is on! Each square you open will be blank, have a number inside, or have a mine inside. The number inside each square indicates the number of mines hidden in the 8 squares directly surrounding it -- the maximum being 8, the minimum 0. If a square has no mines around it, it will be blank. When you click on a square with 0 mines around it, it will open and all of those squares around it will open up as well.
    </p>,

    p4: <p>
    There are three difficulty buttons -- easy, medium, and hard. they look like this:
    </p>,

    p5: <p>
    If you press them, your current game will end and you'll get a new board, tailored to the difficulty level you selected. If you want to start a new game at your current difficulty, you can also press the Smiley icon at the top of the gameboard:
    </p>,

    p6: <p>
    once you land on a mine, a mine icon will appear on the square -- which will remain closed -- and you'll lose one life. If no action is taken, the mine icon will disappear after 10 seconds. Your extra lives counter looks like this:
    </p>,

    p7:<p>
    It always starts at 3; once you reach zero extra lives, the heart icon will change to a broken heart and any click on a mine will result in a game over.
    </p>,

    p8:<p>
    the numbers on open squares give you a hint at nearby mines; if you think a square has a mine in it, you can mark it with a flag by right-clicking it (for mobile users -- a long-press on the square will do the same). Your flag counter looks like this:
    </p>,

    p9:<p>
    it will display the number of available flags -- those that haven't been used yet. At the start of the game, the number of available flags will always be the same as the total number of mines on the board.</p>,
    
    p10:<p>
    Remember -- you can only start planting flags after the game has started! (That is, after you've made your first click)
    </p>,

    p11: <p>
    the goal is to mark every mine with a flag. If you've run out of flags but the game is still going, it means you've probably planted one or more flags in a safe spot -- a square without a mine. No worries -- you can simply click on any square with a flag to take it out; you're available flag count will rise accordingly.
    </p>,

    p12: <p>
    If you have zero extra lives and click on a square that holds a mine, you'll reach a game over scenario. The board will open to reveal the contents of all closed squares; the square that had your mine in it will show an explosion icon, while all unflagged mines on the board will also be revealed.
    </p>,

    p13: <p>
    if you planted flags during the game, their backgrounds will indicate your accuracy: a green background will indicate squares that contained a mine and were accurately neutralized, while a blue square will indicate a miss -- a flag that was planted on a square that didn’t actually contain a mine.
    </p>,
    
    p14: <p>
    A game over scenario should look something like this:  
    </p>,

    p15: <p>
    But let’s be positive: if you win -- meaning you've planted all of your flags on mines, and left no mines unflagged -- the board and its surroundings should look something like this:
    </p>,

    p16: <p><br /><br /><br /><br /><br />By the way, if 3 extra lives just doesn't feel like enough... tell me, have you heard of the <a href="https://en.wikipedia.org/wiki/Konami_Code" target="_blank">Konami Code?</a> 
    </p>       
}









// Hi! Welcome to ${<span className="strikeThrough">MineSweeper</span>} MineSeeker! 

// It's pretty similar to the old windows game, but with a few small differences.
// press on any square to start the game -- don't worry, the first square will never be a mine! 
//once the timer starts, the game is on! each square you open will either be  blank, have a number inside or a mine. The number indicates the number of mines in the squares directly surrounding yours (the maximum being 8, the minimum 0; if a square has no mines around it it will be blank, and all of the closed squares around it will open up as well).
//there are three difficulty buttons -- easy, medium, and hard. they look like this:
//If you press them, your current game will end and you'll get a new board, tailored to the difficulty level you selected. If you want to start a new game at your current difficulty, you can also press the Smiley icon at the top of the gameboard:
//once you land on a mine, a mine icon will appear on the square -- which will remain closed -- and you'll lose one life. if no action is taken, the mine icon will disappear after 10 seconds. Your extra lives counter looks like this:
// It always starts at 3; once you reach zero extra lives, the heart icon will change to a broken heart and any click on a mine will result in a game over.
// the numbers on open squares give you a hint at nearby mines; if you think a square has a mine in it, you can mark it with a flag by right-clicking it (for mobile users -- a long-press on the square will do the same). Your flag counter looks like this:
// it will display the number of available flags -- those that haven't been used yet. At the start of the game, the number of available flags will always be the same as the total number of mines on the board. Remember -- you can only start plantin flags after the game has started! (that is, after the first click)
// the goal is to mark every mine with a flag. If you've run out of flags but the game is still going, it means you've probably planted one or more flags in a safe spot -- a square without a mine. No worries -- you can simply click on any square with a flag to take it out; you're available flag count will rise accordingly.
// If you have zero extra lives and click on a square that holds a mine, you'll reach a game over scenario. The board will open to reveal the contents of all closed squares; the square that had your mine in it will show an explosion icon, while all other bombs on the board will also be revealed;
// if you planted flags during the game, their backgrounds will indicate your accuracy: a green background will show for squares that contained a mine and were neutralized, while a blue square will indicate a miss -- a flag that was planted on a mineless squre.
// A game over scenario should look something like this:  
//
//If you win -- meaning you've planted all of your flags on mines, and left no mines unflagged -- the board and its surroundings should look something like this:
//
// By the way, if 3 extra lives just doesn't feel like enough... tell me, have you heard of the Konami Code? 
//
//https://en.wikipedia.org/wiki/Konami_Code
//
//
//
//


 