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