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

const renderElement = (info) => {
    const app = document.getElementById('app')
    console.log(app)
    const characterView = document.getElementById('character-view')
    console.log(characterView)
    //console.log('this is the data:' , data)
    characterView.innerHTML =
    // const html = data.map(character =>
    // )    
    //app.innerHTML = html.join('');
    
    `<div id="container">
        <ul id="character-info">
            <div class="characterPic">
                <img src="${info.pic}" alt="" />
            </div>
            <li>
                ${info.count}
            </li>
            <li>
                ${info.name}
            </li>
            <li>
                ${info.dimension}
            </li>
        </ul>
    </div>`
    

    
    app.innerHTML = characterView.innerHTML 
    
}


const renderInfo = async() => {
    
    try {
        
        const data = await fetchData(API)
        const results = data.results
        const characterId = await fetchData(`${API}${data.results[0].id}`)
        const origin = await fetchData(characterId.origin.url)
        
        const info = {
            count:data.info.count,
            name: characterId.name,
            pic: characterId.image,
            dimension:origin.dimension,
        }  
        const why = results.map(x => renderElement(info))
       
                    
    }catch (error){
        console.error(error)
    }

}

window.onload = () => {
    renderInfo()

}


