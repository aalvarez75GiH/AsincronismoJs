const API = 'https://rickandmortyapi.com/api/character/'
let arr = []


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

// const testFunct = (url) => {
//     //return valor
//     return new Promise((res,rej) =>{      
//      fetch(url) 
//      .then(response => response.json())
//      .then(x => {
//          console.log(x)
//          res(x)
//     })
// })
// }
function test(url) {
    //return valor
    fetch(url) 
     .then(response => response.json())
     .then(x => {
         console.log(x.dimension)
         return ''
})
}
// const renderElement = async(data) => {
//     const app = document.getElementById('app')
//     const characterView = document.getElementById('character-view')
    
//         console.log(data.results[0].id)
//         testFunct(data.results[0].origin.url)
//         .then(x => {
//         console.log(x.dimension)
//         dimension = x.dimension
//         const html = data.results.map(x =>
//             `<div id="container">
//                 <ul id="character-info">
//                      <div class="characterPic">
//                         <img src="${x.image}" alt="" />
//                      </div>
//                      <li>
//                         ${x.gender}
//                      </li>
//                      <li>
//                         ${x.name}
//                      </li>
//                      <li>
//                         ${x.origin.url}
//                      </li>
                     
//                 </ul>
//             </div>`   
//         )    
//         app.innerHTML = html.join('')
//     })    
// }           

const renderElement = async(data) => {
        const app = document.getElementById('app')
        const characterView = document.getElementById('character-view')
                
            console.log(data.results.map(x => x.origin.url))
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