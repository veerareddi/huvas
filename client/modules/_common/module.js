
import BreadcrumDirective   from './directives/breadcrum-dir.js';
import SetDateTimePicker    from './directives/setDateTimePicker';
import SetDatePickerDir     from './directives/setDatePicker';
import SidebarToggleDir     from './directives/sidebar-toggle-dir';
import DropdownToggleDir    from './directives/dropdown-toggle-dir';

export default angular.module('app.common',[])
                    .directive('breadcrumDirective',    BreadcrumDirective)
                    .directive('setDateTimePickerDir',  SetDateTimePicker)
                    .directive('setDatePickerDir',      SetDatePickerDir)
                    .directive('sidebarToggleDir',      SidebarToggleDir)
                    .directive('dropdownToggleDir',     DropdownToggleDir)
                    .name;