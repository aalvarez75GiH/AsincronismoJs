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
    console.log(data)
}
const renderElement = async(data) => {
        array = data.results
        const app = document.getElementById('app')
        const characterView = document.getElementById('character-view')
        html = data.results.map(x =>
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
                     
                    </li>
                </ul>
            </div>`   
            )    
            app.innerHTML = html.join('')
}    
           
    

const renderApp = async() => {
    try{
        const data = await fetchData(API)
        renderInfo(data)
        renderElement(data)
    }catch(error){
        console.error(error)
    }                
}


window.onload = () => {
    renderApp()

}



//.then(x => console.log('this is a test: ', x))}
// ${fetchDimension(x.origin.url)
//     .then(x => console.log('the unknown dimension is: ',x))}
//${console.log(`Something is ${fetchDimension(x.origin.url).then(x => console.log(x))}`)}
//.then(x => console.log('test test ', x.toString()))}