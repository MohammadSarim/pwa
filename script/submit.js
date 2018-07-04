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
                var postKey = firebase.database().ref("Posts/"  ).push().key;
                
                var updates = {};
                var postData = {    

                    Price: submitprice.value,
                        // Name : submitname.value,
                        Title: submittitle.value,
                        // Detail: submitdescription.value,
                        Price: submitprice.value,
                        // Number: submitnumber.value,
                        imgUrl: url,
                        Model: submitmodel.value,
                        Category : submitcategory.value,
                        user: firebase.auth().currentUser.uid,
                        // user : url.user.uid
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
                    updates["/Posts/" + postData.Category ] = postData;
                    firebase.database().ref().update(updates);
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
        // }})
// })
// .catch((err)=>{
//     document.getElementById('msg').innerHTML = err.message;
// })
}
// }


// var add = document.getElementById('add').innerHTML = null;


// function searchBar() {
//     var searchBar = document.getElementById('search');
//     var searching = searchBar.value.toLocaleUpperCase();
//     var cardImg = document.getElementsByClassName('img');
//     var adCardText = document.getElementsByClassName('text');//li
//     var adCard = document.getElementsByClassName('adCard');//li
    

//     for (i = 0; i < adCardText.length; i++) {
//         var h4 = adCardText[i].getElementsByTagName('P')[0];
//         if (h4.innerHTML.toLocaleUpperCase().indexOf(searching) > -1) {
//           adCardText[i].style.display = "inline";
//           cardImg[i].style.display = 'inline';
//         }
//         else {
//           adCardText[i].style.display = 'none';
//             cardImg[i].style.display = 'none';
//             adCard[i].style.display = 'none';
//         }
//     }
//   }
    //   }
      

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

     







// function getData(){
//   var add = document.getElementById('add');
//         firebase.database().ref('Posts/').once('value' , (snapshot)=>{
//             snapshot.forEach((data)=>{
//                 var d = data.val();
//                 var i;
// firebase.database().ref("/Posts/").once("value")
//     .then(function (data) {
//         var postObject = data.val();
        // console.log(postObject);
//         var keys = Object.keys(d);
//         var adContainer = document.getElementById("add");
//         var cardDeck;
//             var currentObj = d[keys[i]];
//             if ( i % 3 == 0) {
//                 cardDeck = document.createElement("DIV");
//                 cardDeck.className = "card-deck";
//                 adContainer.appendChild(cardDeck);
//             }
//             var cardMb3Hoverable = document.createElement("DIV");
//             cardMb3Hoverable.setAttribute("class", "card mb-4 col-md-4 hoverable");
//             cardDeck.appendChild(cardMb3Hoverable);

//             var viewOverlayZoom = document.createElement("DIV");
//             viewOverlayZoom.setAttribute("class", "view overlay zoom");
//             cardMb3Hoverable.appendChild(viewOverlayZoom);

//             var cardImgTop = document.createElement("IMG");
//             cardImgTop.className = "img-fluid card-img-top waves-effect waves-light";
//             cardImgTop.setAttribute("id", "adImg");
//             cardImgTop.setAttribute("src", d.imgUrl);
//             viewOverlayZoom.appendChild(cardImgTop);

//             var cardBody = document.createElement("DIV");
//             cardBody.setAttribute("class", "card-body");
//             cardMb3Hoverable.appendChild(cardBody);

//             var cardTitle = document.createElement("H4");
//             cardTitle.setAttribute("class", "card-title");
//             cardTitle.innerHTML = d.Title;
//             cardBody.appendChild(cardTitle);

//             var cardText = document.createElement("P");
//             cardText.setAttribute("class", "card-text");
//             cardText.innerHTML = d.Detail;
//             cardBody.appendChild(cardText);

//             var cardPriceTag = document.createElement("H4");
//             cardPriceTag.setAttribute("class", "red-text");
//             cardPriceTag.innerHTML = "Rs.";

//             var cardPrice = document.createElement("H4");
//             cardPrice.setAttribute("class", "red-text");
//             cardPrice.innerHTML = d.Price;
//             cardPrice.style.display = "inline";
//             cardPriceTag.appendChild(cardPrice);
//             // console.log(currentObj.uid)
            
//             var chatSeller = document.createElement("BUTTON");
//             chatSeller.className = 'btn btn-success btn-sm pull-right';
//             chatSeller.innerHTML = '<i class="fa fa-wechat"></i>';
//             cardPriceTag.appendChild(chatSeller);

//             chatSeller.addEventListener('click', e => {
//                 e.preventDefault();
//                 var currentuser = firebase.auth().currentUser.uid;
//                 console.log(currentuser);
//                 if (currentuser !== currentObj.uid) {
//                     console.log(currentObj.uid);
//                     firebase.database().ref("/users/" + currentuser + "/" + "chatRoom" + '/' + currentObj.uid + '/').push('Wa-Alaikum-Assalam')
//                         .then(() => {
//                             firebase.database().ref("/users/" + currentObj.uid + "/" + "chatRoom" + '/' + currentuser + '/').push("Assalam-o-Alaikum! I'm interested in your product, please contact me ASAP.")
//                             swal({
//                                 title: "success!",
//                                 text: "User Added in your Chat list",
//                                 icon: "success",
//                             });
//                             setTimeout(() => {
//                                 location = 'room.html'
//                             }, 2000)
//                         })
//                 }
//             })

//             var addToFavourite = document.createElement("BUTTON");
//             addToFavourite.className = 'btn btn-danger btn-sm pull-right';
//             addToFavourite.innerHTML = '<i class="fa fa-heart-o"></i>';
//             cardPriceTag.appendChild(addToFavourite);
            

//             cardBody.appendChild(cardPriceTag);
            

            
//             var hr = document.createElement("HR");
//             cardBody.appendChild(hr);

//             var adPostBy = document.createElement("P");
//             adPostBy.innerHTML = "Name: ";
//             cardBody.appendChild(adPostBy);

//             var adPosterName = document.createElement("SPAN");
//             adPosterName.className = "text-secondary";
//             adPosterName.innerHTML = d.Name;
//             adPostBy.appendChild(adPosterName);

//             var adPosterNum = document.createElement("P");
//             adPosterNum.innerHTML = "Number: ";

//             var adPosterNumber = document.createElement("SPAN");
//             adPosterNumber.innerHTML = d.Number;
//             adPosterNumber.className = "text-secondary"
//             adPosterNum.appendChild(adPosterNumber);
         
//             cardBody.appendChild(adPosterNum);
        
//         })
//     })    
// }

    // })
