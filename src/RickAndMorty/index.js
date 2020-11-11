const API = 'https://rickandmortyapi.com/api/character/'
let array = []


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
    const app = document.getElementById('app')
    const characterView = document.getElementById('character-view')
    const workData = data.results.map(x => console.log(x))
}
const renderElement = async(data) => {
    const app = document.getElementById('app')
    const characterView = document.getElementById('character-view')
    //console.log(data.results.map(x => x.origin.url))
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
                        ${x.origin.url}
                    </li>
                </ul>
            </div>`   
       )
       app.innerHTML = html.join('')

    
}
const renderApp = async() => {
    try{
        const data = await fetchData(API)
        //renderInfo(data)
        renderElement(data)
    }catch(error){
        console.error(error)
    }                
}

window.onload = () => {
    renderApp()

}
