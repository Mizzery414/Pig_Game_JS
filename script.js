"use strict";

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// Must be outside the function, otherwise will reset every time we click roll dice function

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice roll
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);

  // 3. Check for a roll of 1
  if (dice !== 1) {
    // 3b. Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // 4. If true, switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    // reasign active player, if 0, switch to 1
  }
});
