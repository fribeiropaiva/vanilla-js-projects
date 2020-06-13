document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      name: 'Chief Wiggum',
      img: 'images/chief-wiggum.png'
    },
    {
      name: 'Duff Man',
      img: 'images/duff-man.png'
    },
    {
      name: 'Family Christmas',
      img: 'images/family-christmas.jpg'
    },
    {
      name: 'Krusty',
      img: 'images/krusty.png'
    },
    {
      name: 'Mr. Burns',
      img: 'images/mr-burns.png'
    },
    {
      name: 'Homer Thinking',
      img: 'images/homer-thinking.png'
    },
    {
      name: 'Chief Wiggum',
      img: 'images/chief-wiggum.png'
    },
    {
      name: 'Duff Man',
      img: 'images/duff-man.png'
    },
    {
      name: 'Family Christmas',
      img: 'images/family-christmas.jpg'
    },
    {
      name: 'Krusty',
      img: 'images/krusty.png'
    },
    {
      name: 'Mr. Burns',
      img: 'images/mr-burns.png'
    },
    {
      name: 'Homer Thinking',
      img: 'images/homer-thinking.png'
    },
  ];

  const gameGrid = document.querySelector('.game-grid');
  let newGameBtn = document.querySelector('.new-game-button');
  let resultContainer = document.querySelector('#result');
  let score = 0;
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  function createBoard() {
    newGameBtn.disabled = true;
    if (gameGrid.firstElementChild) {
      for (let i = 0; i < cardArray.length; i++) {
        gameGrid.removeChild(gameGrid.firstElementChild);
      }
    }
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/homer-scream.jpg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      gameGrid.appendChild(card);
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId]);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];


    console.log(cardsChosen)
    console.log(cardsChosen[0] === cardsChosen[1])

    if (cardsChosen[0].name === cardsChosen[1].name) {
      cards[optionOneId].setAttribute('src', 'images/empty-space.jpg');
      cards[optionTwoId].setAttribute('src', 'images/empty-space.jpg');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
      score++;
      resultContainer.textContent = score;
    } else {
      cards[optionOneId].setAttribute('src', 'images/homer-scream.jpg');
      cards[optionTwoId].setAttribute('src', 'images/homer-scream.jpg');
    }

    cardsChosen = [];
    cardsChosenId = [];

    checkfIfGameIsOver();
  }

  function checkfIfGameIsOver() {
    if (cardsWon.length === (cardArray.length/2)) {
      resultContainer.textContent = "Congratulations! You got them all!";
      enableNewGame();
    }
  }

  function enableNewGame() {
    newGameBtn.disabled = false;
    newGameBtn.addEventListener('click', () => {
      resultContainer.textContent = "";
      createBoard();
    });
  }

  createBoard();
});
