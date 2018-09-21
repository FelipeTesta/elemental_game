let playerscore = 0;
let computerscore = 0;

function computerChoice()
{
    let number = Math.floor((Math.random() * 5) + 1);
    switch (number)
    {
        case 1:
        return "fogo";
        case 2:
        return "terra";
        case 3:
        return "metal";
        case 4:
        return "agua";
        case 5:
        return "madeira";
        default:
        alert("Algo deu errado!");
    }
}

function game(playerChoice, getComputer)
{
    if(playerChoice === getComputer)
    {
    return "Equilíbrio";
    } 
    else if ((playerChoice === "fogo") && (getComputer === "agua" || getComputer === "terra"))
    {
    computerscore += 1;
    return "A natureza domina.";
    }
    else if ((playerChoice === "terra") && (getComputer === "metal" || getComputer === "madeira"))
    {
    computerscore += 1;
    return "A natureza domina.";
    }
    else if ((playerChoice === "metal") && (getComputer === "agua" || getComputer === "fogo"))
    {
    computerscore += 1;
    return "A natureza domina.";
    }
    else if ((playerChoice === "agua") && (getComputer === "madeira" || getComputer === "terra"))
    {
    computerscore += 1;
    return "A natureza domina.";
    }
    else if ((playerChoice === "madeira") && (getComputer === "fogo" || getComputer === "metal"))
    {
    computerscore += 1;
    return "A natureza domina.";
    }
    else if ((playerChoice === "fogo") && (getComputer === "madeira" || getComputer === "metal"))
    {
    playerscore += 1;
    return "A mão humana tem força sobre a natureza.";
    }   
    else if ((playerChoice === "terra") && (getComputer === "fogo" || getComputer === "agua"))
    {
    playerscore += 1;
    return "A mão humana tem força sobre a natureza.";
    }
    else if ((playerChoice === "metal") && (getComputer === "terra" || getComputer === "madeira"))
    {
    playerscore += 1;
    return "A mão humana tem força sobre a natureza.";
    }
    else if ((playerChoice === "agua") && (getComputer === "fogo" || getComputer === "metal"))
    {
    playerscore += 1;
    return "A mão humana tem força sobre a natureza.";
    }
    else if ((playerChoice === "madeira") && (getComputer === "terra" || getComputer === "agua"))
    {
    playerscore += 1;
    return "A mão humana tem força sobre a natureza.";
    }
};


function circleSize()
{
    let equilibrio = +playerscore - +computerscore;
        
    let x = 42.5;
    let y = 170;
    let z = Math.abs(equilibrio);
    let losing = y - z * x;
    let wining = y + z * x;

        if(equilibrio < 0)
        {
            document.querySelector(".centroYin").style.height = losing + "px";
            document.querySelector(".centroYin").style.width = losing + "px";
            document.querySelector(".centroYang").style.height = wining + "px";
            document.querySelector(".centroYang").style.width = wining + "px";
        }
        else if(equilibrio > 0){
            document.querySelector(".centroYin").style.height = wining + "px";
            document.querySelector(".centroYin").style.width = wining + "px";
            document.querySelector(".centroYang").style.height = losing + "px";
            document.querySelector(".centroYang").style.width = losing + "px";
        }
        else if(equilibrio > 6){
            document.querySelector('#perdido').textContent = "O equilíbrio foi perdido!";
            playerscore = 0;
            computerscore = 0;
        }
        else if(equilibrio < -6){
            document.querySelector('#perdido').textContent = "O equilíbrio foi perdido!";
            playerscore = 0;
            computerscore = 0;
        }
        
}

const escolhaFogo = document.querySelector('#fogo');
    escolhaFogo.addEventListener('click', () => { document.querySelector('#resultado').textContent = game('fogo', computerChoice() );
    circleSize();});

const escolhaTerra = document.querySelector('#terra');
    escolhaTerra.addEventListener('click', () => { document.querySelector('#resultado').textContent = game('terra', computerChoice() );
    circleSize();});

const escolhaMetal = document.querySelector('#metal');
    escolhaMetal.addEventListener('click', () => { document.querySelector('#resultado').textContent = game('metal', computerChoice() );
    circleSize();});

const escolhaAgua = document.querySelector('#agua');
    escolhaAgua.addEventListener('click', () => { document.querySelector('#resultado').textContent = game('agua', computerChoice() );
    circleSize();});
        
const escolhaMadeira = document.querySelector('#madeira');
    escolhaMadeira.addEventListener('click', () => { document.querySelector('#resultado').textContent = game('madeira', computerChoice() );
    circleSize();});
