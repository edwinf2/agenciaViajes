import {Viaje} from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (request, response) => {
    //Request lo que enviamos. //response lo que express nos responde
    // response.send('Inicio');

    //Consultar 3 viajes del modelo Viaje

    const promiseDB = [];

    promiseDB.push( Viaje.findAll({ limit: 3 }) );
    promiseDB.push( Testimonial.findAll({ limit: 3 }) );


    try {
        const resultado = await Promise.all( promiseDB );

        response.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }

    
}

const paginaNosotros = (request, response) => {
    // const viajes = 'Viaje a Alemania';
    response.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (request, response) => {
    // const viajes = 'Viaje a Alemania';
    //Consulta a la BD
    const viajes = await Viaje.findAll();

    response.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes,
    });
}

const paginaTestimoniales = async (request, response) => {
   
    try {
         // const viajes = 'Viaje a Alemania';
         const testimoniales = await Testimonial.findAll();

        response.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });     
    } catch (error) {
        console.log(error);
    }

}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (request, response) => {
    
    const {slug} = request.params;
    
    try {
        const viaje = await Viaje.findOne({ where : { slug } } );

        response.render('viaje', {
            pagina: 'Informacion de Viaje',
            viaje
        });

    } catch (error) {
        console.log(error);
    }
    
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimoniales

}