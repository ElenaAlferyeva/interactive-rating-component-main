let selectedRaiting;

document.querySelector('.raiting').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI'){
        cleanState()
        document.getElementById(e.target.id).classList.add("selected");
        selectedRaiting = e.target.id
        //alert(e.target.id);
        }
  });


function cleanState() {
  const rateElements = document.querySelector('.raiting').children;
  Array.from(rateElements).forEach((el) => {
        el.classList.remove('selected')
    })
  }


  // Button submit
document.getElementById('submit').addEventListener('click', sayThankYou)


function sayThankYou() {
  if (selectedRaiting == undefined) {
    document.querySelector('.validation-error').style.display = 'block';
  } else {
    document.getElementById("askForRaiting").style.display = 'none';
    document.getElementById("sayThanks").style.display='flex'
    document.querySelector('.rate-selected').innerHTML = `You selected ${selectedRaiting} out of 5`
  }
}

