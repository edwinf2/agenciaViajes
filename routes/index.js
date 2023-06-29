import express from "express";
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaDetalleViaje, 
    paginaTestimoniales 
} from '../controllers/paginasControllers.js';

import { 
    guardarTestimonial 
} from "../controllers/testimonialController.js";


const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;
// router.get('/', (request, response) => {
//     //Request lo que enviamos. //response lo que express nos responde
//     // response.send('Inicio');
//     response.render('inicio', {
//         pagina: 'Inicio'
//     });
// });


// router.get('/nosotros', (request, response) => {
//     // const viajes = 'Viaje a Alemania';
//     response.render('nosotros', {
//         pagina: 'Nosotros'
//     });
// });




