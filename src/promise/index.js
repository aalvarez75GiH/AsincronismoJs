const somethingWillHappenOnTime = () => {
    return new Promise((resolve,reject) =>{
        if (true){
            setTimeout(() =>{
                resolve('Promise#2: true')
                // console.log('this message will occur after 3 seconds')

            },3000)
        }else{
            const error = new Error('Promise#2: An error has occurred: ')
            reject(error)
        }
    })
}

somethingWillHappenOnTime()
.then(res => console.log(res))
.catch(err => console.error(err))

const somethingWillHappenOnTime2 = () => {
    return new Promise((resolve,reject) =>{
        if (true){
            setTimeout(() =>{
                resolve('Promise#3: true')
                // console.log('this message will occur after 3 seconds')

            },4000)
        }else{
            const error = new Error('Promise#3: An error has occurred: ')
            reject(error)
        }
    })
}

somethingWillHappenOnTime2()
.then(res => console.log(res))
.catch(err => console.error(err))


// const somethingWillHappen = () => {
//     return new Promise((resolve,reject) =>{
//         if (true){
//             resolve(' Promise#1: Its resolved :)')

//         }else{
//             reject('Promise#1: it was not :(')
//         }
//     })
// }

// somethingWillHappen()
// .then(res => console.log(res))
// .catch(err => console.log(err))

Promise.all([somethingWillHappenOnTime(), somethingWillHappenOnTime2()])
.then(res => console.log(res))
.catch(err => console.error(err))

// Promise.all([somethingWillHappen(), somethingWillHappenOnTime()])
// .then(res => console.log(res))
// .catch(err => console.error(err))