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

const renderElement = async(data) => {
    const app = document.getElementById('app')
    console.log(app)
    const characterView = document.getElementById('character-view')
    console.log(characterView)
  
    // const character = await fetchData(API)
    console.log(data.results)
    const html = data.results.map(x => 
                `<div id="container">
                <ul id="character-info">
                    <div class="characterPic">
                        <img src="${x.image}" alt="" />
                    </div>
                    <li>
                        ${x.gender}
                    </li>
                    <li>
                        ${x.name}
                    </li>
                    <li>
                        ${x.dimension}
                    </li>
                </ul>
            </div>`   
    )
    app.innerHTML = html.join('')
    
}

            



const renderInfo = async() => {
    
    try {
        const data = await fetchData(API)
        renderElement(data)             
    }catch (error){
        console.error(error)
    }

}

window.onload = () => {
    renderInfo()

}


