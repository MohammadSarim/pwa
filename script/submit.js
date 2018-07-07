$(document).ready(function () {
    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn'),
        allPrevBtn = $('.prevBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-indigo').addClass('btn-default');
            $item.addClass('btn-indigo');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allPrevBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            prevStepSteps = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

            prevStepSteps.removeAttr('disabled').trigger('click');
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i< curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-indigo').trigger('click');
});

// function myFunction() {
//     var x = document.getElementById("snackbar");
//     x.className = "show";
//     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
// }

// File
function ch(){
var submitfileButton = document.getElementById('submitfileButton');
var submituploader = document.getElementById('submituploader');
let submitname = document.getElementById('submitname');
let submittitle = document.getElementById('submittitle');
let submitprice = document.getElementById('submitprice');
// let submitnumber= document.getElementById('submitnumber');
// var submitdescription = document.getElementById('submitdescription');
var submitmodel= document.getElementById('submitmodel');
var submitcategory = document.getElementById('submitcategory');
// var x = document.getElementById('snackbar');
// let uploading= document.getElementById('uploading');
// let images = document.getElementById('images');

// if(submitname.length < 3 ){
//     swal({
//         title: "Warning!",
//         text: "name must be 3 characters ",
//         icon: "warning",
//     });
// }



// function submit(){
    submitfileButton.addEventListener("change", function (e) {
        //   get a file
        var file = e.target.files[0];
        //   create a storage ref
        var storageRef = firebase.storage().ref("ecomercepics /" + file.name + e.uid);
        //   upload a file
        var uploadTask = storageRef.put(file);
        
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on("state_changed", // or 'state_changed'
        function (snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            submituploader.value = percentage;
                submituploader. innerHTML = ('Uploading is ' + percentage + '% ' + '\n');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {
                
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                    console.log(error);
                    // User doesn't have permission to access the object
                        break;
                        
                        case 'storage/canceled':
                        console.log(error);
                        // User canceled the upload
                        break;
                        
                        case 'storage/unknown':
                        console.log(error);
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    }
                }, function (d) {
                // Upload completed successfully, now we can get the download URL
                storageRef.getDownloadURL().then(function (url,uid) {
                // var c = localStorage.getItem('user');
                // console.log(c , 'ddd');
                // var postKey = firebase.database().ref("Posts/"  ).push().key;
                
                var updates = {};
                var postData = {    

                    Price: submitprice.value,
                        Title: submittitle.value,
                        Price: submitprice.value,
                        imgUrl: url,
                        Model: submitmodel.value,
                        Category : submitcategory.value,
                        user: firebase.auth().currentUser.uid,
                    };
                    // addEventListener.on('value' , data , err)
                    // function data(){
                        //     console.log(data.value)
                        // }
                        // function err(){
                            //     console.log(err)
                            // }
                            
                    console.log(postData.user)
                    // var getData = firebase.database().ref( "Data/" ).push().key;
                    // getData.on('value', gData)
                    // function gData(data){
                        //     let d = data.value;
                    //     let id = d.uid(d);
                    //     console.log(id)
                    // }
                    // postKey.on(ref("Data/" + user.uid))
                    // updates[" ] = postData;
                    firebase.database().ref('Posts/').push(postData);
                    firebase.database().ref('Category/' + postData.Category).push(postData);
                    
                    // .then( () =>{
                        // Insert url into an <img> tag to "download"
                        
                        let getUrl = postData.imgUrl;
                        console.log(getUrl);
                        
                        document.getElementById('uploading').innerText =  " Your Data Has Been Uploaded";
                        
                        // window.location = 'index.html';
                    // images.innerHTML = postData.imgUrl;
                    
                    
                //    .innerHTML = ""
                
                
                })
            })
        })


        // function (){
            // var a = document.getElementById('cc').value;
            // console.log(a , 'a');
        // }
            // firebase.database().ref('Posts/' + a ).once('value', (snapshot) => {
            //     snapshot.forEach((data) => {
            //         var d = data.val();
            //         // var key = Object.keys(d); 
            //         // console.log(d);
            //         // console.log(key.imgUrl, "k")
            //         var image = d.imgUrl;
        
            //         var addpostdata = document.getElementById('usercategory');
            //         console.log(addpostdata);
            //         var addpost = document.createElement("div");
            //         addpost.setAttribute("id", "addpost");
            //         var img = document.createElement('img');
            //         img.setAttribute("src", image);
            //         // img.className = "img-fluid ";
            //         addpost.appendChild(img);
            //         var footer = document.createElement('div');
            //         footer.setAttribute("class", "cardfooter");
            //         var h4name = document.createElement('h5');
            //         var h4namenode = document.createTextNode(d.Title);
            //         h4name.className = "name";
            //         h4name.appendChild(h4namenode);
            //         footer.appendChild(h4name);
            //         var h6 = document.createElement('h6');
            //         // var h6node = document.createTextNode(d.Price);
            //         h6.innerHTML = "Rs: " + d.Price;
            //         //   h6.appendChild(h6node);
            //         footer.appendChild(h6);
            //         var category = document.createElement('h6');
            //         category.className = "category";
            //         category.innerHTML = "Category: " + d.Category;
            //         // var categorynode = document.createTextNode(d.Category);
            //         // category.appendChild(categorynode);
            //         footer.appendChild(category);
            //         var model = document.createElement('h6');
            //         model.className = "category";
            //         model.innerHTML = "Model: " + d.Model;
            //         // var modelnode = document.createTextNode(d.Model);
            //         // model.appendChild(modelnode);
            //         footer.appendChild(model);
            //         var hr = document.createElement('hr');
            //         footer.appendChild(hr);
        
            //         var b = document.createElement('button');
            //         b.setAttribute("id", "icon");
            //         var i = document.createElement('i');
            //         i.className = "fa fa-heart";
            //         b.appendChild(i);
            //         footer.appendChild(b);
            //         var btn = document.createElement('button');
            //         btn.setAttribute("id", "iconchat");
            //         var ichat = document.createElement('i');
            //         ichat.className = "fa fa-envelope";
            //         btn.appendChild(ichat);
            //         footer.appendChild(btn);
        
            //         addpost.appendChild(footer);
            //         addpostdata.appendChild(addpost);
            //     })
            // })
            
        // }





















        // }})
// })
// .catch((err)=>{
//     document.getElementById('msg').innerHTML = err.message;
// })
}
// }


// var add = document.getElementById('add').innerHTML = null;


          //   function myFunction() {
    //     var input, filter, addpostdata, addpost, a, i;
    //     input = document.getElementById("myInput");
    //     filter = input.value.toUpperCase();
    //     addpostdata = document.getElementById("addpostdata");
    //     addpost = addpostdata.getElementsByTagName("div");
    //     for (i = 0; i < addpost.length; i++) {
    //         a = addpost[i].getElementsByTagName("a")[0];
    //         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //             addpost[i].style.display = "";
    //         } else {
    //             addpost[i].style.display = "none";
    //         }
    //     }
    // }

    //   function getAdds(){
        //   var add = document.getElementById('add');
        // firebase.database().ref('Posts/').once('value' , (snapshot)=>{
        //     snapshot.forEach((data)=>{
        //         var d = data.val();
        //         localStorage.setItem('object' ,JSON.stringify( d));
        //         // var key = Object.keys(d); 
        //         // console.log(d);
        //         // console.log(key.imgUrl, "k")
        //   var image = d.imgUrl;
        // //   console.log(d);
                
        //          card();
        //         // add.appendChild(g);
        //     })
        //     })
        // }

    //   function card(){
    //       var arr = [];
    //     var d = localStorage.getItem('object');
    //     var dobj = JSON.parse(d);
    //     console.log(dobj);
    //     arr.push(dobj);
        // document.getElementById('add').innerHTML = arr.map((v,i)=>{
        //     return `
        //     <div>
        //         <img class="img-fluid" src="${v.imgUrl}" alt="Card image cap">
              
        //         <div class="card-body">
        //             <h4 class="card-title">${v.Name}</h4>
        //                <!--Text-->
        //             <p class="card-text">${v.Detail}</p>
        //             <a href="#" class="btn btn-primary waves-light" mdbWavesEffect>Button</a>
        //         </div>
              
        //     </div>
    //         `
    //     })
    //     // for(var k in dobj){
    //     //     arr.push(dobj[k]);
    //     // }
    //     // console.log(arr);
    // //     for(var k ; k<dobj.length ; k++){
    // //       document.getElementById('add').innerHTML = `<div class="card" ${d.key}>

    //       <!--Card image-->
    //       <img class="img-fluid" src="${dobj.imgUrl}" alt="Card image cap">
      
    //       <!--Card content-->
    //       <div class="card-body">
    //           <!--Title-->
    //           <h4 class="card-title">${dobj.Name}</h4>
    //           <!--Text-->
    //           <p class="card-text">${dobj.Detail}</p>
    //           <a href="#" class="btn btn-primary waves-light" mdbWavesEffect>Button</a>
    //       </div>
      
    //   </div>`
// }

     





