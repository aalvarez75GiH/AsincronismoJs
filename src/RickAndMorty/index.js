const API = 'https://rickandmortyapi.com/api/character/'
const APID = 'https://rickandmortyapi.com/api/location/1/'

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

const fetchDimension = async(url) => {
    var prueba = 'whatever'
    console.log(prueba)
    return new Promise((res,rej) =>{
        fetch(url) 
        .then(response => response.json())
        .then(x => {
            console.log('the dimension is: ', x.dimension)
            prueba = x.dimension
            console.log('this is prueba: ',prueba)
            
            res (prueba)
            //return (console.log('bla bla ', `${x.dimension}`))
        })
    })
    .catch(err => console.error(err))
}

const testFunct = (url) => {
    //return valor
    return new Promise((res,rej) =>{      
     fetch(url) 
     .then(response => response.json())
     .then(x => {
         console.log(x.dimension)
         res(x.dimension)
    })
     
})
}


   


const renderElement = async(data,dimensionX) => {
    console.log('Dimension coming: ' , dimensionX)
    const app = document.getElementById('app')
    console.log(app)
    const characterView = document.getElementById('character-view')
    console.log(characterView)
    // const character = await fetchData(API)
    console.log(data.results)
    const html = data.results.map(x =>    
        // console.log(data.results.origin)
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
                        ${dimensionX}
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
        const newData = data.results.map(x => {
            console.log(x.origin.url)
            testFunct(x.origin.url)
            .then(x => {
                const dimensionX = x
                
                //if (x.origin.url){
                    renderElement(data, dimensionX)
                //}
            })
            
            
        })    
}


window.onload = () => {
    renderInfo()

}



//.then(x => console.log('this is a test: ', x))}
// ${fetchDimension(x.origin.url)
//     .then(x => console.log('the unknown dimension is: ',x))}
//${console.log(`Something is ${fetchDimension(x.origin.url).then(x => console.log(x))}`)}
//.then(x => console.log('test test ', x.toString()))}