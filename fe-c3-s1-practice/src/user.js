//Define User class
var User = /** @class */ (function () {
    //constuctor 
    function User(username, password, contact, email, address) {
        this.username = username;
        this.password = password;
        this.contact = contact;
        this.email = email;
        this.address = address;
    }
    return User;
}());
//Fetch form values using Object.fromentries()
var id = 1;
var submitUser = function () {
    //call registerUser method with the constructed User object
    var form = document.querySelector("#reg-form");
    var formData = new FormData(form);
    var user = new User(formData.get("username"), formData.get("password"), formData.get("contact"), formData.get("email"), formData.get("address"));
    registerUser(user);
    id++;
    return true;
};
//POST data using fetch() api
function registerUser(user) {
    //Dispay welcome message after successful registration
    fetch("http://localhost:3000/users", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(function (response) { return response.json(); }).then(function (res) { return console.log("res"); });
    window.alert("Thanks ".concat(user.username, ",\nYou will receive notifications to this ").concat(user.email));
}
