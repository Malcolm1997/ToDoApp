const mysql = require("@mysql/xdevapi");

const config = {
    password: 'mnH4mvt9We4MryPquaja',
    user: 'malcolm',
    host: 'localhost',
    port: 33060,
    schema: 'mydb',
    connectTimeout: 10000,
}

let datosDB = []
let nombreCol = ["nombreTarea", "tarea", "fechaCreacion", "fechaLimite"]
let values = ["Estudiar", "Estudiar progrmacion", "1997-12-11", "1997-12-11"]

    mysql.getSession(config)
        .then( ( session )  => {
            return session.getSchema("mydb").getTable("tareas")
        })
        .then( table => {
            table.insert(nombreCol).values(values).execute()
        })
        .catch( err => {
            console.log("A ocurrido un error: " + err.message)
        })

    mysql.getSession(config)
        .then( ( session )  => {
            return session.getSchema("mydb").getTable("tareas")
        })
        .then( table => {
            table.select().execute()
            .then( tareas => {
                tareas.fetchAll()
            })
        })
        .catch( err => {
            console.log("A ocurrido un error: " + err.message)
        })


