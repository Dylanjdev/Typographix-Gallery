// Allow for selection of image to triger modal view

const items = document.querySelectorAll('.grid > div')

items.forEach(item => {
    const img = item.querySelector('img');
    img.title = "Click to enlarge";
    item.addEventListener('click', () => {
        const imgSrc = img.src;
        // Create the modal div
        const modal = document.createElement('div');
        modal.classList.add('modal');
        // create the image element
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = "Enlarged Image";
        // Append the image to the modal
        modal.appendChild(imgElement);
        // add the modal to the body
        document.body.appendChild(modal);
        // Disable scrolling
        document.body.style.overflow = 'hidden';
        // add event listener to close the modal when clicked
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
            // Re-enable scrolling
            document.body.style.overflow = '';
        });
        });
});












// Function to check if page is scrolled and adjust the logo size
function checkScroll() {
    const navBar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    let scrollPosition = window.scrollY;

    //add or remove 'scrolled' class based on scroll position
    if (scrollPosition > 20) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled')
    }

    // calculate new font size based on scroll position
    let newSize = 3 - (scrollPosition * 0.03); // Decrease by 0.03 rem for every one pixel scroolled

    // Clamping the font size between 1.5rem and 3rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3, newSize);

    logo.style.fontSize = newSize + 'rem';
}

// Event Listener for scroll event
window.addEventListener('scroll', checkScroll);