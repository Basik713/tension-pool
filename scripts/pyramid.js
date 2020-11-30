class pyramidWindow extends Application {
  static get defaultOptions() {
        return {
              ...super.defaultOptions,
              id : "pyramidwindow",
              template : "modules/tension-pool/templates/tensionpool.html",
              resizable : false,
              height : "auto",
              width : 200,
              minimizable : true,
              title : "Tension Pyramid",
        }
     }
     activateListeners(html) {
        let buttonRules = document.getElementById("rules");
        let buttonAdd = document.getElementById("rollA");
        let buttonRoll = document.getElementById("rollB");
        let buttonRollFull = document.getElementById("rollC");
        let buttonRollEmpty = document.getElementById("rollD");

        buttonRules.onclick = rules;
        buttonAdd.onclick = add;
        buttonRoll.onclick = roll;
        buttonRollFull.onclick = rollFull;
        buttonRollEmpty.onclick = rollEmpty;
    }
}

Hooks.on('ready', () => {
    if (game.user.isGM) {
    new pyramidWindow().render(true);
    }
});

let number = 0;

//Function to add to the pool
function add() { 
    if (number < 6) {
        number += 1;
        document.getElementById("pyramid").innerHTML = "Dices in the pyramid:" + " " + number + "/6";

        let chatOut = "Un dé de tension à été ajouté à la pyramide. Elle est maintenant composée de " + number + "/6 dés de tension.";
        ChatMessage.create({
            speaker: {
                alias: "Pyramide de Tension",
            },
            content: chatOut,
        })
        AudioHelper.play({src: "sounds/dice.wav", volume: 0.8, autoplay: true, loop: false}, true);
    } else {
        ui.notifications.warn("The pyramid is full, roll the dices !");
    }
};

//Function to roll the pool
function roll() {
    if (number < 6) {
    let dices = number+"d6"+"cf";
    let roll = new Roll(dices);
    roll.evaluate();
    roll.toMessage();
    } else if (number === 6) {
        let dices = number+"d6"+"cf";
        let roll = new Roll(dices);
        roll.evaluate();
        roll.toMessage();
        number = 0;
    }
    document.getElementById("pyramid").innerHTML = "Dices in the pyramid:" + " " + number +"/6";
}

//Function to roll a full pool
function rollFull() {
    let roll = new Roll('6d6cf');
    roll.evaluate();
    roll.toMessage();
}

//Function to roll an empty pool
function rollEmpty() {
    let roll = new Roll('1d6cf');
    roll.evaluate();
    roll.toMessage();
}

//Function to open the rules
function rules() {
    class rulesWindow extends Application {
        static get defaultOptions() {
              return {
                    ...super.defaultOptions,
                    id : "ruleswindow",
                    template : "modules/tension-pool/templates/rules.html",
                    resizable : true,
                    height : "auto",
                    width : 600,
                    minimizable : true,
                    title : "Tension Pyramid Rules",
                }
        }
    }
    new rulesWindow().render(true);
}