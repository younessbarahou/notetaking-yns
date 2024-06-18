console.log("hola youness!");
function main(){
const form = document.querySelector("form");
let message;
form.addEventListener("submit", function (e) {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    let check = [];
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    e.preventDefault();
    //checking the empty inputs + the right shapes
    if (regex.test(email.value.trim())){
        check.push(email.value.trim());
    }
    else{
        document.getElementsByClassName("etoil")[0].style.color = "red" ;
         email.style.backgroundColor="#FF9E9E";
    } 
    if ( password.value.trim() ==="") {
        password.style.backgroundColor="#FF9E9E";
        document.getElementsByClassName("etoil")[1].style.color = "red";
    }
    else {
        check.push(password.value.trim());
    }
    console.log(check);
    check.length === 2?form.submit():console.log("0");
})
}
main();