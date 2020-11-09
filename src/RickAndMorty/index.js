const API = 'https://rickandmortyapi.com/api/character/'

const fetchData = async(url_api) => {
    return new Promise((res,rej) =>{
        fetch(url_api) 
        .then(response => response.json())
        .then(x => {
            res(x)
        })
    })
    .catch(err => console.error(err))
}

const renderInfo = async(data) => {
    try {
        const data = await fetchData(API)
        console.log(data.info.count)
        const characterId = await fetchData(`${API}${data.results[0].id}`)
        console.log(characterId.name)
        console.log(characterId.image)
        const origin = await fetchData(characterId.origin.url)
        console.log(origin.dimension)
        // const image = await fetchData(characterId.image)
        // console.log(image)

        // ********************************************************
        const app = document.getElementById('app')
        console.log(app)
        const characterView = document.getElementById('character-view')
        console.log(characterView)
        // const node = document.createElement("DIV")
        // node.classList.add("character")
        //const test2 = characterView.appendChild(node)
        //console.log(test2)
        characterView.innerHTML =
        
        `<div id="container">
            <ul id="character-info">
                <div class="character">
                    <img src="${characterId.image}" alt="" />
                </div>
                <li>
                    ${data.info.count}
                </li>
                <li>
                    ${characterId.name}
                </li>
                <li>
                    ${origin.dimension.name}
                </li>
            </ul>
        </div>`
        
        document.getElementById('app').innerHTML = characterView.innerHTML
            
    }catch (error){
        console.error(error)
    }

    // const button = document.getElementById('btn')
    // console.log(button)
}

window.onload = () => {
    renderInfo()

}


