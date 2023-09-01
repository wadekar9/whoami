const myProjects = [
    {
        id : 1,
        image : 'https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW9zfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        name : 'Project Demo1111',
        github : 'https://github.com',
        live : 'https://google.com'
    },
    {
        id : 2,
        image : 'https://images.unsplash.com/photo-1626289535731-613d819dc4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW9zfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        name : 'Project Demo2222',
        github : 'https://github.com',
        live : 'https://google.com'
    },
    {
        id : 3,
        image : 'https://images.unsplash.com/photo-1587944214730-0b9f98b4ccb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlkZW9zfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        name : 'Project Demo3333',
        github : 'https://github.com',
        live : 'https://google.com'
    },
    {
        id : 4,
        image : 'https://images.unsplash.com/photo-1553165907-ebcf689249a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZpZGVvc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        name : 'Project Demo44444',
        github : 'https://github.com',
        live : 'https://google.com'
    }
]

const menu = document.querySelector(".menu-links");
const icon = document.querySelector(".hamburger-icon");
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".details-container").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");

const carouselChildrens = [...carousel.children];

function toggleMenu() {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);