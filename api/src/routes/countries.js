const { Router } = require('express');
const axios = require('axios');
const {Country, Activity} = require('../db.js');
const router = Router();
require('dotenv').config()
const { Op } = require('sequelize');


    // TODO [ ] GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado


router.get('/', async (req, res, next)=>{
    const { name } = req.query;
    if(name){
        const match = await Country.findAll({ 
            where : {
                name : {
                    [Op.iLike] : `%${name}%`
                }
            }
        })
        
        //TODO MODIFIQUE EL if(match.length)
        if(match !== 0){
            return res.send(match)
        } else {
            return res.status(404).send("No se encontro el pais buscado");
        }
    }
    next()
})
    
/*
TODO [ ] GET /countries:
    En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
    Obtener un listado de los paises.
*/
   
   
   router.get('/', async (req,res) => {
       let DB = await Country.findAll();
       if(!DB.length){
            var apiRequest = await axios.get(`https://restcountries.com/v3/all`)
            .catch(err => {
                return res.status(404).send(err);
             });

                apiRequest.data.map(country => {
                Country.findOrCreate({
                    where : {
                        id: country.cca3,
                    },
                    defaults: {
                        id: country.cca3,
                        name: country.name.common,
                        flag: country.flags[1],
                        region: country.region,
                        capital: country.capital?.[0],
                        subregion: country.subregion,
                        area: country.area,
                        population: country.population,
                    }
                    });
            })
        };
        let elAwait = await Country.findAll({
            include: Activity
        }) 
        return res.status(201).send(elAwait)
})

// TODO [ ] GET /countries/{idPais}:
//     Obtener el detalle de un país en particular
//     Debe traer solo los datos pedidos en la ruta de detalle de país
//     Incluir los datos de las actividades turísticas correspondientes
// TODO  ##### CAPAZ TENGA QUE AGREGAR UN EXCLUDE PARA DATOS QUE NO PIDEN #####

router.get('/:id', async (req, res)=>{
    let { id } = req.params;
    id = id.toUpperCase();
    const pais = await Country.findOne({
        where: {
            id : id
        },
        include: Activity
    })
    if(pais){
        res.send(pais);
    }else {
        res.status(404).send("Ingrese un pais valido")
    }
})


    module.exports = router;
    


