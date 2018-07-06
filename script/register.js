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
    // setTimeout(()=>{
        errormsg.innerHTML = "Please enter you email address abc@gmail.com.";    
    signupemail.onfocus();
    return false;
    // swal({
    //     title: "Warning!",
    //     text: "Please enter you email address abc@gmail.com. ",
    //         icon: "warning",
    //     });
    
    }
    //  if ( signupname.length < 3 ) {
    //     swal({
    //         title: "Warning!",
    //         text: "Please enter you name.",
    //         icon: "warning",
    //     });
    // }
    else if (signuppassword.length < 6) {
        swal({
            title: "Warning!",
            text: "Please enter atleast 6 number",
            icon: "warning",
        });
    }
    else {
        auth.createUserWithEmailAndPassword( signupemail.value, signuppassword.value)
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
                swal({
                    title: "Warning!",
                    text: error.message,
                    icon: "warning",
                });
                // console.log(error, error.message);
            })
        }
}



function login() {
    var loginemail = document.getElementById("loginemail");
    var loginpassword = document.getElementById("loginpassword");

    firebase.auth().signInWithEmailAndPassword(loginemail.value, loginpassword.value)
        .then(function (result) {
            // swal({
            //     title: "Success!",
            //     text: "You have logged in successfully",
            //     icon: "success",
            // });
           
            var cU = auth.currentUser.uid
            console.log('cuser' , cU );
            // console.log(result.uid);
            // setTimeout(() => {
                window.location = "../index.html";
            // }, 2000);
        })
        .catch(function (error) {
            console.log(error, error.message);
            swal({
                title: "Error Occurred!",
                text: error.message,
                icon: "error",
            });
        });
}



firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var cU = user.uid;
        localStorage.setItem('currentUser' , cU);
        
        console.log(user.uid);

        $("#logout").show();
        $("#register").hide();
    } else {
        console.log("Please login!..");
        $("#logout").hide();
        $("#register").show();
    }
});

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
