let selectedRaiting;

document.getElementById("1").addEventListener('click', select1)
document.getElementById("2").addEventListener('click', select2)
document.getElementById("3").addEventListener('click', select3)
document.getElementById("4").addEventListener('click', select4)
document.getElementById("5").addEventListener('click', select5)

let array = ["1", "2", "3", "4", ]

function select1() {
   cleanState()
    document.getElementById("1").classList.add("selected");
    selectedRaiting = document.getElementById("1").id;
  }

  function select2() {
    cleanState()
    document.getElementById("2").classList.add("selected");
    selectedRaiting = document.getElementById("2").id;
  }

  function select3() {
    cleanState()
    document.getElementById("3").classList.add("selected");
    selectedRaiting = document.getElementById("3").id;
  }

  function select4() {
    cleanState()
    document.getElementById("4").classList.add("selected");
    selectedRaiting = document.getElementById("4").id;
  }

  function select5() {
   cleanState()
    document.getElementById("5").classList.add("selected");
    selectedRaiting = document.getElementById("5").id;
    console.log(selectedRaiting)
  }






  function cleanState() {
    const rateElements = document.querySelector('.raiting').children;
    Array.from(rateElements).forEach((el) => {
        el.classList.remove('selected')
    })
  }


  // Button submit
document.getElementById('submit').addEventListener('click', sayThankYou)


function sayThankYou() {
  document.getElementById("askForRaiting").style.display = 'none';
  document.getElementById("sayThanks").style.display='flex'
  document.querySelector('.rate-selected').innerHTML = `You selected ${selectedRaiting} out of 5`
}

