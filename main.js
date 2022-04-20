const url = 'https://jsonplaceholder.typicode.com/users'
const name = document.getElementById('name')
const username = document.getElementById('username')
const email = document.getElementById('email')
const btn = document.getElementById('btn')
const addNewUser = document.getElementById('send')
//Первое задание
function Users (){
    const xhr = new XMLHttpRequest()
    xhr.open('GET',url);
    xhr.responseType = 'json';
    const list = document.getElementById('list')
    xhr.onload = function (){
        console.log(xhr.response)
        xhr.response.forEach(e => {
            list.innerHTML += `<ul>
             <p>Name: ${e.name}</p>
             <li>Id: ${e.id}</li>
             <li>Username: ${e.username}</li>
             <li>Email: ${e.email}</li>
             <li>Phone: ${e.phone}</li>
             </ul>`
        })
    }
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()
}
btn.addEventListener('click', Users)

//Второе задание
function postUserInfo(){
    const user = new XMLHttpRequest();
    if (!name.value.trim() || !username.value.trim() || !email.value.trim())
        alert('Все поля обязательны к заполнению,пожалуйста заполните их!')
    else {
        const userData = {
            name: name.value,
            username: username.value,
            email: email.value
        }
        user.open('addNewUser', url)
        user.response = 'json'
        user.onload = function (){
            console.log(user.response)
    }
        user.setRequestHeader('Content-type','application/json')
        user.send(JSON.stringify(userData))

    }

}
addNewUser.addEventListener('click', postUserInfo)

