"use strict";

// TODO - write your code here.

let randomDamage = () => Math.floor(Math.random() * 10) + 1;

let chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return (randNum === 0) ? opt1 : opt2;
}

function attackPlayer(health) {
    return health - randomDamage();
}

let logDeath = (winner, loser) => {
    return console.log(`${winner} defeated ${loser}`)
}

let logHealth = (player, health) => {
    return console.log(`${player} health: ${health}`)
}

let isDead = (health) => {
    return (health <= 0) ? true : false;
}

function fight (player1, player2, player1Health, player2Health ) {
    while (true) {
    let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            } 
        } else {
                player1Health = attackPlayer(player1Health);
                logHealth(player1, player1Health);
                if (isDead(player1Health)) {
                    logDeath(player2, player1);
                    break;
                }
        }
    }
}