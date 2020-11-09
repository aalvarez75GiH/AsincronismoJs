const API = 'https://rickandmortyapi.com/api/character/'

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
    return new Promise((res,rej) =>{
        fetch(url) 
        .then(response => response.json())
        .then(x => {
            console.log('the dimension is: ', x.dimension)
            //res(x)
            res (`${x.dimension}`)
        })
    })
    .catch(err => console.error(err))
}

const renderElement = async(data) => {
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
                   ${fetchDimension(x.origin.url).then(x => console.log(x))}
                    </li>
                </ul>
            </div>`   
    )    
    app.innerHTML = html.join('')

}           



const renderInfo = async() => {
    
    try {
        const data = await fetchData(API)
        renderElement(data)             
    }catch (error){
        console.error(error)
    }

}

window.onload = () => {
    renderInfo()

}



//.then(x => console.log('this is a test: ', x))}
// ${fetchDimension(x.origin.url)
//     .then(x => console.log('the unknown dimension is: ',x))}
//${console.log(`Something is ${fetchDimension(x.origin.url).then(x => console.log(x))}`)}