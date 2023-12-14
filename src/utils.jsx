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
      return [json.results.albummatches.album, 3];
    } catch (error) {
      console.error(error);
    }
  }
}

export async function retornarInfo(cod, nome, artistaRel) {
  if (cod == 1) {
    try {
      let tags
      const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=track.getinfo&track=${nome}&artist=${artistaRel.replace('&', "e")}&api_key=32c7f2300cd26210d0ffcb714ce26ca7&format=json&lang=pt`);
      const json = await response.json();
      tags = json.track.toptags.tag.length == 0 ? null : json.track.toptags.tag.map(u => u.name).join(', ')

      return ({
        ouvintes: json.track.listeners,
        plays: json.track.playcount,
        tags
      })
    } catch (error) {
      console.error(error);
    }
  }
  else if (cod == 2) {
    try {
      let bio, tour, tags
      const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${nome.replace('&', "e")}&api_key=32c7f2300cd26210d0ffcb714ce26ca7&format=json&lang=pt`);
      const json = await response.json();
      bio = json.artist.bio.published.includes('1970') || json.artist.bio.summary.startsWith("Ver ") || json.artist.bio.summary.startsWith("See ") ? null : json.artist.bio.summary
      bio ? bio = ((bio.split(' ')).splice(0, bio.split(' ').length - 5)).join(' ') : ''
      tour = json.artist.ontour == 1 ? true : false
      tags = json.artist.tags.tag.length == 0 ? null : json.artist.tags.tag.map(u => u.name).join(', ')

      return ({
        bio,
        ouvintes: json.artist.stats.listeners,
        plays: json.artist.stats.playcount,
        tour,
        tags
      });
    } catch (error) {
      console.error(error);
    }
  }
  else if (cod == 3) {
    try {
      let tags
      const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&album=${nome}&artist=${artistaRel.replace('&', "e")}&api_key=32c7f2300cd26210d0ffcb714ce26ca7&format=json&lang=pt`);
      const json = await response.json();
      tags ? tags = json.album.tags.tag.length == 0 ? null : json.album.tags.tag.map(u => u.name).join(', ') : tags = false

      return ({
        ouvintes: json.album.listeners,
        plays: json.album.playcount,
        tags,
        image: json.album.image[5]['#text']
      })
    } catch (error) {
      console.error(error);
    }
  }
}

export async function procurarUser(usuario) {
  try {
    if (usuario == undefined || usuario.trim() == '') return 'https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png'
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${usuario}&api_key=32c7f2300cd26210d0ffcb714ce26ca7&format=json`);
    const json = await response.json();
    if (json.error == 6 || json.user.playcount == 0 || !json.user.image[3]['#text']) return 'https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png'
    return json.user.image[3]['#text']
  } catch (error) {
    console.log(error);
  }
}

export async function handleComparar(us1, us2, escolha) {
  try {
    if (us1 == undefined || us1.trim() == '' || us2 == undefined || us2.trim() == '' || us1 == us2) return 404
    let resUs1 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${us1}&api_key=32c7f2300cd26210d0ffcb714ce26ca7&format=json`);
    let resUs2 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${us2}&api_key=32c7f2300cd26210d0ffcb714ce26ca7&format=json`);
    resUs1 = await resUs1.json();
    resUs2 = await resUs2.json();

    if (resUs1.error == 6 || resUs1.user.playcount == 0 || resUs2.error == 6 || resUs2.user.playcount == 0) return 404

    return compararUsuarios(resUs1.user, resUs2.user, escolha)
  } catch (error) {
  }
}

export async function compararUsuarios(us1, us2, escolha) {
  if (escolha.id == 1) {
    let limUs1 = us1.track_count > 1000 ? 1000 : us1.track_count
    let limUs2 = us2.track_count > 1000 ? 1000 : us2.track_count

    let result1 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${us1.name}&api_key=32c7f2300cd26210d0ffcb714ce26ca7&limit=${limUs1}&format=json`);
    let result2 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${us2.name}&api_key=32c7f2300cd26210d0ffcb714ce26ca7&limit=${limUs2}&format=json`);
    result1 = await result1.json()
    result2 = await result2.json()
    let resMus1 = result1.toptracks.track.filter((e) => { if (e.name == escolha.nome) return e })[0]
    let resMus2 = result2.toptracks.track.filter((e) => { if (e.name == escolha.nome) return e })[0]

    return ([
      {
        posicao: resMus1['@attr'].rank,
        plays: resMus1.playcount
      },
      {
        posicao: resMus2['@attr'].rank,
        plays: resMus2.playcount
      },

    ])
  }
}