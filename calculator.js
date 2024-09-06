const disp = document.getElementById("res");
const ck = document.getElementById("check");
const element = document.body;
// const label = document.getElementById('lLabel');
const sun = document.querySelector('.sun-icon');
const moon = document.querySelector('.moon-icon');


function appendToDisplay(input)
{
    disp.value +=input;
}

function check1()
{
    if(ck.checked === true)
    {
        moon.classList.add('moonAnime');
        sun.style.display = 'none';
        moon.style.display = 'block';
        element.classList.add('dark-mode');
    }
    else
    {
        sun.classList.add('sunAnime');
        moon.style.display = 'none';
        sun.style.display = 'block';
        element.classList.remove('dark-mode');
        
    }
}
window.onload = function ()
{
    sun.style.display='block';
    moon.style.display='none'
    ck.checked == false;
}
function allClear()
{
    disp.value = "";
}

function backsp()
{
    disp.value = disp.value.slice(0,-1);
}

function calculation()
{
    try {
        disp.value = eval(disp.value);
        
    } catch (e) {
        disp.value="Error";
    }
}

