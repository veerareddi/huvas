function setDateTimePickerDir() {
    return {
        scope:{
          setId:'@'  
        },
        link: function (scope, element, attrs, ctrl) {
            console.log(':::::::::::::::: setDateTimePicker ::::::::::::::::');
            scope.setId = '#'+scope.setId;
            console.log(scope.setId);
            $(function () {
                $(scope.setId).timepicker();
            });
        }
    }
}

setDateTimePickerDir.$inject = [];
export default setDateTimePickerDir;
