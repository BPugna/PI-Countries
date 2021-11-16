const { Router } = require('express');
const axios = require('axios');
const {Country, Activity} = require('../db.js');
const router = Router();
require('dotenv').config()
const { Op } = require('sequelize');



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
        if(match !== 0){
            return res.send(match)
        }
    }
    next()
})
    
   

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
                    latitude: country.latlng?.[0],
                    longitude: country.latlng?.[1]
                }
                });
        })
    };
    let elAwait = await Country.findAll({
        include: Activity
    }) 
    return res.status(201).send(elAwait)
})


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
    


