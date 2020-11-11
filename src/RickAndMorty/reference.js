// ******************************************************************************************
let mealState = []
let orderState = []
let userState = []
let ruta = 'login' 
//login,register o 
let user = {}
let prep
let nombreMeal = String
let nombreUser = String

const stringToHtml = (s) => { //8

    const parser = new DOMParser();//9
    const doc = parser.parseFromString(s, 'text/html');
    //10
    return doc.body.firstChild; //11

}

// Renderiza el menu de platos de comida
const renderItem = (item) =>{ //6
    const elemento = stringToHtml(`<li data-id="${item._id}">${item.name}</li>`)//7
    elemento.addEventListener('click',() =>{
        const mealsList = document.getElementById('meals-list'); //3
        Array.from(mealsList.children).forEach(x => x.classList.remove('selected')); //17
        elemento.classList.add('selected'); //18
        const mealsIdInput = document.getElementById('meals-id-btn');//19
        mealsIdInput.value = item._id;//19

    })
    
    return elemento;
}
//Preparar el backup
const prepBackup = (order,meals) => {
    const meal = meals.find(meal => meal._id === order.meal_id)
    // const nameUser = users.find(name => order.user_id === users._id)
    // console.log(nameUser)
    return meal;
}

// *************************** Under Construction ************************************

const deleteMealAndOrder = (mealDeleted) => {
    let flag = Boolean
    const token = localStorage.getItem('token')
    const meal_deleated = mealDeleted
    // console.log('comida que fue borrada: ', meal_deleated)
    alert('Important: If there are orders related with that meal they will be removed from database')
    fetch('http://localhost:3000/api/orders') //1
            .then(response => response.json()) //2
            .then(r => {
                const template = r.map(t => {
                    mealOn_Order = t.meal_id
                    if (meal_deleated === mealOn_Order){
                        console.log('meal deleated:', meal_deleated)
                        console.log('meal on Order:', mealOn_Order)
                        flag = false
                        const id_order = t._id
                        fetch('http://localhost:3000/api/orders/' + id_order, { //fetch para eliminar meals
                        method:'delete',
                        headers:{
                            'Content-Type': 'application/json',
                            authorization: token,
                        },
                    })
                    .then(x => x) 
                }else{
                    flag = true
                }
            })
            if (flag){
                return alert('There are no orders related with the meal deleted :)')     
            }else{
                alert('Orders related were removed succesfully, thanks :)')
            }
          
        })
        .then(x => {
            console.log('hey lo logre')
            renderOrders()
        })    
    }
    
// *************************** Under Construction ************************************

// Render de las Orders
const renderOrder = (order, meals) => { //25
    const meal = meals.find(meal => meal._id === order.meal_id)//26
    const element = stringToHtml(`<li data-id="${order._id}"> ${meal.name} - ${order.user_id}</li>`)//27
    return element;    
}

const renderMeal = () => {
    const entryMealBtn = document.getElementById('entryBtn')
    entryMealBtn.setAttribute('disabled', true)
    const token = localStorage.getItem('token')
    const mealsView = document.getElementById('meals-view');
    document.getElementById('app').innerHTML = mealsView.innerHTML
    const sendMealBtn =  document.getElementById('send-meal')
   


    // // action
    sendMealBtn.addEventListener("click" , () =>{
        const nameFood = entryText.value
        const descFood = entryDesc.value
        
        const infoMeal={
        name: nameFood,
        desc: descFood,
        }

        fetch('http://localhost:3000/api/meals',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                authorization: token,
            },
            body: JSON.stringify(infoMeal)
        })
        // .then(x => console.log(x))
        .then(x => x)
        alert('new meal added, click OK to continue...')
        const ordersView = document.getElementById('orders-view')
        document.getElementById('app').innerHTML = ordersView.innerHTML            
        renderData()        
    })
        
}
// funcion para hacer Log Out *********************************************
const logOut = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    alert('Click OK to log out')
    renderLogin()
}
// *************** Upgrading *****************************************************
const deleteMeal = () => {
    const deleteMealBtn = document.getElementById('deleteBtn')
    deleteMealBtn.setAttribute('disabled', true)
    const token = localStorage.getItem('token')
    const orderForm = document.getElementById('order')
 
    
    const mealId = document.getElementById('meals-id-btn')
    const mealIdValue = mealId.value; 
    if (!mealIdValue){ //31
        alert('Seleccione una opcion de comida');
        deleteMealBtn.removeAttribute('disabled')
        return;
    }
    const meal_id = mealIdValue
 
    // axios.delete("/persona_eliminar/" + id)
    fetch('http://localhost:3000/api/meals/' + meal_id, { //fetch para eliminar meals
            method:'delete',
            headers:{
                'Content-Type': 'application/json',
                authorization: token,
            },
        })
        .then(x => {
 
           alert('Meal will be deleted, Click OK to continue...')
           deleteMealAndOrder(meal_id)
           
        })
            
       }
           

// *************** Upgrading *****************************************************

const renderData = () => {
    
    const inicializaFormulario = () => {
        
        const token = localStorage.getItem('token')   
        const orderForm = document.getElementById('order');//28
        orderForm.onsubmit = (e) =>{ //29
        btn.setAttribute('disabled', true)
        e.preventDefault(); 
       
        const mealId = document.getElementById('meals-id-btn')//30
        mealIdValue = mealId.value; 
        if (!mealIdValue){ //31
            alert('Please, choose an option');
            btn.removeAttribute('disabled')
            return;
        }
        const order = { //32
            meal_id: mealIdValue,
            user_id: user._id,
        }
    // fetch para hacer Post de ordenes
        fetch('http://localhost:3000/api/orders',{ //33
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                authorization: token,
            },
            body: JSON.stringify(order)
        })
        .then(x => x.json())
        .then(respuesta => {
            const renderedOrder = renderOrder(respuesta, mealState);//34
            prep = prepBackup(respuesta, mealState)
            nombreMeal = prep.name
            const orderList = document.getElementById('order-list');//35
            orderList.appendChild(renderedOrder);
            btn.removeAttribute('disabled')

            // Fetch para traer la data de Usuarios de la BD
            fetch('http://localhost:3000/api/users') //1
            .then(response => response.json()) //2
            .then(dataUser => {
            userState = dataUser
            const user = userState.find(name => name._id === order.user_id ) 
            nombreUser = user.nombre

            const bOrder = { //32
                meal_id: mealIdValue,
                user_id: user._id,
                meal_name: nombreMeal,
                user_name: nombreUser
            }
            
            // Fetch para hacer el post de la orden en el modelo de Backup
            fetch('http://localhost:3000/api/backup',{ //33
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                authorization: token,
            },
            body: JSON.stringify(bOrder)
        })
        .then(x => x.json())
        .then(respuesta => respuesta)
            // console.log('se guardo en backup');
        // })
    })
})
}
    const entryMealBtn = document.getElementById('entryBtn')
    entryMealBtn.addEventListener("click", renderMeal)
    
    
    const deleteMealBtn = document.getElementById('deleteBtn')
    deleteMealBtn.addEventListener("click", deleteMeal)
    
}


    const inicializaDatos = () => {
        const entryMealBtn = document.getElementById('entryBtn')
        const deleteMealBtn = document.getElementById('deleteBtn')
        // fetch de GET de las meals
        fetch('http://localhost:3000/api/meals') //1
        .then(response => response.json()) //2
        .then(data => {
            mealState = data;
            const mealsList = document.getElementById('meals-list'); //3
            const btn = document.getElementById('btn'); //4
            const listItems = data.map(renderItem); //5 
            mealsList.removeChild(mealsList.firstElementChild);//12
            listItems.forEach(element => { //13
                mealsList.appendChild(element); //14
            });
            btn.removeAttribute('disabled'); //15
            entryMealBtn.removeAttribute('disabled', true)
            deleteMealBtn.removeAttribute('disabled', true)
            
            // fetch de GET de orders
            fetch('http://localhost:3000/api/orders')//20
            .then(response => response.json())
            .then(ordersData => {
                const orderList = document.getElementById('order-list');//21
                const listOrders = ordersData.map(orderData => renderOrder(orderData, data));//22
                orderList.removeChild(orderList.firstElementChild);//23
                listOrders.forEach(element => orderList.appendChild(element)); //24
                     
            })
        })
    }
    //lamando las funciones internas
    inicializaFormulario()
    inicializaDatos()

    //log out button
    const logOutBtn = document.getElementById('logOutBtn')
    logOutBtn.addEventListener("click",logOut)
}


const renderApp = () => {
    const token = localStorage.getItem('token')
    if (token){
        user = JSON.parse(localStorage.getItem('user')) 
      
        return renderOrders()            
    }
    renderLogin()
}

const renderOrders = () => {
    const ordersView = document.getElementById('orders-view')
    document.getElementById('app').innerHTML = ordersView.innerHTML
    renderData()
   
}

const renderRegister = () =>{
   
    const registerView = document.getElementById('register-view')
    document.getElementById('app').innerHTML = registerView.innerHTML
    const registerForm = document.getElementById('register-form')
    
    
            
    registerForm.onsubmit = (e) => {
       
        e.preventDefault() //los onsubmit reciben un evento y debemos prevenirlos para no hacer refresh
        const nombre = document.getElementById('nombre').value
        const direccion = document.getElementById('direccion').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        
        
        const user = {
                nombre: nombre,
                direccion: direccion,
                email: email,
                password: password,
            }

            console.log(user.nombre)
        fetch('http://localhost:3000/api/users/register',{ //33
            method:'POST',
            headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
    .then(x => {
        console.log(x)
        fetch('http://localhost:3000/api/auth/login', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
            // body: JSON.stringify({ email: email, password: password }) Esto es lo mismo que lo de 
            //arriba pero como los nombres de la variables es el mismo se puede acortar  
        })
        .then( x => x.json())
        .then(response => {
            localStorage.setItem('token', response.token)
            ruta = 'orders'
            return response.token
            
        })
        alert('Now you have signed up, Log in with your new creadentials')
        renderLogin()

}) 
}
}
    
    
const renderLogin = () =>{
    
    const loginView = document.getElementById('login-view')
    document.getElementById('app').innerHTML = loginView.innerHTML
    const loginForm = document.getElementById('login-form')
    
    loginForm.onsubmit = (e) => {
        
       
        e.preventDefault() //los onsubmit reciben un evento y debemos prevenirlos para no hacer refresh
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        fetch('http://localhost:3000/api/auth/login', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
                // body: JSON.stringify({ email: email, password: password }) Esto es lo mismo que lo de 
                //arriba pero como los nombres de la variables es el mismo se puede acortar  
            })
            .then(res => {
                if (res.status == 404){
                    alert('usuario No encontrado')
                }
                return res.json()
            })
            .then(response => {
                localStorage.setItem('token', response.token)
                ruta = 'orders'
                return response.token
            })
            .then(token => {
                return fetch('http://localhost:3000/api/auth/me',{
                    method:'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    authorization: token,
                },
            })
        })
        .then(x => x.json())
            // .then(user => console.log(user))
            .then(fetchedUser => {
                localStorage.setItem('user', JSON.stringify(fetchedUser) )
                user = fetchedUser
                renderOrders()            
            })
     }
        const regButton = document.getElementById('regB')
        regButton.addEventListener("click", renderRegister)

    }


    
window.onload = () => {
    renderApp()
}
// ******************************************************************************************