
class FakerService{
    
    constructor(facker){
        this.facker = facker;
    }
    
    getLogedInUser(user){
        
        var loggedInUser = {};
        loggedInUser.firstName = this.facker.name.firstName();
        loggedInUser.lastName  = this.facker.name.lastName();
        loggedInUser.jobTitle  = this.facker.name.jobTitle();
        loggedInUser.internet  = user.email;
        loggedInUser.orgId     = this.facker.random.number();
        return loggedInUser;
    }
    
    getAllDoctorsPerOrg(orgId){
        var allDoctorsPerOrg = [];
        for (var index = 0; index < 3; index++) {
            var doctor = {}
            doctor.id        = this.facker.random.number();
            doctor.firstName = this.facker.name.firstName();
            doctor.lastName  = this.facker.name.lastName();
            doctor.avatar    = this.facker.internet.avatar();
            doctor.email     = this.facker.internet.email();
            doctor.phone     = this.facker.phone.phoneNumber();
            doctor.doj       = this.facker.date.past();
            allDoctorsPerOrg.push(doctor)
        }
        
        return allDoctorsPerOrg;
    }
    
}

export default FakerService;
