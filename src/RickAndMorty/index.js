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
// const renderInfo = async(data) => {
//     const app = document.getElementById('app')
//     const characterView = document.getElementById('character-view')
//     const workData = data.results.map(x => console.log(x))
// }


// ****************Under Construccion ***************************************
const stringToHtml = (s) => { 

    const parser = new DOMParser();
    const doc = parser.parseFromString(s, 'text/html');
    //10
    return doc.body.firstChild;

}

const superNice = async() => {
    const app = document.getElementById('app')
    const characterView = document.getElementById('character-view')
    const data = await fetchData(API)
    
    
    for (i = 0; i < 20  ; i++){
        
        const getData = await fetchData(`${API}${data.results[i].id}`)
        if(getData.origin.url === "" && getData.location.url === "" ){
            const message = 'NO Dimension'
            //console.log(getData.id)
            const elemento = stringToHtml(
                
                `<div id="container">
                    <ul id="character-info">
                        <div class="characterPic">
                            <img src="${getData.image}" alt="" />
                        </div>
                        <li>
                        ${getData.name}
                        </li>
                        <li>
                            ${getData.gender}
                        </li>
                        <li>
                            ${message}
                        </li>
                    </ul>
                </div>` 
                
                
            )
            document.body.appendChild(elemento)
        }
        
        if (getData.origin.url != ""){
            const origin = await fetchData(getData.origin.url)
            const elemento = stringToHtml(
                
                `<div id="container">
                    <ul id="character-info">
                        <div class="characterPic">
                            <img src="${getData.image}" alt="" />
                        </div>
                        <li>
                        ${getData.name}
                        </li>
                        <li>
                            ${getData.gender}
                        </li>
                        <li>
                        ${origin.dimension}
                        </li>
                    </ul>
                </div>` 
                
                
            )
            
        document.body.appendChild(elemento)
        
    }
        if (getData.location.url != ""){

            const location = await fetchData(getData.location.url)
            const elemento = stringToHtml(
                
                `<div id="container">
                    <ul id="character-info">
                        <div class="characterPic">
                            <img src="${getData.image}" alt="" />
                        </div>
                        <li>
                        ${getData.name}
                        </li>
                        <li>
                            ${getData.gender}
                        </li>
                        <li>
                        ${location.dimension}
                        </li>
                    </ul>
                </div>` 
                
                
            )
                // `<li>${getData.name}${getData.gender}</li>`)
            
            document.body.appendChild(elemento)
    } 
}
        
}

const renderApp = async() => {
    try{
        superNice()
        //renderElement()
    }catch(error){
        console.error(error)
    }                
}

window.onload = () => {
    renderApp()

}
