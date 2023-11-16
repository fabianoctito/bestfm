export async function consultarRank(id){
    if(id == 1){
        fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=32c7f2300cd26210d0ffcb714ce26ca7&format=json&limit=10')
        .then(response => response.json())
        .then(json => {
          console.log(json.artists.artist)
          return (json.artists.artist)
        })
        .catch(error => {
          console.error(error);
        });
    }
}