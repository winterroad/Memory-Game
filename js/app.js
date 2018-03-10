const game = document.getElementById("game-container");
//All picture's href attributes + alts in an Array.
const allPictures = ["<img href='no1.svg' alt='Number 1'", "<img href='no2.svg' alt='Number 2'", "<img href='no3.svg' alt='Number 3'",
"<img href='no4.svg' alt='Number 4'", "<img href='no5.svg' alt='Number 5'", "<img href='no6.svg' alt='Number 6'", "<img href='no7.svg' alt='Number 7'",
"<img href='no8.svg' alt='Number 8'", "<img href='no9.svg' alt='Number 9'", "<img href='no10.svg' alt='Number 10'", "<img href='no11.svg' alt='Number 11'",
"<img href='no12.svg' alt='Number 12'", "<img href='no13.svg' alt='Number 13'", "<img href='no14.svg' alt='Number 14'", "<img href='no15.svg' alt='Number 15'",
"<img href='no16.svg' alt='Number 16'"];
const allPicturesNum = allPictures.length;
let cardsInGame = 8; //cardsInGame x <div id="card#1 or class="card"> (Add randomized href + alt here, from chosenPictures Array)<div>
let chosenPictures = []; //Randomize pictures and add them in this Array.
let pairsFound = 0; //In the beginning no pairs found.
let stars = 3; //Max stars in the beginning.
let startTime; //Start time, time will start when first click will be made.
let endTime; //End time, time will stop when pairsFound === cards/2.
let moves = 0; //Move = 2 cards "turned".

//Lets select the pictures (1 each). After this these are added to game in randomized order (2 each). -> function createGame().
chosenPictures = generateRandomPictures(cardsInGame);

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
