    const students = [
        {name: "Arnoldo",score: 40,school: "east"},
        {name: "Kris",score: 70,school: "east"},
        {name: "Miguel",score: 30,school: "east"},
        {name: "Mariangel",score: 40,school: "west"},
        {name: "Lorelei",score: 70,school: "west"},
        {name: "Race",score: 30,school: "west"},]

    
        const processStudents = (data) => {
            if (data.school === 'east'){
                
                if (data.score > 60){
                    console.log('This Student: ' + data.name + ' ' + 'from: '+ ' ' + data.school + ' ' + 'has approved with: ' + data.score + ' ' + ':)')
                }
                if (data.score < 60){
                    console.log('This Student: ' + data.name + ' ' + 'from: ' + ' ' + data.school + ' ' + 'has failed with: ' + data.score + ' ' + ':(')
                }
            }
            if (data.school === 'west'){
                if (data.score > 60){
                    console.log('This Student: ' + data.name + ' ' + 'from: '+ ' ' + data.school + ' ' + 'has approved with: ' + data.score + ' ' + ':)')
                }
                if (data.score < 60){
                    console.log('This Student: ' + data.name + ' ' + 'from: ' + ' ' + data.school + ' ' + 'has failed with: ' + data.score + ' ' + ':(')
                }
            }
        }


        const processAverage = (data) => {

            let addEast = 0,
            addWest = 0
            let count1 = 0,
            count2 = 0
                data.map(x => {
                    if (x.school === 'east'){
                        addEast += x.score
                        count1++
               
                    }
                    if (x.school === 'west'){
                        addWest += x.score
                        count2++
                    }
                    
                })
            
             return function average(info){
                console.log(info)
                console.log('the total points from East School: ' + ' ' + addEast + ' ' + 'and they are: ' + ' ' + count1 + ' ' + 'of them')
                console.log('the total points from West School: ' + ' ' + addWest + ' ' + 'and they are: ' + ' ' + count2 + ' ' + 'of them')

            }

           
        }

    const arrayMap = (data,callback) => {
        console.log('This data is coming from a Callback Process')
        data.map(x => callback(x))     
    }    

    arrayMap(students,processStudents) //callback
    console.log('*******************************')
    const average = processAverage(students) //closure
    average('This data is coming from a Closure Process')


// CallBacks exercises

// 1. ******************************************
// function sum(num1,num2) {
//     const resultado = num1 + num2
//     console.log(resultado)
    
// }

// function calc(num1,num2,callback){
//     return callback(num1,num2)

// }

// calc(4,4,sum)
// ******************************************
// 2. ******************************************

// function date (callback){
//     console.log(new Date)
//     setTimeout(function(){
//         let date = new Date
//         callback(date) //printDate(date)

//     },3000)
// }

// function printDate(dateNow){
//     console.log(dateNow)

// }

// date(printDate)

// 3. ******************************************

// const logCall = () => {
//     console.log('i am logCall Function, I was called backed')
// }

// setTimeout(logCall = () => {
//     console.log('i am logCall Function, I was called backed')
// }, 3000)

// const callback = () => {
//     console.log('le dio click')
// }

// 4. ******************************************
// const btn = document.getElementById('button')
// btn.addEventListener("click", callback = (e)=>{
//     console.log('The button was clicked')
// })




