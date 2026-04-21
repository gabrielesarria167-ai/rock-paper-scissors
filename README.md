# JAVASCRIPT: ROCK, PAPER, SCISSORS

>[!important]
>This _project_ is not final, as constant changes will be added every once in a while.
This project was offered by _[The Odin Project](https://github.com/TheOdinProject)_.

In this project I will create the famous rock, paper, scissors game, which will be played against a cpu, combining my _HTML_, _CSS_, and _JavaScript_ skills to create a **styled** and **interactive** webpage.

I want the page to ask the user for the **amount of rounds to play**, and then display **3 buttons**, 1 for every possibility (either rock, paper or scissors).

Every time the user **clicks** a button, the webpage checks if he won, lost or tied the round, and then displays the **current result**.

At the end of the match (when there are no more rounds left), the game displays the result and a **final overall score**.

The overall win is given to the one between the cpu and the user who won the most games.

---

## INSIGHTS

### RANDOM CPU CHOICE SELECTION

For the cpu to choose a random option from the 3 available ones, I used the _Math.random()_ function, which returns a random value from 0 to 0.9, and _Math.floor()_, which rounds down the value to the nearest integer.

To limit the result to only 3 possible values, I used a formula found on the _[MDN Math.random() documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values)_, which is the following:

```js
Math.floor( Math.random() * ( (maxPreferredValue + 1)  - minPreferredValue) + minPreferredValue )
```

The overall function looks like this:
```js
function getComputerChoice() {
    let choice = Math.floor(Math.random() * (4 - 1) + 1);
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}
```