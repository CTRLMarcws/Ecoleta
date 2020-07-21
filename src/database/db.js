const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

db.serialize( () => {
    
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?)
    `

    const values = [
        "url",
        "Colectoria",
        "Endereço",
        "Endereço2",
        "São Paulo",
        "São Paulo",
        "Papeis e Papelão"
    ]

    function afterInsertData(err){

        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    //db.run( query, values, afterInsertData )

    db.all(`SELECT name FROM places`, function(err, rows) {
        if(err){
            return console.log(err)
        }

        console.log("Registros:")
        console.log(rows)
    })

})

//banco de dados - sqlite 3 - 0:44:26