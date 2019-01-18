let deleteBtn = document.querySelector('#deleteBtn')
let movie_id_del= document.querySelector('#movie_id_del')


deleteBtn.addEventListener('click', (event) => {

    console.log(movie_id_del.value)

    event.preventDefault();
    axios.delete('https://bewc7jy4y8.execute-api.us-west-2.amazonaws.com/dev/JarJerLar3', {
        data: {
            movie_id: movie_id_del.value
        } 
    
    })
    .then(function (response) {
      console.log(response);
      //getList()
    })
    .catch(function (error) {
      console.log(error);
    });
    
    window.location.replace("../index.html");
  })