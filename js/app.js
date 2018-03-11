const game = document.getElementById("game-container");
//All picture's src attributes + alts in an Array.
const allPictures = ["<div class='unselected card'></div><img src='img/no1.svg' alt='Number 1'>", "<div class='unselected card'></div><img src='img/no2.svg' alt='Number 2'>", "<div class='unselected card'></div><img src='img/no3.svg' alt='Number 3'>",
"<div class='unselected card'></div><img src='img/no4.svg' alt='Number 4'>", "<div class='unselected card'></div><img src='img/no5.svg' alt='Number 5'>", "<div class='unselected card'></div><img src='img/no6.svg' alt='Number 6'>", "<div class='unselected card'></div><img src='img/no7.svg' alt='Number 7'>",
"<div class='unselected card'></div><img src='img/no8.svg' alt='Number 8'>", "<div class='unselected card'></div><img src='img/no9.svg' alt='Number 9'>", "<div class='unselected card'></div><img src='img/no10.svg' alt='Number 10'>", "<div class='unselected card'></div><img src='img/no11.svg' alt='Number 11'>",
"<div class='unselected card'></div><img src='img/no12.svg' alt='Number 12'>", "<div class='unselected card'></div><img src='img/no13.svg' alt='Number 13'>", "<div class='unselected card'></div><img src='img/no14.svg' alt='Number 14'>", "<div class='unselected card'></div><img src='img/no15.svg' alt='Number 15'>",
"<div class='unselected card'></div><img src='img/no16.svg' alt='Number 16'>"];
const allPicturesNum = allPictures.length;
let cardsInGame = 8; //how many different cards . CardsInGame x 2 x <div class="card> (Add randomized src + alt here, from chosenPictures Array)<div>
let chosenPictures = []; //Randomize pictures and add them in this Array.
let pairsFound = 0; //In the beginning no pairs found.
let stars = 3; //Max stars in the beginning.
let startTime; //Start time, time will start when first click will be made.
let endTime; //End time, time will stop when pairsFound === cards/2.
let moves = 0; //Move = 2 cards "turned".


//Lets select the pictures (1 each). After this these are added to game in randomized order (2 each). -> function createGame().
chosenPictures = generateRandomPictures(cardsInGame);

//Create a game based  on these pictures.
createGame(chosenPictures);

//Add evenlistener to parent. With event delegation, no need to assign every child their own listener.
game.addEventListener('click', chooseCard);

//Function for creating a game.
function createGame(chosenPictures) {

  //Lets add array that has pictures once to itself, a new array has been formed. Old arrays not affected.
  let allCards = chosenPictures.concat(chosenPictures);
  //We need all cards array's size for for-loop.
  let allCardsNum = allCards.length;

  //To prevent reflow and repaint, lets create a document fragment. https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
  const fragment = document.createDocumentFragment();

  //For loop that goes as many "rounds" as there is elements in the array.
  for(let i=0; i < allCardsNum; i++){

    //As the size of the array will change we have to check the size of the array, so we do not pick a index that is out of bounds.
    let allCardsSize = allCards.length;
    //DOTO: all use randomize function that use for all randomizing needs.
    //Lets randomize an index.
    index = Math.floor(Math.random()*allCardsSize);
    //Lets remove the element with previous index, save it variable element.
    let element = allCards.splice(index, 1);
    //Create a div that will be the card.
    let elementToBeAdded = document.createElement("div");
    //Add a card - class, with this should work even with IE 8.
    if (elementToBeAdded.classList) {
      elementToBeAdded.classList.add("card-container");
    } else {
        elementToBeAdded.className += ' ' + "card-container";
      }
    //Add img info inside div.
    elementToBeAdded.innerHTML = element[0][0];

    //Add card div with img info to document fragment.
    fragment.appendChild(elementToBeAdded);
  }

  //Add the document fragment that has all the divs with pic-info to the game-div.
  game.appendChild(fragment);
}

//Generate chosenPicture-array (includes picture once).
function generateRandomPictures(num) {

  //Empty array for randomized pic-info
  let picArr = [];
  let picture = "";
  //Lets copy info from the original pic array, so the original array is not modified.
  let arrayForRandomizing = allPictures.slice(0);
  let randomArraySize;

  //Repeat num times (cardsInGame)
  for(let i=0; i < num; i++){
    //As arrayForRandomizing-array's size changes, the size is checked before creating random index.
    randomArraySize = arrayForRandomizing.length;
    //Lets randomize index (for getting a pic-info from array, random is multiplied by no between 0 - randomArraySize,
    //floor will round the no down, random will create no between 0 and up to but not inclunding 1)
    let picIndex = Math.floor(Math.random()*randomArraySize);
    //Let's use the index to get pic-info from array, then the item in that index will be removed, so it it will not be used again in the game.
    picture = arrayForRandomizing.splice(picIndex, 1);
    //Push picture-info into picArr
    picArr.push(picture);
  }
  //Return the array
  return picArr;
}

//In choose a card-function card is revealed with class selected, if it is not .selected already.
function chooseCard(e) {
  if(e.target && e.target.nodeName == "DIV" && e.target.className == "unselected card"){
  e.target.classList.add("selected");
  e.target.classList.remove("unselected");
  }
}
