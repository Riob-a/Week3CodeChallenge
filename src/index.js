//$ npx json-server db.json
document.addEventListener("DOMContentLoaded", () => {
  showFilm()
 });


//global variables that can be accessed by the functions
  const poster = document.getElementById("poster");
//
  const title = document.getElementById("title");
//
  const runtime = document.getElementById("runtime");
//
  const showtime = document.getElementById("showtime");
//
  const description = document.getElementById("film-info");
//
  const infoButton = document.getElementById("btn");
//
  const capacity = document.getElementById("capacity");
//
  const tickets_sold = document.getElementById("tickets_sold");
//
  const ticketsAvailable = document.getElementById("ticket-num")


//this function fetches the db from the provided url, it also determines the place holding page  when the DOM is utilised
function showFilm () {
  const filminfo = document.getElementById("films");
  fetch("https://json-deploy-5pkc.onrender.com/films")

  .then(response => response.json())
  .then((info) => {
      const information = info[0]
      title.textContent =information.title

      const information1 = info[0]
      runtime.textContent = information1.runtime

      const information2 = info[0]
      showtime.textContent = information2.showtime

      const information3 = info[0]
      description.textContent = information3.description

      const information4 = info[0]
      poster.src = information4.poster

            info.forEach(film => {
            let infolist = document.createElement("li");
            infolist.innerText = film.title;
            infolist.addEventListener('click', ()=> {
              movieDetails(film);
            });
            filminfo .appendChild(infolist);
            console.log(film.title);             
            });
          });
}  

//this function fills the slotsin the movie information section
function movieDetails(film){
  poster.src = film.poster;
  title.innerText = `${film.title}`;
  runtime.innerText = `${film.runtime}`;
  showtime.innerText = `${film.showtime}`;
  description.innerText = `${film.description}`;
  capacity.innerText = `${film.capacity}`;
  tickets_sold.innerText = `${film.tickets_sold}`;
  ticketsAvailable.innerText = `${film.ticket-num}`;
}