CONFIG.debug.hooks = true

class poolWindow extends Application {
  static get defaultOptions() {
        return {
              ...super.defaultOptions,
              id : "poolwindow",
              template : "modules/tension-pool/templates/tensionpool.html",
              resizable : false,
              height : "auto",
              width : 200,
              minimizable : true,
              title : "Tension Pool",
        }
     }
     activateListeners(html) {
        let buttonAdd = document.getElementById("rollA");
        const buttonRoll = '.roll';

        //buttonAdd.onclick = add;
    }
}

Hooks.on('ready', () => {
    new poolWindow().render(true);
});

/*let number = 0;
let string = '';
let num = document.getElementById("pool");*/

/*
const buttonAdd = document.querySelector('.add');
const buttonRoll = document.querySelector('.roll');
const num = document.querySelector('.text');

//buttonAdd.addEventListener('click', add);
//buttonRoll.addEventListener('click', roll);
*/

//Function to add to the pool
function add() { 
    if (number < 6) {
        number += 1;
        console.log(number);
        // PROBLEM num.textContent = 'Dices in the pool:';
    }
};

/*
        num.textContent = 'Dices in the pool:'
        number += 1;
        num.textContent += ' ' + number;
        } else {
        //alert('Pool full !');
        roll();
        }
};



//Function to roll the pool
function roll() {
    for (let i = 0; i<number; i++) {
        r = new Roll("1d6", {});
        r.evaluate;
        console.log(r.result);
        let dice = Math.round(Math.random(i)*6);
        console.log(dice);
        let newNumber = 0;
        num.textContent = 'Dices in the pool:'
        num.textContent += ' ' + newNumber;
    };
    number = 0;
}*/
