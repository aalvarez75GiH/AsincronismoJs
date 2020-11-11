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
const stringToHtml = (s) => { //8

    const parser = new DOMParser();//9
    const doc = parser.parseFromString(s, 'text/html');
    //10
    return doc.body.firstChild; //11

}

const superNice = async() => {
    const app = document.getElementById('app')
    const characterView = document.getElementById('character-view')

    const data = await fetchData(API)
    console.log(data.results)
    for (i = 0; i < 20; i++){
       
        const getData = await fetchData(`${API}${data.results[i].id}`)
        const origin = await fetchData(getData.origin.url)
        console.log(getData.image)
        console.log(getData.gender)
        console.log(getData.name)
        console.log(origin.dimension)
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
            // `<li>${getData.name}${getData.gender}</li>`)
        
        
        
        
        
        console.log(elemento)
        document.body.appendChild(elemento)

    }
}
superNice()
// ****************Under Construccion ***************************************

const renderElement = async(data) => {
    const app = document.getElementById('app')
    const characterView = document.getElementById('character-view')
    
    const handleErrors = (response) => {
        if (!response.ok) console.error(`${response.status}: ${response.statusText}`);
        return response.json();
      }

    fetch(API)
    .then(handleErrors)
    .then(({ results }) => {
      const html = results.map(x =>
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
})
}    

const renderApp = async() => {
    try{
        //renderElement()
    }catch(error){
        console.error(error)
    }                
}

window.onload = () => {
    renderApp()

}
