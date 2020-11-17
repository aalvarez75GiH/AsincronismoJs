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

const renderElements = (ID, image,name,gender,dimension) => {
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
    
    
const actionBtn = () => {
    const btn = document.getElementById('btn')
    btn.addEventListener("click", ()=>{
        //alert('testing some shits and some Functions')
        renderApp()
    })

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
    
    const mapArray = await Promise.all(array.results.map(async getData => {
        if (getData.origin.url != "" && getData.location.url != ""){
            const root = await fetchData(getData.origin.url)
            renderElements(getData.id,getData.image,getData.name,getData.gender,root.dimension)
        }
        if(getData.origin.url === "" && getData.location.url != ""){
            root = await fetchData(getData.location.url)
            renderElements(getData.id,getData.image,getData.name,getData.gender,root.dimension)
        }
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