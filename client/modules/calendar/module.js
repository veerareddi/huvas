
import CalendarCtrl             from './controllers/calendar_ctrl';
import FullCalendarDirective    from './directives/fullCalendar'
import SetDateTimePicker        from './directives/setDateTimePicker'
import SetDatePickerDir         from './directives/setDatePicker'


export default angular.module('app.calendar', [])
    .controller('calendarController',   CalendarCtrl)
    .directive('fullCalendarDirective', FullCalendarDirective)
    .directive('setDateTimePickerDir',  SetDateTimePicker)
    .directive('setDatePickerDir',      SetDatePickerDir)
    .name;