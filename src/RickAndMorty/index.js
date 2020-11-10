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

var num = 15;
var a = num.toString();

const toStrinG = (dimension) => {
    var dim = dimension
    console.log(dim)
    return dim  
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
                            ${toStrinG(x.origin.url)}
                         </li>
                         
                    </ul>
                </div>`   
            )    
            app.innerHTML = html.join('')
}    
           
    

const renderInfo = async() => {
    
    //try {
        const data = await fetchData(API)
        renderElement(data)    
}


window.onload = () => {
    renderInfo()

}



//.then(x => console.log('this is a test: ', x))}
// ${fetchDimension(x.origin.url)
//     .then(x => console.log('the unknown dimension is: ',x))}
//${console.log(`Something is ${fetchDimension(x.origin.url).then(x => console.log(x))}`)}
//.then(x => console.log('test test ', x.toString()))}