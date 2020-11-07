function makeRequest(url) {
    return new Promise((res,rej) => {
        console.log('Making request to: ', url)
        if (url === 'Google') {
            res('www.google.com')
        }else{
            rej('This is not Google, I wanna go to Google :(')
        }
    })
}

function processRequest(response) {
    return new Promise((res,rej) => {
        console.log('Processing Response')
        res(`This is an extra information + ${response}`)
    })
}

makeRequest('Google')
.then(data => {
    console.log('Response Received')
    return processRequest(data)
})
.then(data => {
    console.log(data)
})
.catch(err => console.log(err))

// ------------------ con Async/Await ----------------------------- 
const makeRequest = async(url) => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            console.log('Making request to: ', url)
            if (url === 'Google') {
                res('www.google.com')
            }else{
                rej('This is not Google, I wanna go to Google :(')
            }    
        },3000)
    })
}

const processRequest = (response) => {
    return new Promise((res,rej) => {
        console.log('wait...Processing Response')
        setTimeout(() => {
            res(`This is an extra information + ${response}`)        
        },3000)
        
    })
}

const processData = async (url) => {
    try {
        console.log('wait...')
        const data = await makeRequest(url)
        console.log('Response Received') 
        const process = await processRequest(data)
        console.log(process)
    }catch(error){
        console.error(error)
    }       
}

processData('Google')


