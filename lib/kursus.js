const fetch  = require('node-fetch')
const moment = require('moment')


const  getKursusFromJSON = async (YYYY,onSuccess) => {
    let db
    if (YYYY == 2020) {
        db = require('./data2020.json')      
    }

    if (YYYY == 2021) {
        db = require('./data2021.json')      
    }
    
    onSuccess (db)
};




const  getKursusByDate = async (date, onSuccess) => {
    const dato = (date ? date : moment().format('YYYY'))
    const url = `https://service.superusers.dk/DataService/Kalender/jh?kursus_dato=${dato}&format=json`
    
    const respose = await fetch(url)
    const data    = await respose.json()
           
    onSuccess (data)
};


const  getDeltagerlisten = async (kursusNummer , dato, onSuccess)  => {

    const url = `http://eval.superusers.dk/api/v1/kursister/${kursusNummer}/158/${dato}` 

    const respose = await fetch(url)
    const data    = await respose.json()

    onSuccess (data)
}



module.exports =  {getKursusByDate, getKursusFromJSON}