let xmlHttpRequest = require('xmlhttprequest')

function fetchData(url_api, callback){
    console.log('modificando')
    let xhttp = new xmlHttpRequest()
    xhttp.open('GET', url_api, true) //method, url, asincronismo true
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState === 4){
            if (xhttp.status === 200){
                callback(null,JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error' + url_api)
            }
        }
    }
} 
function printData(){

}