function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let turnRound = 0
    if (firstAttacker === fighter1.name) {
        turnRound = 1
    } else {
        turnRound = 2
    }
    while (fighter1.health > 0 && fighter2.health > 0){
        if (turnRound === 1) {
            fighter2.health -= fighter1.damagePerAttack
            turnRound = 2
        } else {
            fighter1.health -= fighter2.damagePerAttack
            turnRound = 1
        }
    }
    if (fighter1.health <= 0) {
        return fighter2.name
    } else {
        return fighter1.name
    }
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))
