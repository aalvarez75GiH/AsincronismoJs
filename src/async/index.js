const doSomethingAsync = () => {
    return new Promise((resolve,reject) =>{
        (true) 
        ? setTimeout(() => resolve('Do something Async'),3000)
        : reject(new Error('Error')) 

        })
    
}

// const doSomething = async () => {
//     const something = await doSomethingAsync()
//     console.log(something)

// }

async function doSomething(){
    const something = await doSomethingAsync()
    console.log(something)

}

console.log('before')
doSomething()
console.log('after')

const anotherFunction = async () => {

    try {
        const something = await doSomethingAsync()
        console.log('another Function working here: ', something)

    } catch (error){
        console.log(error)
    }
}

console.log('before another Function')
anotherFunction()
console.log('after another Function')