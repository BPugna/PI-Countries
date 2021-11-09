const { Router } = require('express');
const {Activity, Country} = require('../db.js')
const router = Router();


/*
?    [ ] POST /activity:
?    Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
?    Crea una actividad turística en la base de datos
*/



router.get('/', (req, res)=>{
    return Activity.findAll()
    .then((act) => {
        res.send(act)
    })
})

router.post('/', async (req,res) => {
    const { name, difficulty, duration, season, countryId} = req.body;
    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        });
        let SearchId = await Country.findAll({
            where: {
                id : countryId
            }
        })
        // Relacion
        newActivity.addCountries(SearchId);
        res.send(newActivity);
    }catch(error){
        res.send(error)
    }
});
// TODO TRANSFERIRLE 0.5 BTC A FRANQUITO -

// let dbTypeOfDiet = await Diets.findAll({
//     el tipo de dieta lo creo con lo que ya tengo en mi db
//     where: { name: diets },
//   });
//   newRecipe.addDiets(dbTypeOfDiet);

module.exports = router;
