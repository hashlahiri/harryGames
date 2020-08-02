//@author Chanakya Lahiri
//P5 JS libraries used
//the actual board
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  //all the players initialized
  let players = ['X', 'O'];
  
  let cPlayer;
  let available = [];
  
  //canvas created
  function setup() {
    createCanvas(400, 400);
    frameRate(30);
    cPlayer = floor(random(players.length));
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        available.push([i, j]);
      }
      //autotasked AI
    }
  }
  
  function equals3(a, b, c) {
    return a == b && b == c && a != ''; //return if condition true
  }
  
  function checkWinner() {
    let winner = null;
  
    // horizontal simulations
    for (let i = 0; i < 3; i++) {
      if (equals3(board[i][0], board[i][1], board[i][2])) {
        winner = board[i][0];
      }
    }
  
    // Vertical simulations
    for (let i = 0; i < 3; i++) {
      if (equals3(board[0][i], board[1][i], board[2][i])) {
        winner = board[0][i];
      }
    }
  
    // Diagonal interactions and possibilities
    if (equals3(board[0][0], board[1][1], board[2][2])) {
      winner = board[0][0];
    }
    if (equals3(board[2][0], board[1][1], board[0][2])) {
      winner = board[2][0];
    }
  
    if (winner == null && available.length == 0) {
      return 'Its a Tie';
    } else {
      return winner;
    }
  }
  
  function nextTurn() {
    let index = floor(random(available.length));
    let spot = available.splice(index, 1)[0];
    //check if available and fill algorithm
    let i = spot[0];
    let j = spot[1];
    board[i][j] = players[cPlayer];
    cPlayer = (cPlayer + 1) % players.length;
    //checking for length
  }
  
  function draw() {
    background(255);
    let w = width / 3;
    let h = height / 3;
    strokeWeight(4);
  
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);
  
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        let x = w * i + w / 2;
        let y = h * j + h / 2;
        let spot = board[i][j];
        textSize(32);
        let r = w / 4;
        if (spot == players[1]) {
          noFill();
          ellipse(x, y, r * 2);
        } else if (spot == players[0]) {
          line(x - r, y - r, x + r, y + r);
          line(x + r, y - r, x - r, y + r);
        }
      }
    }
  
    let result = checkWinner();
    if (result != null) {
      noLoop();
      let resultP = createP('');
      resultP.style('font-size', '32pt');
      if (result == 'Its a Tie') {
        resultP.html('Its a Tie!!!!');
      } else {
        resultP.html(`${result} totally wins!`);
      }
    } else {
      nextTurn();
    }
  }