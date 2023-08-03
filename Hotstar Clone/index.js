let movies = [
  {
    name: "MS Dhoni",
    des:
      "A tell-all tale about the life and times of Indian cricketer Mahendra Singh Dhoni, mapping his journey from a ticket collector to a celebrated sportsman.!",
    image: "images/ms dhoni.webp"
  },
  {
    name: "MOCNKNIGHT",
    des:
      "Mild-mannered Steven Grant has dissociative identity disorder and shares a body with a mercenary.!",
    image: "images/mocnknight.webp"
  },

  {
    name: "Doctor Strange in the Multiverse of Madness",
    des:
      "When the Multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary.!",
    image: "images/multiverse of madness.webp"
  },
  {
    name: "falcon and the winter soldier",
    des:
      "Following the events of Avengers: Endgame, Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience.!",
    image: "images/slider 2.png"
  },
  {
    name: "Bumrah Reveals Dhoni's Captaincy",
    des:
      "Jasprit Bumrah talks about donning the captaincy hat, his mantra and MS Dhoni's golden words of advice to him!",
    image: "images/live cricket.webp"
  },
  {
    name: "More Than Friends",
    des:
      "Friends of 10 years, Woo-yeon and Soo, secretly harbour feelings for each other. Will their love survive the misunderstandings and missed timings",
    image: "images/kdrama.webp"
  },
  {
    name: "Highlights: Nadal Whips Wily",
    des:
      "Rafael Nadal overcame Lorenzo Sonego's tricks to seal a 6-1, 6-2, 6-4 win in Round 3 of Wimbledon 2022!",
    image: "images/tennis.webp"
  },

  {
    name: "luca",
    des:
      "The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.!",
    image: "images/slider 5.png"
  },
  {
    name: "loki",
    des:
      "The mercurial villain Loki resumes his role as the God of Mischief in a new series new that takes place after the events of Avengers: Endgame.!",
    image: "images/slider 1.png"
  },
  {
    name: "wanda vision",
    des:
      "Wanda Maximoff and Vision-two super-powered beings living idealized suburban lives-begin to suspect that everything is not as it seems.!",
    image: "images/slider 3.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
