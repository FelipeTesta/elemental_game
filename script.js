let playerscore = 0;
let computerscore = 0;
let computerelement;

let status = 0;
// 5 - 4 - 3 - 2 - 1 | 0 | 1 - 2 - 3 - 4 - 5 //
function computerChoice()
{
    let number = Math.floor((Math.random() * 5) + 1);
    switch (number)
    {
        case 1:
        computerelement = 'fogo';
        return "fogo";
        case 2:
        computerelement = 'terra';
        return "terra";
        case 3:
        computerelement = 'metal';
        return "metal";
        case 4:
        computerelement = 'agua';
        return "agua";
        case 5:
        computerelement = 'madeira';
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
    status -= 1;
    return "A natureza domina.";
    }
    else if ((playerChoice === "terra") && (getComputer === "metal" || getComputer === "madeira"))
    {
    computerscore += 1;
    status -= 1;
    return "A natureza domina.";
    }
    else if ((playerChoice === "metal") && (getComputer === "agua" || getComputer === "fogo"))
    {
    computerscore += 1;
    status -= 1;
    return "A natureza domina.";
    }
    else if ((playerChoice === "agua") && (getComputer === "madeira" || getComputer === "terra"))
    {
    computerscore += 1;
    status -= 1;
    return "A natureza domina.";
    }
    else if ((playerChoice === "madeira") && (getComputer === "fogo" || getComputer === "metal"))
    {
    computerscore += 1;
    status -= 1;
    return "A natureza domina.";
    }
    else if ((playerChoice === "fogo") && (getComputer === "madeira" || getComputer === "metal"))
    {
    playerscore += 1;
    status += 1;
    return "A mão humana tem força sobre a natureza.";
    }   
    else if ((playerChoice === "terra") && (getComputer === "fogo" || getComputer === "agua"))
    {
    playerscore += 1;
    status += 1;
    return "A mão humana tem força sobre a natureza.";
    }
    else if ((playerChoice === "metal") && (getComputer === "terra" || getComputer === "madeira"))
    {
    playerscore += 1;
    status += 1;
    return "A mão humana tem força sobre a natureza.";
    }
    else if ((playerChoice === "agua") && (getComputer === "fogo" || getComputer === "metal"))
    {
    playerscore += 1;
    status += 1;
    return "A mão humana tem força sobre a natureza.";
    }
    else if ((playerChoice === "madeira") && (getComputer === "terra" || getComputer === "agua"))
    {
    playerscore += 1;
    status += 1;
    return "A mão humana tem força sobre a natureza.";
    }
};

function restart(){
    document.querySelector('#resultado').textContent ='';
    document.querySelector('#block').style.display='block';
    setTimeout(function(){location.reload()}, 10000);}

function circleSize()
{
    let equilibrio = +playerscore - +computerscore;
    let x = 42.5;
    let y = 170;
    let z = +status;
    let wining = y - (z * x);
    let losing = y + (z * x);

        if(z == 0){
            document.querySelector(".centroYin").style.height = y + "px";
            document.querySelector(".centroYin").style.width = y + "px";
            document.querySelector(".centroYang").style.height = y + "px";
            document.querySelector(".centroYang").style.width = y + "px";}

        else if( Math.abs(z) > 4 ){
            document.querySelector('#perdido').textContent = "O equilíbrio foi perdido!";
            restart();}

        else if(z < 0){
            document.querySelector(".centroYin").style.height = losing + "px";
            document.querySelector(".centroYin").style.width = losing + "px";
            document.querySelector(".centroYang").style.height = wining + "px";
            document.querySelector(".centroYang").style.width = wining + "px";}

        else if(z > 0){
            document.querySelector(".centroYin").style.height = wining + "px";
            document.querySelector(".centroYin").style.width = wining + "px";
            document.querySelector(".centroYang").style.height = losing + "px";
            document.querySelector(".centroYang").style.width = losing + "px";}
}

function imagePlayer(playerChoice){
        var img_esq = document.querySelector('#img_esq');

        if (playerChoice == 'fogo'){img_esq.src='assets/b_fogo.svg';}
        else if (playerChoice == 'terra'){img_esq.src='assets/b_terra.svg';}
        else if (playerChoice == 'metal'){img_esq.src='assets/b_metal.svg';}
        else if (playerChoice == 'agua'){img_esq.src='assets/b_agua.svg';}
        else if (playerChoice == 'madeira'){img_esq.src='assets/b_madeira.svg';}
    }

function imageComputer(comp_Choice)
{
    var img_dir = document.querySelector('#img_dir');

    if (comp_Choice == 'fogo'){img_dir.src='assets/w_fogo.svg';}
    else if (comp_Choice == 'terra'){img_dir.src='assets/w_terra.svg';}
    else if (comp_Choice == 'metal'){img_dir.src='assets/w_metal.svg';}
    else if (comp_Choice == 'agua'){img_dir.src='assets/w_agua.svg';}
    else if(comp_Choice == 'madeira'){img_dir.src='assets/w_madeira.svg';}
}

const escolhaFogo = document.querySelector('#fogo');
    escolhaFogo.addEventListener('click', () => 
    {
    document.querySelector('#resultado').textContent = game('fogo', computerChoice() );
    circleSize();
    imagePlayer('fogo');
    imageComputer(computerelement);});

const escolhaTerra = document.querySelector('#terra');
    escolhaTerra.addEventListener('click', () => 
    {
    document.querySelector('#resultado').textContent = game('terra', computerChoice() );
    circleSize();
    imagePlayer('terra');
    imageComputer(computerelement);});

const escolhaMetal = document.querySelector('#metal');
    escolhaMetal.addEventListener('click', () => 
    {
    document.querySelector('#resultado').textContent = game('metal', computerChoice() );
    circleSize();
    imagePlayer('metal');
    imageComputer(computerelement);});

const escolhaAgua = document.querySelector('#agua');
    escolhaAgua.addEventListener('click', () => 
    {
    document.querySelector('#resultado').textContent = game('agua', computerChoice() );
    circleSize();
    imagePlayer('agua');
    imageComputer(computerelement);});
        
const escolhaMadeira = document.querySelector('#madeira');
    escolhaMadeira.addEventListener('click', () => 
    {
    document.querySelector('#resultado').textContent = game('madeira', computerChoice() );
    circleSize();
    imagePlayer('madeira');
    imageComputer(computerelement);});
