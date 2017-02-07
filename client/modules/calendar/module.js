
import CalendarCtrl from './controllers/calendar_ctrl';
import FullCalendarDirective from './directives/fullCalendar'

export default angular.module('app.calendar', [])
    .controller('calendarController', CalendarCtrl)
    .directive('fullCalendarDirective', FullCalendarDirective)
    .name;