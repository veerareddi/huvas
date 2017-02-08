
import EventController  from './controllers/event-ctrl.js';

export default angular.module('app.events', [])
    .controller('eventController', EventController)
    .name;