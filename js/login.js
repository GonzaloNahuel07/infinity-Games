// Variables

const formModal = document.querySelector("#formModal");
const form = document.querySelector("#form");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const submitLogin = document.querySelector("#submit");
const submitRegister = document.querySelector("#submitRegister");
const successForm = document.querySelector("#successForm");
const alertName = document.querySelector("#alertName");
const alertNickName = document.querySelector("#alertNickName");
const alertEmail = document.querySelector("#alertEmail");
const alertPassword = document.querySelector("#alertPassword");
const alertPasswordConfirm = document.querySelector("#alertPasswordConfirm");

const newUserName = document.querySelector("#newUserName");
const newUserNickname = document.querySelector("#newUserNickName");
const newUserEmail = document.querySelector("#newUserEmail");
const newUserPassword = document.querySelector("#newUserPassword");
const newUserPasswordConfirm = document.querySelector(
	"#newUserPasswordConfirm"
);

// Expresiones regulares

const regUserNames = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserName = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
const regUserPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
const regUserEmail =
	/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const usersArray = [];
var usersArrayLocal = []
usersArrayLocal = JSON.parse(localStorage.getItem("usersArray"));

// Plantilla constuctor

class Users {
	constructor(name, userName, email, password, id) {
		(this.name = name),
			(this.userName = userName),
			(this.email = email),
			(this.password = password),
			(this.id = id);
	}
}

// Objetos

const admin = new Users(
	"Admin",
	"Admin",
	"admin@infinitygames.com",
	"Admin1234",
	1
);
usersArray.push(admin);
// Funcion para registrarse

const successMessage = () => {
	successForm.textContent = "¡Registrado con Éxito!";
	successForm.classList.remove("d-none");
};

const pintarMensajeError = (errores) => {
	errores.forEach((item) => {
		item.tipo.classList.remove("d-none");
		item.tipo.textContent = item.msg;
	});
};

export var registerConfirmer = 0;
document.addEventListener("DOMContentLoaded", () => {
	submitRegister.addEventListener("click", (e) => {
		e.preventDefault();
		successForm.classList.add("d-none");
		registerConfirmer = 0;

		const errores = [];

		if (!regUserNames.test(newUserName.value) || !newUserName.value.trim()) {
			errores.push({
				tipo: alertName,
				msg: "Formato no valido en el campo nombre, solo letras.",
			});
		} else {
			alertName.classList.add("d-none");
		}
		if (
			!regUserName.test(newUserNickname.value) ||
			!newUserNickname.value.trim()
		) {
			errores.push({
				tipo: alertNickName,
				msg: "Formato no valido en el campo usuario.",
			});
		} else {
			alertNickName.classList.add("d-none");
		}
		if (!regUserEmail.test(newUserEmail.value) || !newUserEmail.value.trim()) {
			errores.push({
				tipo: alertEmail,
				msg: "Escriba un email valido",
			});
		} else {
			alertEmail.classList.add("d-none");
		}
		if (!regUserPassword.test(newUserPassword.value)) {
			if (
				!regUserPassword.test(newUserPassword.value) ||
				!newUserPassword.value.trim()
			)
				errores.push({
					tipo: alertPassword,
					msg: "La contraseña debe tener entre 8 y 16 caracteres, una mayúscula y un número",
				});
		} else {
			alertPassword.classList.add("d-none");
		}
		if (newUserPassword.value !== newUserPasswordConfirm.value) {
			errores.push({
				tipo: alertPasswordConfirm,
				msg: "Las contraseñas no coinciden",
			});
		}
		if (errores.lenght !== 0) {
			pintarMensajeError(errores);
		}
		usersArray.forEach((item) => {
			if (newUserEmail.value === item.email) {
				document.querySelector(".alertUserEx").classList.remove("d-none");
			} else {
				if (errores.length === 0) {
					successMessage();

					var newUser = new Users(
						newUserName.value,
						newUserNickname.value,
						newUserEmail.value,
						newUserPassword.value,
						newUserEmail.value
					);

					usersArray.push(newUser);
					localStorage.setItem("usersArray", JSON.stringify(usersArray));
					setTimeout(function () {
						window.location = "../pages/loginPage.html";
						document.querySelector("#modalRegister").classList.add("d-none");
						localStorage.setItem("usersArray", JSON.stringify(usersArray));
					}, 2500);
				}
			}
		});
	});
});

document.addEventListener("click", (e) => {
	if (e.target.id === "submit") {
		if (document.querySelector("#userEmail").value === admin.email) {
			if (document.querySelector("#userPassword").value === admin.password) {
				window.location = "../pages/storeAdmin.html";
			}
		}
	}
	if (e.target.id === "submit") {
		JSON.parse(localStorage.getItem("usersArray")).forEach((item) => {
			if (document.querySelector("#userEmail").value !== item.email) {
				document.querySelector(".registerAlert").classList.remove("d-none");
			}

			if (document.querySelector("#userEmail").value === item.email) {
				if (document.querySelector("#userPassword").value === item.password) {
					window.location = "../pages/storeUser.html";
          document.querySelector("#login-button").classList.add("d-none");
				}
				if (item.password !== document.querySelector("#userPassword").value) {
					document.querySelector(".passwordWrong").classList.remove("d-none");
				}
			}
		});
	}
});
