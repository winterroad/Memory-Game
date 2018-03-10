const game = document.getElementById("game-container");
//All picture's src attributes + alts in an Array.
const allPictures = ["<img class='unselected' src='img/no1.svg' alt='Number 1'>", "<img class='unselected' src='img/no2.svg' alt='Number 2'>", "<img class='unselected' src='img/no3.svg' alt='Number 3'>",
"<img class='unselected'src='img/no4.svg' alt='Number 4'>", "<img class='unselected'src='img/no5.svg' alt='Number 5'>", "<img class='unselected'src='img/no6.svg' alt='Number 6'>", "<img class='unselected'src='img/no7.svg' alt='Number 7'>",
"<img class='unselected'src='img/no8.svg' alt='Number 8'>", "<img class='unselected'src='img/no9.svg' alt='Number 9'>", "<img class='unselected'src='img/no10.svg' alt='Number 10'>", "<img class='unselected'src='img/no11.svg' alt='Number 11'>",
"<img class='unselected' src='img/no12.svg' alt='Number 12'>", "<img class='unselected' src='img/no13.svg' alt='Number 13'>", "<img class='unselected'src='img/no14.svg' alt='Number 14'>", "<img class='unselected'src='img/no15.svg' alt='Number 15'>",
"<img class='unselected' src='img/no16.svg' alt='Number 16'>"];
const allPicturesNum = allPictures.length;
let cardsInGame = 8; //how many different cards . CardsInGame x 2 x <div class="card or class="card"> (Add randomized src + alt here, from chosenPictures Array)<div>
let chosenPictures = []; //Randomize pictures and add them in this Array.
let pairsFound = 0; //In the beginning no pairs found.
let stars = 3; //Max stars in the beginning.
let startTime; //Start time, time will start when first click will be made.
let endTime; //End time, time will stop when pairsFound === cards/2.
let moves = 0; //Move = 2 cards "turned".


//Lets select the pictures (1 each). After this these are added to game in randomized order (2 each). -> function createGame().
chosenPictures = generateRandomPictures(cardsInGame);
createGame(chosenPictures);

function createGame(chosenPictures) {

  let allCards = chosenPictures.concat(chosenPictures);
  let allCardsNum = allCards.length;
  console.log("chosenPictures: " + chosenPictures);
  console.log("AllCards: " + allCards);

  const fragment = document.createDocumentFragment();

  for(let i=0; i < allCardsNum; i++){

    allCardsSize = allCards.length;
    //DOTO: all use randomize function that use for all randomizing needs.
    index = Math.floor(Math.random()*allCardsSize);
    element = allCards.splice(index, 1);
    let elementToBeAdded = document.createElement("div");
    if (elementToBeAdded.classList){
      elementToBeAdded.classList.add("card");
    } else {
        elementToBeAdded.className += ' ' + "card";
  }
    elementToBeAdded.innerHTML = element[0][0];
    console.log(element[0][0]);
    console.log(elementToBeAdded);
    fragment.appendChild(elementToBeAdded);
  }

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
