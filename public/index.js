function getMovieList() {
    axios.get('https://bewc7jy4y8.execute-api.us-west-2.amazonaws.com/dev/JarJerLar')
    .then(function (response) {
      var MovieData =  response.data.message.rows;
      MovieData.forEach(function (movie) {
        console.log('movie', movie);
        document.querySelector('#movie_cat').innerHTML += `<div id="box"><h1> NAME:  ${movie.movie_title}</h1> <h2> YEAR :${movie.movie_year_released} </h2> <h3>GENRE: ${movie.movie_genre}</h3> <h4>ID: ${movie.movie_id}</h4>  <img id="movid" src=${movie.movie_picture} >`
        console.log(`${movie.movie_picture}`); //img src dont load? add new data w/ img pics
      }); 
    })
    .catch(function (error) {
      console.log(error);
    });
  }

getMovieList()


function movie_post(){
  event.preventDefault;
  axios.post('https://0wq13wq7vj.execute-api.us-west-2.amazonaws.com/dev/post', {
    movie_title: movie.movie_title,
    movie_year_release: movie.movie_year_released,
    movie_genre: movie.movie_genre,
    movie_picture: movie.movie_picture
  })
  .then(function (response) {
    console.log(response);
    getList()
  })
  .catch(function (error) {
    console.log(error);
  });
};