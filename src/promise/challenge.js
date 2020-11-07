// Este es el mismo Challenge que se hizo en callback pero utilizando promsesas
const fetchData = require('../utils/fetchData')
let api = 'https://rickandmortyapi.com/api/character/'

fetchData(api)
.then(data => {
    console.log(data.info.count)
    return fetchData(`${api}${data.results[0].id}`)
})
.then(data => {
    console.log(data.name)
    return fetchData(data.origin.url)
})
.then(data => {
    console.log(data.dimension)
})
.catch(err => console.error(err))


