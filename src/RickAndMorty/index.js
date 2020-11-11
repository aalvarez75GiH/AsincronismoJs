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



const stringToHtml = (s) => { 

    const parser = new DOMParser();
    const doc = parser.parseFromString(s, 'text/html');
    return doc.body.firstChild;

}
const foo = async(getData) => {
    
    
         if (getData.origin.url != "" && getData.location.url != ""){
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
        
    }else if(getData.origin.url === "" && getData.location.url != "")  {
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
        document.body.appendChild(elemento)
       
    }else if(getData.origin.url === "" && getData.location.url === ""){
        const message = 'NO Dimension'
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
    
     
    }
    



const superNice = async() => {
    
    const app = document.getElementById('app')
    const characterView = document.getElementById('character-view')
    const data = await fetchData(API)
    console.log(data)
    
    
           
        const mapData = await Promise.all(data.results.map(async i => {
            await foo(i)
            return i
        }))
}
               


const renderApp = async() => {
    try{
        await superNice()
        
    }catch(error){
        console.error(error)
    }                
}

window.onload = () => {
    renderApp()

}
