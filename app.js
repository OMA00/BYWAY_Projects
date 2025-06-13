console.log("Online");
const body = document.body;

const cardContainer = document.createElement("div");
cardContainer.classList.add("cardContainer");

const url = "https://imdb236.p.rapidapi.com/api/imdb/most-popular-tv";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "6beadfc23cmsh6e276dd55a01e51p14dff8jsnc0929212c3e5",
    "x-rapidapi-host": "imdb236.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.forEach((Moviedata) => {
      const card = document.createElement("div");
      card.classList.add("card");

      //Images
      const MovieImg = document.createElement("img");
      MovieImg.src = Moviedata.primaryImage;
      MovieImg.alt = Moviedata.originalTitle;

      //Title
      const title = document.createElement("h5");
      title.classList.add("title");
      title.textContent = Moviedata.originalTitle;

      //Rating
      const rating = document.createElement("div");
      rating.classList.add("divRatings");

      const count = document.createElement("p");
      const rate = document.createElement("p");

      count.textContent = `Votes ${Moviedata.numVotes}`;
      rate.textContent = `Rating ${Moviedata.averageRating}`;

      rating.append(rate, count);

      card.append(MovieImg, title, rating);
      cardContainer.append(card);
      body.append(cardContainer);
    });
  })
  .catch((error) => {
    console.log(error);
  });
