function setDatePickerDir() {
    return {
        scope:{
          setId:'@'  
        },
        link: function (scope, element, attrs, ctrl) {
            console.log(':::::::::::::::: setDatePicker ::::::::::::::::');
            scope.setId = '#'+scope.setId;
            console.log(scope.setId);
            $('#datepicker').datepicker({
                autoclose: true
            });
        }
    }
}

setDatePickerDir.$inject = [];
export default setDatePickerDir;
