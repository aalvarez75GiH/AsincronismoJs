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

const concatElem = (ID, image,name,gender,dimension) => {
    const elemento = stringToHtml(
            
        `<div id="container" class="selected" value="${ID}">
        
            <ul id="character-info">
                <div id="characterPic">
                    <img src="${image}" alt=""/>
                </div>
                <li id="liName">
                    ${name}
                </li>
                <li id="liGender">
                    ${gender}
                </li>
                <li id="liDim">
                    ${dimension}
                </li>
                <li id="liBtn">
                    <button id="btnId${ID}" class="classBtn" value="${ID}">Out</button>
                </li>
            </ul>
            
        </div>`
        )
        app.appendChild(elemento)
}

const renderElements = async(getData) => {
    if (getData.origin.url != "" && getData.location.url != ""){
        const root = await fetchData(getData.origin.url)
        concatElem(getData.id,getData.image,getData.name,getData.gender,root.dimension)
    }
    if(getData.origin.url === "" && getData.location.url != ""){
             root = await fetchData(getData.location.url)
             concatElem(getData.id,getData.image,getData.name,getData.gender,root.dimension)
    }
        // const elemento = stringToHtml(
            
        //     `<div id="container" class="selected" value="${getData.id}">
            
        //         <ul id="character-info">
        //             <div id="characterPic">
        //                 <img src="${getData.image}" alt=""/>
        //             </div>
        //             <li id="liName">
        //                 ${getData.name}
        //             </li>
        //             <li id="liGender">
        //                 ${getData.gender}
        //             </li>
        //             <li id="liDim">
        //                 ${root.dimension}
        //             </li>
        //             <li id="liBtn">
        //                 <button id="btnId${getData.id}" class="classBtn" value="${getData.id}">Out</button>
        //             </li>
        //         </ul>
                
        //     </div>`
        //     )
           
        // app.appendChild(elemento)
} 
        
     


const testingFunctions = () => {
    alert('testing some shits and some Functions')
       
    }
    
    
const actionBtn = () => {
    const btn = document.getElementById('btn')
    btn.addEventListener("click",testingFunctions)

}

const clickId = () => {
    const testing1 = document.querySelectorAll('.classBtn')
    console.log(testing1)
    testing1.forEach(x => {
        const father = x.parentElement
        const granpa = father.parentElement
        const superGrandpa = granpa.parentElement 
        superGrandpa.classList.remove('selected')
        x.addEventListener("click", () => {
        superGrandpa.classList.add('selected') 
        console.log(' Character #: ' + ' ' + x.value + ' ' + 'has been deleted')
        console.log(x.value)
        const getSelected = document.querySelectorAll('.selected')
        console.log(getSelected)
        const getApp = document.getElementById('app')
        getApp.removeChild(getSelected[0])
       })
        console.log(x.value)
    })
    
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
