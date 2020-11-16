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
{/* <input type="hidden" id="char-id-btn" value="${getData.id}"></input> */}
const stringToHtml = (s) => { 

    const parser = new DOMParser();
    const doc = parser.parseFromString(s, 'text/html');
    return doc.body.firstChild;

}
const renderElements = async(getData) => {
    if (getData.origin.url != "" && getData.location.url != ""){
        const origin = await fetchData(getData.origin.url)
        const elemento = stringToHtml(
            
            `<div id="container" class="selected">
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
                
                   <button id="btnId${getData.id}" class="classBtn" value="${getData.id}">test</button>
                
                
            </div>`
            )
           
        app.appendChild(elemento)

      
               
        
    }else if(getData.origin.url === "" && getData.location.url != "")  {
        const location = await fetchData(getData.location.url)
        const elemento = stringToHtml(
            
            `<div id="container" class="selected">
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
                
                <button id="btnId${getData.id}" class="classBtn" value="${getData.id}">test</button>
                
            </div>` 
            
            
        )
        app.appendChild(elemento)
        
        
    } 
       

}

        
        
const controlRender = async() => {
    
    const app = document.getElementById('app')
    const data = await fetchData(API)
    array = data
    
    const mapArray = await Promise.all(array.results.map(async i => {
            await renderElements(i)
            clickId()
            
            
    }))
    
       
}
         

const testingFunctions = () => {
alert('testing some shits and some Functions')
   
}


const actionBtn = () => {
    const btn = document.getElementById('btn')
    btn.addEventListener("click",testingFunctions)

}

const showId = (id) => {
   
    const formId = document.querySelectorAll(`#btnId${id}`)
     for (var i = 0; i < formId.length; i++) {
        console.log('buttons' , formId[i]);
        console.log('Value: ' , formId[i].value);
    }
    
}

const deleteChar = (charId,father) => {
    console.log(father)
    father.classList.add('.other')
    console.log('Here i am going to delete character#: ', charId)
    return

}

const clickId = async() => {
    //const testing1 = document.getElementById('btnId17')
    const testing1 = document.querySelectorAll('.classBtn')
    console.log(testing1)
    testing1.forEach(x => {
        x.addEventListener("click", () => {
            deleteChar(x.value,x.parentElement)
            console.log(' Character #: ' + ' ' + x.value + ' ' + 'has been deleted')
        })
        console.log(x.value)
    })
   
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
