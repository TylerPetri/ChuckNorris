function chuckNorris(){
    
event.preventDefault()
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
          document.getElementById('chuckchuck').textContent = `<p>${data.value}</p>`
        })
        console.log(data)
}
chuckNorris()