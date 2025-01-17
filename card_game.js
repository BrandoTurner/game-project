const readlineSync = require("readline-sync");

// getInput() is a function that takes a `prompt` as an argument which
// is a question (string) to ask the user.
// the returning value of getInput() is a string of whatever the user has typed as the response

function getInput(prompt) {
  return readlineSync.question(`${prompt}: `);
}

// YOUR CODE STARTS HERE!!

//buildDeck.push and position array
// 1. use a function declaration to create a buildDeck function.
// 2. inside the buildDeck function, create an array called "suits" that lists all four suits from a deck of card as strings.
// 3. inside the buildDeck function, create a 2nd array called "ranks" that lists all 13 cards from ace to King as strings.
// 4. inside the buildDeck function, create an empty array called "deck"
// 5. inside the buildDeck function, create a for loop INSIDE of another for loop. The outer loop should loop through the ranks. The inner loop should loop through the suits. Make sure to use different variables for your iterators.
// 6. inside your inner for loop, push your looped iterations of ranks and suits as OBJECTS into the empty deck array. Add a third property to this object with the key "value" and the value equal to the current iterator.
// HINT: The result of step 6 is that each card will be an object inside of the deck array, for example [{suit: "diamonds", rank: "A", value: 0}, {suit: "diamonds", rank: "2", value: 1},...{etc}]. For example, if we wanted to organize the players and teams of the NBA with index numbers, we could write: nba.push({player: players[i], team: teams[n], index: i})
// 7. After your loops, return deck, which should now return an array full of card objects if you were to run buildDeck().

function buildDeck(){
  let suits = ["Hearts","Spades","Clubs","Diamonds"];
  let ranks = ["A","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
  let deck = [];
  for( let i = 0 ; i < ranks.length ; i++){
    for(let j = 0; j < suits.length; j++){
    deck.push({ suit: suits[j],
                rank: ranks[i],
                value: i 

    });
  } 
}
return deck;
}
buildDeck();




// STEP ONE - Building A Deck.

// STEP TWO - Shuffling your deck
// 1. use a function declaration to create a function called shuffle that takes deck as an argument.
function shuffleDeck(deck){
// 2. Inside this function create a variable called "shuffledDeck" that takes deck as its value.
let  shuffledDeck = deck;
// 3. Using "let" declare three new variables: currentIndex, whos value should equal the length of the deck array, and two more: temporaryValue and randomIndex, each of which should currently have no value assigned.
let currentIndex = deck.length;
let temporaryValue;
let randomIndex;
// 4. Create a while loop whose condition is that "currentIndex" does not equal 0, so that we stop looping once we've gone through all 52 cards.
while(currentIndex !== 0){
// 5. Inside the while loop, use the javascript Math.methods to generate a random integer between 0 and "currentIndex"
// 6. Inside the while loop, decrement current index by 1. (should be after step 9)
randomIndex = Math.floor(Math.random() * currentIndex)
// 7. Inside the while loop, assign "temporaryValue" with "shuffledDeck" (which is an array) to the [currentIndex].
temporaryValue = shuffledDeck[currentIndex]
// 8. Still inside, assign "shuffledDeck[currentIndex]" a value of shuffledDeck to the [randomIndex]
shuffledDeck[currentIndex] = shuffledDeck[randomIndex]
// 9. Still inside, assign "shuffledDeck[randomIndex]" a value of "temporaryValue".  (currentIndex //i--;)
shuffledDeck[randomIndex] = temporaryValue;
currentIndex--;
// 10. Review the code from steps 7,8, and 9, and leave a comment explaining what you believe those lines of code are doing as they swap assignments of values between them.
// * Those lines represent you first, taking a card (52nd one), and then putting it in random position of the deck, and then taking anouther card (51st and so on) to loop the process again.
// 11. Finally, close the while loop and return "shuffledDeck". You should now be able to run shuffle(buildDeck()) in node and see your shuffled deck of cards.
  }
  return shuffledDeck;
}
console.log(shuffleDeck(buildDeck()));
// STEP THREE - Greeting the player
// 1. Declare a function called greet()
function greet(){

// 2. Inside that function, declare a variable called "name" and use "getInput()" to welcome the user to the game, ask for their name, and assign their answer.
let name = getInput("Welcome to * Hi and Lo Cards * Whats your name?")
// 3. Console.log name
console.log(`Hello, ${name}`)
// 4. return name
return name
// 5. Done.
}

// STEP FOUR - comparing cards
// 1. declare a function called compare that takes two cards as arguments
function compare(card1,card2){
// 2. return the value property of the first card minus the value property of the second card.
return card1.value - card2.value
}
// STEP FIVE - Respond to User Guess
// 1. declare a function called guess that takes two cards as arguments
function guess(card1,card2){
// 2. console.log the rank and suit of the current card
console.log(`Current card: ${card1.rank},${card2.suit}`)
// 3. declare a variable called "input" that uses getInput() to ask the user if they think the next card will be higher (h) or lower (l) than their current card and stores the user's response.
let input = getInput(` What do you think the next card will be? Will it be Higher (h) or Lower (l) ?`)
// 4. use a conditional statement to see if "input" equals "h" or "l".
switch (input){
  case "h":
    return compare(card1,card2) < 0;
    case "l":
      return compare(card1,card2) > 0;
      default:
        console.log("You need to guess (h) or (l) , no points were earned.")
        return false;
}
// 5. If input equals h, return an expression that checks if the outcome of the compare function (using the same arguments as you used for guess) is a negative number.
// 6. If input equals l, check and see if it's a positive number.
// 7. If input doesn't equal h or l, tell the user that they need to guess either h or l and that they get no points for this round, then return false.
}
// STEP SIX - Let's play!
// 1. declare a function called playGame
function playGame(deck){
// 2. declare a variable called deck (it's okay to reuse -- remember scope!) that takes the result of the shuffle function. Remember that the shuffle function needs to take the results one of our other functions as its argument...
deck = shuffleDeck(buildDeck())
// 3. declare a variable called playerName that takes the result of the greet function as its value.
let playerName = greet()
// 4. using let, declare a score variable that's currently set to the number zero
let score = 0
// 5. use an array method on deck to remove the last object in deck. using let, declare a variable called currentCard and assign it this value.
let currentCard = deck.pop();
// 6. create a while loop whos conditions are that score is less than five AND less than the amount of items still in the deck array.
while(score < 5 && score < deck.length){
// 7. Inside the while loop, use an array method on deck to remove the last object and assign that value to a variable named nextCard.
nextCard = deck.pop();
// 8. Inside the while loop, create a conditional statement. If the outcome of guess is true, increment the score by 1, congratulate the user, and tell them their score. If it's false, tell them they were wrong and got no points.
if(guess(currentCard , nextCard) === true){
  score++ 
  console.log(`Congratualtions! Correct guess. your score is now ${score}`)
 }else{ 
    console.log(`Sorry, you were incorrect and recieved no points.`)
 }
// 9. Close the conditional statement and assign nextCard to currentCard. You may have to write this as the type of variable that's always global...
 currentCard = nextCard;
}
// 10. Close the while loop and use a ternary statement that checks if the length of the deck array has reached zero. If it has not, tell the user that they won. If it has reached zero, tell them that they're out of cards and they lost.
(deck.length === 0) ? console.log("You're out of cards. You lose.") : console.log("You've won!");
}
// 11. Write a line of code to execute the playGame function.
playGame();
