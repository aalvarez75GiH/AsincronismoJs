let xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest
let api = 'https://rickandmortyapi.com/api/character/'

const callback = (error,data) => {
    if (error) return console.error(error)
    console.log(data.info.count)
    console.log(data.results[0].name)
    // console.log(data.results[0].origin.url)
    let apiDim = data.results[0].origin.url
    let xhttp = new xmlHttpRequest()
    xhttp.open('GET', apiDim, true) //method, url, asincronismo true
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState === 4){
            if (xhttp.status === 200){
                const result = JSON.parse(xhttp.responseText)
                console.log(result.dimension)
            } else {
                const error = new Error('Error' + apiDim)
            }
        }
    }
    xhttp.send()    
    
}

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

fetchData(api, callback)


// let xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest
// let api = 'https://rickandmortyapi.com/api/character/'

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

// fetchData(api, function(error1,data1){
//     if (error1) return console.error(error1)
//     fetchData(api + data1.results[0].id,function(error2,data2){
//         if (error2) return console.error(error2)
//         fetchData(data2.origin.url, function(error3,data3){
//             if (error3) return console.error(error3)
//             console.log(data1.info.count)
//             console.log(data2.name)
//             console.log(data3.dimension)
//         })
//     })
// })




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
