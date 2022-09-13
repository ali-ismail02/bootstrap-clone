
// scroll control 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar-heading").style.fontSize = "1.25rem";
    document.getElementById("navbar").style.padding = "0";
  } else {
    document.getElementById("navbar-heading").style.fontSize = "1.75rem";
    document.getElementById("navbar").style.padding = "1.5rem 0";
  }
}

// get api 

const reviews = () => { // fetches random dog photo
    fetch(`https://dog.ceo/api/breeds/image/random`
    ).then(response =>{
        return response.json()
    }).then(json => { 
        dogPhoto.innerHTML = `<img src="${json.message}" style="height: 35vh; max-width: 100%"></img>`
    })
}