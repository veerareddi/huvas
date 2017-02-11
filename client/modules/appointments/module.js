
import AppointmentDBController      from './controllers/appoitment_db_ctrl.js';
import AppointmentAddController     from './controllers/appoitment_add_ctrl.js';
import AppointmentServ              from './services/appointments_serv.js'

export default angular.module('app.appointments', [])
    .controller('appointmentDBController', AppointmentDBController)
    .controller('appointmentAddController', AppointmentAddController)
    .service('appointmentServ', AppointmentServ)
    .name;