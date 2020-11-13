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

{/* <img id="idPics" src="${getData.image}" alt=""/> */}

const stringToHtml = (s) => { 

    const parser = new DOMParser();
    const doc = parser.parseFromString(s, 'text/html');
    return doc.body.firstChild;

}
const renderElements = async(getData) => {
    
    
         if (getData.origin.url != "" && getData.location.url != ""){
            const origin = await fetchData(getData.origin.url)
            const elemento = stringToHtml(
                
                `<div id="container">
                    <ul id="character-info">
                        <div id="characterPic">
                         <img src="${getData.image}" alt=""/>
                          
                        </div>
                        <li id="liName">
                        ${getData.name}
                        </li>
                        <li id="liGender">
                            ${getData.gender}
                        </li>
                        <li id="liDim">
                            ${origin.dimension}
                        </li>
                    </ul>
                </div>` 
                
                
            )
            
        app.appendChild(elemento)
        
    }else if(getData.origin.url === "" && getData.location.url != "")  {
        const location = await fetchData(getData.location.url)
        const elemento = stringToHtml(
            
            `<div id="container">
                <ul id="character-info">
                    <div id="characterPic">
                         <img src="${getData.image}" alt=""/> 

                    </div>
                    <li id="liName">
                    ${getData.name}
                    </li>
                    <li id="liGender">
                        ${getData.gender}
                    </li>
                    <li <li id="liDim">
                    ${location.dimension}
                    </li>
                </ul>   
            </div>` 
            
            
        )
        app.appendChild(elemento)
    }   
}
    



const controlRender = async() => {
    
    const app = document.getElementById('app')
    const characterView = document.getElementById('character-view')
    const data = await fetchData(API)
    array = data
    console.log(array)
    
    const mapArray = await Promise.all(array.results.map(async i => {
            await renderElements(i)
            return i
        }))
}
         

const testingFunctions = () => {
alert('testing some shits and some Functions')
   
}


// const index = array.results.indexOf(0)
// console.log(index)



const actionBtn = () => {
    const btn = document.getElementById('btn')
    console.log(btn)
    btn.addEventListener("click",testingFunctions)

}


const renderApp = async() => {
    try{
        await controlRender()
        
    }catch(error){
        console.error(error)
    }                
}

window.onload = () => {
    renderApp()
    actionBtn()
    
}
