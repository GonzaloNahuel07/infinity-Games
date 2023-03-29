import { registerConfirmer } from "./login.js";
var newUserName = document.querySelector("#newUserName");
var newUserNickname = document.querySelector("#newUserNickName");
var newUserEmail = document.querySelector("#newUserEmail");
var newUserPassword = document.querySelector("#newUserPassword");

class Users {
    constructor(name, nickname, email, password, id) {
        this.name = name;
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.id = id;
    }
}

var idUser = 0;
if (registerConfirmer === 1 && idUser === 0) {
    const user = new Users (`${newUserName.value}`, `${newUserNickname.value}``${newUserEmail.value}``${newUserPassword.value}`)
    console.log(Users)
}
const user = new Users (`${newUserName.value}`, `${newUserNickname.value}`,`${newUserEmail.value}`,`${newUserPassword.value}`)
    console.log(Users)