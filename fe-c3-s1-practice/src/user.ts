//Define User class
class User {
//Field declartions
    username: string;
    password: string;
    contact: number;
    email: string;
    address: string;

//constuctor 
    constructor(username: string,  password: string, contact: number, email: string , address: string) {
    this.username = username;
    this.password = password;
    this.contact = contact;
    this.email = email;
    this.address = address;
}

//getter and setter methods

/* setusername(username: string) {
    this.username = username;
}
setpassword(password: string ) {
    this.password = password;
}
setcontact_number(contact_number: number) {
    this.contact_number = contact_number;
}
setemail(email: string | number) {
    this.email = email;
}
setaddress(address: string | number) {
    this.address = address;

}


getusername(): string { return this.username; }
getpassword(): string |number { return this.password; }
getcontact_number(): number { return this.contact_number; }
getemail(): string | number { return this.email; }
getaddress(): string | number { return this.address; }
 */

}

//Fetch form values using Object.fromentries()
let id = 1;
const submitUser = () => {
    
        //call registerUser method with the constructed User object
        let form: any = document.querySelector("#reg-form");
        let formData: any =  new FormData(form);
        const user:User = new User(formData.get("username"), formData.get("password"),formData.get("contact"),formData.get("email"),formData.get("address"))
        registerUser(user);  
        id++;
        return true;
}

//POST data using fetch() api
function registerUser(user: User) {
    //Dispay welcome message after successful registration
    
    fetch("http://localhost:3000/users", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json;charset=utf-8' 
    }
}).then(response => response.json()).then(res => console.log("res"))        
    window.alert(`Thanks ${user.username},\nYou will receive notifications to this ${user.email}`);

}