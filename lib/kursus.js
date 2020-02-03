const fetch  = require('node-fetch')
const moment = require('moment')


const  getKursusByDate = async (date, onSuccess) => {
    const dato = (date ? date : moment().format('YYYY'))
    const url = `http://service.superusers.dk/DataService/Kalender/jh?kursus_dato=${dato}&format=json`
    
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



module.exports =  {getKursusByDate}