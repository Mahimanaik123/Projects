//REGISTER
const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "registerName"
                ).value.trim();


            const email =
                document.getElementById(
                    "registerEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "registerPassword"
                ).value;


            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;


            const message =
                document.getElementById(
                    "registerMessage"
                );


 //Password validation 

            if (password.length < 6) {

                showMessage(
                    message,
                    "Password must contain at least 6 characters.",
                    "error"
                );

                return;
            }


            /* Number validation */

            if (!/\d/.test(password)) {

                showMessage(
                    message,
                    "Password must contain at least one number.",
                    "error"
                );

                return;
            }


            // Confirm password 

            if (password !== confirmPassword) {

                showMessage(
                    message,
                    "Passwords do not match.",
                    "error"
                );

                return;
            }


            // Check existing user 

            const existingUser =
                JSON.parse(
                    localStorage.getItem("secureAuthUser")
                );


            if (
                existingUser &&
                existingUser.email === email
            ) {

                showMessage(
                    message,
                    "An account with this email already exists.",
                    "error"
                );

                return;
            }


            // Create user 

            const user = {

                name: name,

                email: email,

                password: password

            };


            localStorage.setItem(
                "secureAuthUser",
                JSON.stringify(user)
            );


            showMessage(
                message,
                "Registration successful! Redirecting...",
                "success"
            );


            setTimeout(() => {

                window.location.href =
                    "index.html";

            }, 1200);

        }
    );
}



   //LOGIN


const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const message =
                document.getElementById(
                    "loginMessage"
                );


            // Get registered user 

            const user =
                JSON.parse(
                    localStorage.getItem("secureAuthUser")
                );


            if (!user) {

                showMessage(
                    message,
                    "No account found. Please register first.",
                    "error"
                );

                return;
            }


            //Check credentials 

            if (
                email !== user.email ||
                password !== user.password
            ) {

                showMessage(
                    message,
                    "Invalid email or password.",
                    "error"
                );

                return;
            }


            //Login successful

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(user)
            );


            showMessage(
                message,
                "Login successful! Redirecting...",
                "success"
            );


            setTimeout(() => {

                window.location.href =
                    "dashboard.html";

            }, 800);

        }
    );
}



//   PROTECT DASHBOARD

if (
    window.location.pathname.endsWith(
        "dashboard.html"
    )
) {

    const isLoggedIn =
        localStorage.getItem("isLoggedIn");


    if (isLoggedIn !== "true") {

        window.location.href =
            "index.html";

    }


    const loggedInUser =
        JSON.parse(
            localStorage.getItem("loggedInUser")
        );


    if (loggedInUser) {

        const userName =
            document.getElementById(
                "userName"
            );


        if (userName) {

            userName.textContent =
                loggedInUser.name;

        }

    }

}



//   LOGOUT

function logout() {

    localStorage.removeItem(
        "isLoggedIn"
    );


    localStorage.removeItem(
        "loggedInUser"
    );


    window.location.href =
        "index.html";
}


// PASSWORD VISIBILITY


function togglePassword(
    inputId,
    button
) {

    const input =
        document.getElementById(inputId);


    if (input.type === "password") {

        input.type = "text";

        button.textContent = "Hide";

    } else {

        input.type = "password";

        button.textContent = "Show";

    }

}


//  FORGOT PASSWORD


function forgotPassword() {

    alert(
        "For this demo project, please register a new account if you forgot your password."
    );

}


// MESSAGE FUNCTION


function showMessage(
    element,
    text,
    type
) {

    element.textContent = text;

    element.className =
        "message " + type;

}