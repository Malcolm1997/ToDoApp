let arrayTareas = [
    {
        nombre: "Estudiar",
        tarea: "Tengo tareas que estudiar",
        fechaDeCreacion: "10/12/1997",
        fechaLimite: "12/12/2002"
    },
    {
        nombre: "Entrenar",
        tarea: "Tengo que entrenar",
        fechaDeCreacion: "10/10/1999",
        fechaLimite: "12/10/2002"
    }
]


window.addEventListener( "load" , () =>{

    let $ = document.querySelector

    let bottonAgregar = document.querySelector(".btnAgregar")
    let ulTareas = document.querySelector(".listaTareas")
    let form = document.querySelector("form")

    form.addEventListener( "submit", e => {
        e.preventDefault()
    })
    
    const renderizarTareas = ()=>{

        ulTareas.innerHTML = ""

        arrayTareas.forEach( el => {
    
            ulTareas.innerHTML += `<li>
                <h3>${el.nombre}</h3>
                <p>${el.tarea}</p>
                <p>Fecha de creacion: ${el.fechaDeCreacion}</p>
                <p>Fecha Limite: ${el.fechaLimite}</p>
            </li>`

        })
    }

    bottonAgregar.addEventListener( "click", ()=> {

        let nombre = document.querySelector("#nombre")
        let tarea = document.querySelector("#tarea")
        let fechaLimite = document.querySelector("#fechaLimite")
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);


        arrayTareas.push(
            {
                nombre: nombre.value,
                tarea: tarea.value,
                fechaDeCreacion: `${hoy.getDate()}/${hoy.getMonth() + 1}/${hoy.getFullYear()}`,
                fechaLimite: fechaLimite.value
            }
        )

        renderizarTareas()

    })


    renderizarTareas()


})