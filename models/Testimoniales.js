import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Testimonial = db.define('testimoniales', {
    //Viajes es la tabla creada en la DB
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },

});