
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
const review = document.getElementById("reviews")

const addElement = (text, className, type) => {  // function to create elements and append them
    let heading = document.createElement(type)
    heading.classList.add(className)
    heading.innerHTML = text
    review.appendChild(heading)
}

const reviews = () => { // fetches review rows
    fetch(`http://localhost/reviews/review-select.php`
    ).then(response =>{
        return response.json()
    }).then(json => { 
        json.forEach(element => {
            addElement(`Name: ${element.name}`, "reviewer-info", "h3")
            addElement(`Email: ${element.email}`, "reviewer-info", "h3")
            addElement(`Phone: ${element.phone}`, "reviewer-info", "h3")
            addElement(`<b>Message: </b>${element.message}`, "reviewer-message", "p")
            addElement(``, "review-line", "div")
        })
    })
}

reviews()