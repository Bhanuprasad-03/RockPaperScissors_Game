let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });

});

const Gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playgame = (userchoice) => {

    const compchoice = Gencompchoice();

    if (userchoice === compchoice) {
        Drawgame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {

            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {

            userwin = compchoice === "scissors" ? false : true;
        }
        else {

            userwin = compchoice === "rock" ? false : true;
        }

        showwinner(userwin, userchoice, compchoice);
    }
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win ! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText =`You lose ! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const Drawgame = () => {
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31";
}