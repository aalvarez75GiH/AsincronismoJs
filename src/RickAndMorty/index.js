const API = 'https://rickandmortyapi.com/api/character/'


const renderInfo = (data) => {
        const characterView = document.getElementById('character-view')
        console.log(characterView)
        document.getElementById('app').innerHTML = characterView.innerHTML

        const character = document.getElementById('character')
        console.log(character)
        const charList = document.getElementById('char-list')
        console.log(charList)
        charList.innerHTML = '<li>'+ data + '</li>';
        // entryMealBtn.setAttribute('disabled', true)
        // const token = localStorage.getItem('token')
        // const mealsView = document.getElementById('meals-view');
        // document.getElementById('app').innerHTML = mealsView.innerHTML
        // const sendMealBtn =  document.getElementById('send-meal')
    
    
    
    
    // const button = document.getElementById('btn')
    // console.log(button)
}

const fetchData = async(url_api) => {
    return new Promise((res,rej) =>{
        fetch(url_api) 
        .then(response => response.json())
        .then(x => {
            res(x)
        })
})
}



window.onload = async() => {

    try {
        const data = await fetchData(API)
        console.log(data.info.count)
        renderInfo(data.info.count)
        const character = await fetchData(`${API}${data.results[0].id}`)
        console.log(character.name)
        const origin = await fetchData(character.origin.url) 
        console.log(origin.dimension)
        
    }catch (error){
        console.error(error)
    }
}


