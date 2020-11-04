let xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest
let api = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback){
    let xhttp = new xmlHttpRequest()
    xhttp.open('GET', url_api, true) //method, url, asincronismo true
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState === 4){
            if (xhttp.status === 200){
                callback(null,JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error' + url_api)
                return callback(error,null)
            }
        }
    }
    xhttp.send()
} 

fetchData(api, function(error1,data1){
    if (error1) return console.error(error1)
    fetchData(api + data1.results[0].id,function(error2,data2){
        if (error2) return console.error(error2)
        fetchData(data2.origin.url, function(error3,data3){
            if (error3) return console.error(error3)
            fetchData(data3.residents[0],function(error4,data4) {
                if (error4) return console.error(error4)
                console.log(data1.info.count)
                console.log(data2.name)
                console.log(data3.dimension)
                console.log(data3.type)
                console.log(data3.created)
                console.log(data4.species)
                console.log(data4.gender)
            })
            
        })
    })
})







// API con xmlHTTPRequest --- mi version ----------------------
// let xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest
// let api = 'https://rickandmortyapi.com/api/character/'



// const fetchSpecies = (urlSpe) => {
//     let xxx = new xmlHttpRequest()
//     xxx.open('GET', urlSpe , true)
//     xxx.onreadystatechange = function (event){
//         if (xxx.readyState === 4){
//             if (xxx.status === 200){
//                 const result = JSON.parse(xxx.responseText)
//                 console.log(result.species)
            
//             }else{
//                 const error = new Error('Error' + urlSpe)
//             }
//         }      
//     }
//     xxx.send()
// }

// const finalFetch = (finalApiUrl) => {
//     let xhttp = new xmlHttpRequest()
//     xhttp.open('GET', finalApiUrl, true) //method, url, asincronismo true
//     xhttp.onreadystatechange = function (event){
//         if (xhttp.readyState === 4){
//             if (xhttp.status === 200){
//                 const result = JSON.parse(xhttp.responseText)
//                 console.log(result.dimension)
//                 console.log(result.type)
//                 console.log(result.residents[0])
//                 console.log(result.created)
//                 fetchSpecies(result.residents[0])
//             } else {
//                 const error = new Error('Error' + finalApiUrl)
//             }
//         }
//     }
//     xhttp.send()
// }

// const callback = (error,data) => {
//     if (error) return console.error(error)
//     console.log(data.info.count)
//     console.log(data.results[0].name)
//     let apiDim = data.results[0].origin.url
//     // let apiRes = data.results[0].origin.url
//     finalFetch(apiDim)
// }

// function fetchData(url_api, callback){
//     let xhttp = new xmlHttpRequest()
//     xhttp.open('GET', url_api, true) //method, url, asincronismo true
//     xhttp.onreadystatechange = function (event){
//         if (xhttp.readyState === 4){
//             if (xhttp.status === 200){
//                 callback(null,JSON.parse(xhttp.responseText))
//             } else {
//                 const error = new Error('Error' + url_api)
//                 return callback(error,null)
//             }
//         }
//     }
//     xhttp.send()
// } 

// fetchData(api, callback)


// ***************** Prueba **************************************
// let xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest
// let api = 'https://rickandmortyapi.com/api/character/'

// const callback = (mensaje) => {
//     console.log(mensaje)
// }

// function fetchData(url_api, callback){
//     let xhttp = new xmlHttpRequest()
//     xhttp.open('GET', url_api, true) //method, url, asincronismo true
//     xhttp.onreadystatechange = function (event){
//         if (xhttp.readyState === 4){
//             if (xhttp.status === 200){
//                 callback('Soy CallBack')
//             } else {
//                 const error = new Error('Error' + url_api)
//                 return callback(error)
//             }
//         }
//     }
//     xhttp.send()
// } 

// fetchData(api, callback)
