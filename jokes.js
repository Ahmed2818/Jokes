var jokeel = document.getElementById('joke')
var jokebtn = document.getElementById('jokeBtn')

jokebtn.addEventListener('click', generatejoke)


generatejoke()

// function generatejoke(){
//     var config = {
//         headers:{
//             'Accept' : 'application/json',
//         },
//     }
//     fetch('http://icanhazdadjoke.com',
//     config).then((res) => res.json())
//     .then((data) => {
//         jokeel.innerHTML = data.joke
//     })
// }

async function generatejoke(){
    var config = {
        headers:{
            'Accept' : 'application/json',
        },
    }
   var res = await fetch('http://icanhazdadjoke.com',config)

   var data = await res.json()
   jokeel.innerHTML = data.joke
}