let closureCodes = [
    'No Action',
    'Sensor Repair',
    'Operational Change',
    'Scheduled Maintenance',
    'Unplanned Maintenance',
    'Forced Outage'
];

let caseGroups = {
    unclaimed: 'unclaimed',
    my: 'my',
    open: 'open',
    awaiting: 'awaiting',
    closed: 'closed'
};

export default angular.module('app.constants', [])
    .constant('CLOSURE_CODES', closureCodes)
    .constant('CASE_GROUPS', caseGroups)
    .constant('ENABLE_CASES_GATEWAY', true)
    .name;