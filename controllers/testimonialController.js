import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (request, response) => {
    //Validar formularios
    const {nombre, email, mensaje} = request.body;
    
    const errores = [];

    if (nombre.trim() === '') {
        errores.push({mensaje: 'El nombre esta vacío'});
    }
    if (email.trim() === '') {
        errores.push({mensaje: 'El correo esta vacío'});
    }
    if (mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje esta vacío'});
    }


    if (errores.length > 0) {
        //Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        //Mostrar la vista con errores
        response.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            email,
            mensaje,
            testimoniales
        })
    } else {
        //Almacenarlos en la base de datos
        try {
            await Testimonial.create({
                nombre,
                email,
                mensaje
            });
            response.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}