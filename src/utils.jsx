export async function consultarTopArtistas() {
  try {
    const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=32c7f2300cd26210d0ffcb714ce26ca7&format=json&limit=10');
    const json = await response.json();
    return json.artists.artist;
  } catch (error) {
    console.error(error);
  }
}

export async function consultarTopTracks() {
  try {
    const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&format=json&api_key=32c7f2300cd26210d0ffcb714ce26ca7&limit=10');
    const json = await response.json();
    return json.tracks.track;
  } catch (error) {
    console.error(error);
  }
}

export async function realizarPesquisa(cod, texto) {
  if (cod == 1) {
    try {
      const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${texto}&api_key=32c7f2300cd26210d0ffcb714ce26ca7&format=json&limit=10`);
      const json = await response.json();
      if (!json.results) return []
      return [json.results.trackmatches.track, 1];
    } catch (error) {
      console.error(error);
    }
  }
  else if (cod == 2) {
    try {
      const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${texto}&api_key=32c7f2300cd26210d0ffcb714ce26ca7&format=json&limit=10`);
      const json = await response.json();
      if (!json.results) return []
      return [json.results.artistmatches.artist, 2];
    } catch (error) {
      console.error(error);
    }
  }
  else if (cod == 3) {
    try {
      const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${texto}&api_key=32c7f2300cd26210d0ffcb714ce26ca7&format=json&limit=10`);
      const json = await response.json();
      if (!json.results) return []
      console.log([json.results.albummatches.album, 1]);
      return [json.results.albummatches.album, 3];
    } catch (error) {
      console.error(error);
    }
  }
}

export async function retornarInfo(cod, nome, artistaRel) {
  if (cod = 1) {

  }
  else if (cod == 2) {
    try {
      let bio, tour, estilos
      const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${nome}&api_key=32c7f2300cd26210d0ffcb714ce26ca7&format=json&lang=pt`);
      const json = await response.json();
      bio = json.artist.bio.published.includes('1970') ? null : json.artist.bio.summary
      tour = json.artist.ontour ? true : false
      estilos = json.artist.tags.tag.length == 0 ? null : json.artist.tags.tag
      return ({
        bio,
        ouvintes: json.artist.stats.listeners,
        plays: json.artist.stats.playcount,
        tour,
        estilos
      });
    } catch (error) {
      console.error(error);
    }
  }
  else if (cod = 3) {

  }
}
