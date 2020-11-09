const url = 'https://rickandmortyapi.com/api/character/'

const handleErrors = (response) => {
  if (!response.ok) console.error(`${response.status}: ${response.statusText}`);
  return response.json();
}

fetch(url)
  .then(handleErrors)
  .then(({ results }) => {
    const html = results.map(character =>
      `<li>
        <img src="${character.image}" alt="" />
        ${character.name}
      </li>`
    );
    const lista = document.getElementById('character-list')

    lista.innerHTML = html.join('');
  })
  .catch(err => console.log(err));
  
    

