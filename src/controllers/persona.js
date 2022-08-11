const db = require("../config/database");
const {consultanip} = require("../helpers/findsri") 

const findnip = async (req, res) =>{

    nip = req.params.nip

    persona = await findbyniplocal(nip) 

    if(persona === undefined || Object.entries(persona).length === 0 ){
        data = await consultanip(req.params.nip);

        if (data && data.hasOwnProperty("contribuyente") && data.contibuyente.hasOwnProperty("nombreComercial")){
            persona = {
                razonsocial: data.contribuyente.nombreComercial,
                tipoIdentificacion: data.contribuyente.tipoIdentificacion,
                nip: data.contribuyente.identificacion,
            };
            await saveNewperson(persona.nip, persona.razonsocial);
        }else{
            persona = data;
        }        
        
    }

    res.json(persona);
}

const findbyniplocal = async (nip) =>{
    try {
        const resultados = await db.query(`select * from persona where nip = $1`, [nip]);
        return resultados.rows[0];
    } catch (error) {
        return error;
    }
}

const saveNewperson = async (nip, razonsocial) => {
    try {
        const resultados = await db.query(`insert into persona (nip, razonsocial) values ($1, $2)`, [nip, razonsocial]);
        return resultados.rowCount
    } catch (error) {
        return error;
    }
};

module.exports = { findnip };
