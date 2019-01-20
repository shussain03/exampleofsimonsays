document.addEventListener("DOMContentLoaded", function () {
  // start OOP code
  // === PSEUDOCODE ===
  // Click start
  // boxes will light up in a sequence of colors one by one
  // after the computer has finished, the user will then try to match the sequaence by clicking on the respective boxes
  // if the player gets the sequence right, the get a point and the next round will start with a new color added to the end of the sequence
  // if the player gets it wrong, they lose a life and get another go
  // if all 3 lives are lost, game over
  // GAME COMPONENTS
  // playerLives
  // playerScore
  // colors to choose from
  // somewhere to store the random color sequence
  // start button
  // boxes will need event listeners
  class SimonSays {
    constructor() {
      this.playerScore = 0;
      this.playerLives = 3;
      this.colors = ["red", "yellow", "blue", "green"];
      this.randomColors = [];
      this.playerColors = [];
      this.startBtn = document.getElementById('startBtn');
      this.boxes = document.getElementsByClassName("grid-item");
    }
    //randomColor generator
    randomColorGenerator() {
      for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * this.colors.length);
        this.randomColors.push(this.colors[randomNumber])
      }
    }

    flashColors() {
      for (let i = 0; i < this.randomColors.length; i++) {
        const box = document.getElementById(this.randomColors[i]);
        console.log(box);
        setTimeout(function () {
          box.style.background = box.id;
        }, 1000 * i);

        setTimeout(function () {
          box.style.background = "rgba(255, 255, 255, 0.8)"; // from CSS to reset to original bg color of box
        }, 1000 * i + 500);

      }
    }



    addListenersToBoxes() {
      for (let i = 0; i < this.boxes.length; i++) {
        const element = this.boxes[i];
        this.boxes[i].addEventListener('click', e => {
          console.log(e.target.id);
          this.playerColors.push(e.target.id);
          console.log(this.playerColors);
        });
      }
      if (this.boxes.playerColors.length === this.randomColors.length) {
        this.checkWin();
      }
    }
  }

  checkWin(){
    let counter = 0;
    this.playerColors.forEach((playerColor, index) => {
      console.log(playerColor);
      console.log(index);
      if (this.randomColors[index] === this.playerColors[index]) {
        counter++;
        console.log('matching colors');
      } else {
        console.log('colors dont match');
      }
    });
    if (counter === this.randomColors.length) {
      console.log("winner");
    }
  }

  const newGame = new SimonSays()
  newGame.startBtn.addEventListener("click", function (event) {

    newGame.randomColorGenerator();
    event.target.disabled = true;
    newGame.flashColors();
    console.log(newGame.randomColors);
  });

  //   newGame.randomColorGenerator()
  console.log(newGame.randomColors);
  console.log(newGame);

});//DOM CONTENTLOADED END