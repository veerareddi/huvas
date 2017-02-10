
class controller {
  
  constructor($scope, $state) {
    this.scope = $scope;
    this.init($state);
    this.scope.modelDataSrc = {};
  }
  
  getCalendarScheduleByDoctorId(){
    let date = new Date();
    let d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();
    return [
        {
          title: 'All Day Event',
          start: new Date(y, m, 1),
          backgroundColor: "#f56954", //red
          borderColor: "#f56954" //red
        },
        {
          title: 'Long Event',
          start: new Date(y, m, d - 5),
          end: new Date(y, m, d - 2),
          backgroundColor: "#f39c12", //yellow
          borderColor: "#f39c12" //yellow
        },
        {
          title: 'Meeting',
          start: new Date(y, m, d, 10, 30),
          allDay: false,
          backgroundColor: "#0073b7", //Blue
          borderColor: "#0073b7" //Blue
        },
        {
          title: 'Lunch',
          start: new Date(y, m, d, 12, 0),
          end: new Date(y, m, d, 14, 0),
          allDay: false,
          backgroundColor: "#00c0ef", //Info (aqua)
          borderColor: "#00c0ef" //Info (aqua)
        },
        {
          title: 'Birthday Party',
          start: new Date(y, m, d + 1, 19, 0),
          end: new Date(y, m, d + 1, 22, 30),
          allDay: false,
          backgroundColor: "#00a65a", //Success (green)
          borderColor: "#00a65a" //Success (green)
        },
        {
          title: 'Click for Google',
          start: new Date(y, m, 28),
          end: new Date(y, m, 29),
          url: 'http://google.com/',
          backgroundColor: "#3c8dbc", //Primary (light-blue)
          borderColor: "#3c8dbc" //Primary (light-blue)
        }
      ]
  }

  init($state) {
    console.log('calendar-controller initialized');
    
    this.scope.setCalendarEvent = (event) => {
      console.log('::::::::::::::> Super dude :( Veera hello!! :) Welcome setCalendarEvent <::::::::::::::');
      this.scope.modelDataSrc = event;
      this.scope.$apply();
    }
    
    this.state = $state;
    this.scope.doctorSrcEvents  = this.getCalendarScheduleByDoctorId();
    
  }
  
  
}

controller.$inject = ['$scope', '$state'];

export default controller;
