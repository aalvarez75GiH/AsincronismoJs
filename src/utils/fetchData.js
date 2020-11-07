let xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest


const fetchData = (url_api) => {
    return new Promise((res,rej) =>{
        const xhttp = new xmlHttpRequest()
        xhttp.open('GET', url_api, true) //method, url, asincronismo true
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4){
                (xhttp.status === 200)
                ? res(JSON.parse(xhttp.responseText))
                : rej(new Error('Error', url_api))
            }
        })
        xhttp.send()
    })
  
} 

module.exports = fetchData