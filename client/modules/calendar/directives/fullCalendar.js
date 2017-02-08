
function fullCalendarDirective($state) {
    return {
        restrict: 'E',
        template:'<div id="calendar"></div>',
        scope: {
            srcEvents: '=',
            setEvent: '&'
        },
        link: function (scope, element, attrs, ctrl) {
            console.log('::::::::::::::> fullCalendarDirective <::::::::::::::');
            console.log(JSON.stringify(scope.srcEvents));
            
            var date = new Date();
            var d = date.getDate(),
                m = date.getMonth(),
                y = date.getFullYear();
            $('#calendar').fullCalendar({
              header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
              },
              buttonText: {
                today: 'today',
                month: 'month',
                week: 'week',
                day: 'day'
              },
              defaultView: 'agendaDay',
              //Random default events
              events: scope.srcEvents,
              editable: true,
              droppable: true,
              eventClick: function(calEvent, jsEvent, view) {
              
                console.log('Event: ' + calEvent.title);
                console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                console.log('View: ' + view.name);
                console.log(calEvent);
                // change the border color just for fun
                scope.setEvent()(calEvent);
                $state.go('dashboard.event');
              },
              drop: function (date, allDay) { 
                console.log('::::::::::::> Full Calendar Drop Function <::::::::::::');
                console.log('0)Total Number of Src Events :::: '+scope.srcEvents.length);
                
                
                var selectedDate = new Date(date._d);
                var originalEventObject = $(this).data('eventObject');
                var copiedEventObject = $.extend({}, originalEventObject);
                copiedEventObject.backgroundColor = $(this).css("background-color");
                copiedEventObject.borderColor = $(this).css("border-color");
                copiedEventObject.start  = selectedDate;
                copiedEventObject.end    = (selectedDate.getTime() + 1800000)/1000;
                copiedEventObject.allDay = false;
                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
                if ($('#drop-remove').is(':checked')) {
                  $(this).remove();
                }
                
                scope.srcEvents.push(copiedEventObject);
                scope.setEvent()(copiedEventObject);
                console.log('1)Total Number of Src Events :::: '+scope.srcEvents.length);
                $state.go('dashboard.event');
                
              }
            });
            
            function ini_events(ele) {
              ele.each(function () {
                var eventObject = {
                  title: $.trim($(this).text()) 
                };
                $(this).data('eventObject', eventObject);
                $(this).draggable({
                  zIndex: 1070,
                  revert: true, 
                  revertDuration: 0  
                });
        
              });
            }
        
            ini_events($('#external-events div.external-event'));
        
            
        
            /* ADDING EVENTS */
            var currColor = "#3c8dbc"; //Red by default
            //Color chooser button
            var colorChooser = $("#color-chooser-btn");
            $("#color-chooser > li > a").click(function (e) {
              e.preventDefault();
              currColor = $(this).css("color");
              $('#add-new-event').css({"background-color": currColor, "border-color": currColor});
            });
            $("#add-new-event").click(function (e) {
              e.preventDefault();
              var val = $("#new-event").val();
              if (val.length == 0) {
                return;
              }
              //Create events
              var event = $("<div />");
              event.css({"background-color": currColor, "border-color": currColor, "color": "#fff"}).addClass("external-event");
              event.html(val);
              $('#external-events').prepend(event);
              ini_events(event);
        
              $("#new-event").val("");
            });
        }
    };
}

fullCalendarDirective.$inject = ['$state'];
export default fullCalendarDirective;
