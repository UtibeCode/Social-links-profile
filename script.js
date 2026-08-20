const links = document.querySelectorAll('.social-link');

// Track which social link is currently selected for keyboard navigation.
let currentIndex = 0;

// Apply the active state to the currently selected link.
function updateActive(){

    links.forEach(function(link){
        link.classList.remove('active');
    });

    links[currentIndex].classList.add('active');
}

// Move through the links with the arrow keys and open the selected link with Enter.
document.addEventListener("keydown", function(e){

    if(e.key === "ArrowDown"){
        currentIndex = currentIndex + 1;

        // Continue from the first link after reaching the end of the list.
        if(currentIndex >= links.length){
            currentIndex = 0;
        }

        updateActive();
    }

    else if(e.key === "ArrowUp"){
        currentIndex = currentIndex - 1;

        // Continue from the last link when moving above the first link.
        if(currentIndex < 0){
            currentIndex = links.length - 1;
        }

        updateActive();
    }

    else if(e.key === "Enter"){
        links[currentIndex].click();
    }
});