export class UserRegistrationModel {
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    kyc!: string;
    registeredDate!: Date;
    dob!: Date;

  
    constructor(firstName:string,lastName:string,email:string,password:string,kyc:string ,registeredDate:Date,dob:Date){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.kyc=kyc;
        this.registeredDate=registeredDate;
        this.dob=dob;
        
    }
}
