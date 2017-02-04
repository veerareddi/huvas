
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
        
        return loggedInUser;
    }
    
}

export default FakerService;
