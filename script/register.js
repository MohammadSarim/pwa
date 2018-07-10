new WOW().init();

var auth = firebase.auth();
var firebaseDb = firebase.database();

// function myFunction() {
//     var x = document.getElementById("login");
//     x.className = "show";
//     x.addEventListener('click' , ()=>)
//     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
// }


function signUp() {
    // var signupname = document.getElementById('signupname');
    var signupemail = document.getElementById('signupemail');
    var signuppassword = document.getElementById('signuppassword');
    var errormsg = document.getElementById('errormsg');

    // console.log(email, password)

    if (!signupemail.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {

        var x = document.getElementById("snackbar");
        x.className = "show";
        // x.innerHTML = "Success! You have been logined";
        x.innerHTML = "Please enter you email address abc@gmail.com.";
        setTimeout(function () {
        x.className = x.className.replace("show", "");
            signupemail.focus();
            return false;
        }, 1000);
    }
    else if (signuppassword.length < 6) {
        var x = document.getElementById("snackbar");
        x.className = "show";
        // x.innerHTML = "Success! You have been logined";
        x.innerHTML = "password must be atleast 6 characters";
        setTimeout(function () {
        x.className = x.className.replace("show", "");
            signupemail.focus();
            return false;
        }, 1000);
    }
    else {
        auth.createUserWithEmailAndPassword(signupemail.value, signuppassword.value)
            .then(function (data) {
                // console.log(user.uid);
                // console.log(user.uid);
                var uid = data.user.uid;
                var obj = {
                    // name: signupname.value,
                    email: signupemail.value,
                    password: signuppassword.value,
                    uid: uid,
                };
                localStorage.setItem("user", obj.uid)
                // console.log(obj.email);
                // console.log(obj.password);
                firebaseDb.ref("/hackaton users/" + uid).set(obj);
                setTimeout(() => {
                    swal({
                        title: "Success!",
                        text: "You have been register",
                        icon: "success",
                    });
                    console.log(data.uid);
                }, 2000);
                location = '../index.html';
            })




            .catch(function (error) {
                var x = document.getElementById("snackbar");
                x.className = "show";
                // x.innerHTML = "Success! You have been logined";
                x.innerHTML = error.message;
                setTimeout(function () {
                x.className = x.className.replace("show", "");
                    return false;
                }, 1000);
                // console.log(error, error.message);
            })
    }
}



function login() {
    var loginemail = document.getElementById("loginemail");
    var loginpassword = document.getElementById("loginpassword");

    firebase.auth().signInWithEmailAndPassword(loginemail.value, loginpassword.value)
        .then(function (result) {

            var x = document.getElementById("snackbar");
            x.className = "show";
            x.innerHTML = "Success! You have been logined";
            setTimeout(function () {
            x.className = x.className.replace("show", "");
                var cU = auth.currentUser.uid
                console.log('cuser', cU);
                window.location = "index.html";
            }, 1000);
        })
        .catch(function (error) {
            console.log(error, error.message);

            var x = document.getElementById("snackbar");
            x.className = "show";
            x.innerHTML = error.message;
            loginemail.innerHTML = " ";
            loginpassword.innerHTML = "";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
        });
}



function logOut() {
    firebase.auth().signOut()
        .then(function (resolve) {
            window.location.replace("index.html");
            console.log("Succesfully Signed-Out", resolve);
            swal({
                title: "Success!",
                text: "Successfully signed out",
                icon: "success",
            });
        })
        .catch(function (err) {
            console.log("Error", err);
            swal({
                title: "Error Occurred!",
                text: err.message,
                icon: "error",
            });
        })
}


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var cU = user.uid;
        localStorage.setItem('currentUser', cU);

        console.log(user.uid);

        document.getElementById("logout").style.visibility = "visible";
    } else {
        console.log("Please login!..");
        document.getElementById("logout").style.visibility = "hidden";

    }
});

