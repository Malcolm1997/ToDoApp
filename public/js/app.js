let arrayTareas = [
    {
        id:0,
        nombre: "Estudiar",
        tarea: "Tengo tareas que estudiar",
        fechaDeCreacion: "10/12/1997",
        fechaLimite: "12/12/2002"
    },
    {
        id:1,
        nombre: "Entrenar",
        tarea: "Tengo que entrenar",
        fechaDeCreacion: "10/10/1999",
        fechaLimite: "12/10/2002"
    }
]

let tareaUsuario = () => {
    let id = arrayTareas.length == 0 ? 0: arrayTareas[arrayTareas.length-1].id + 1
        
    let nombre = document.querySelector("#nombre").value
    
    let tarea = document.querySelector("#tarea").value
    
    let fechaLimite = document.querySelector("#fechaLimite")
    fechaLimite = new Date(fechaLimite.value)
    fechaLimite.setDate(fechaLimite.getDate()+1)
    fechaLimite = fechaLimite.toLocaleDateString()

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido).toLocaleDateString();

    return {
            id:id,
            nombre: nombre,
            tarea: tarea,
            fechaDeCreacion:hoy ,
            fechaLimite: fechaLimite 
    }
}


const renderizarTareas = (elementoHTML, array)=>{
    elementoHTML.innerHTML = ""

    array.forEach( el => {

        elementoHTML.innerHTML += 
        `<li>
            <h3>${el.nombre}</h3>
            <p>${el.tarea}</p>
            <p>Fecha de creacion: ${el.fechaDeCreacion}</p>
            <p>Fecha Limite: ${el.fechaLimite}</p>
            <button onclick="eliminarTarea(${el.id})">Eliminar tarea </button>
            <button onclick="modificarTarea(${el.id})">Modificar tarea </button>
        </li>`

    })
}


const modificarTarea = (id) => {

    let ulTareas = document.querySelector(".listaTareas")
    elementoEnccontrado = arrayTareas.find( el => el.id == id)
    let index = arrayTareas.findIndex( el => el.id == id)
    arrayTareas[index] = tareaUsuario()
    renderizarTareas(ulTareas, arrayTareas)    
    
}

const eliminarTarea = (id) => {

    let ulTareas = document.querySelector(".listaTareas")
    elementoEnccontrado = arrayTareas.find( el => el.id == id)
    let index = arrayTareas.findIndex( el => el.id == id)
    arrayTareas.splice(index,1)
    renderizarTareas(ulTareas, arrayTareas)  
}

window.addEventListener( "load" , () =>{

    let bottonAgregar = document.querySelector(".btnAgregar")
    let ulTareas = document.querySelector(".listaTareas")
    let form = document.querySelector("form")

    form.addEventListener( "submit", e => {
        e.preventDefault()
    })
    
    bottonAgregar.addEventListener( "click", ()=> {

        arrayTareas.push(tareaUsuario())

        renderizarTareas(ulTareas, arrayTareas)
    })
    
    renderizarTareas(ulTareas, arrayTareas)
})