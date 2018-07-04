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
let submitnumber= document.getElementById('submitnumber');
var submitdescription = document.getElementById('submitdescription');
var submitmodel= document.getElementById('submitmodel');
// var x = document.getElementById('snackbar');
let uploading= document.getElementById('uploading');
// let images = document.getElementById('images');

if(submitname.length < 3 ){
    swal({
        title: "Warning!",
        text: "name must be 3 characters ",
        icon: "warning",
    });
}



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
                        Name : submitname.value,
                        Title: submittitle.value,
                        Detail: submitdescription.value,
                        Price: submitprice.value,
                        Number: submitnumber.value,
                        imgUrl: url,
                        Model: submitmodel,
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
                    updates["/Posts/" +  postKey] = postData;
                    firebase.database().ref().update(updates);
                    // Insert url into an <img> tag to "download"
                    
                    let getUrl = postData.imgUrl;
                    console.log(getUrl);
                    
                    
                    // window.location = 'index.html';
                    // images.innerHTML = postData.imgUrl;

                   


                })
            })
        })
        }
        function getAdds(){
            firebase.database().ref('Posts/').once('value' , (snapshot)=>{
                snapshot.forEach((data)=>{
                    var d = data.val();
                    // var key = Object.keys(d); 
                    // console.log(d);
                    // console.log(key.imgUrl, "k")
              var image = d.imgUrl;
        
              var addpostdata = document.getElementById('addpostdata');
              var addpost = document.createElement("div");
              addpost.setAttribute("id" , "addpost");   
              var img = document.createElement('img');
              img.setAttribute("src" , image);
              addpost.appendChild(img);
              var footer = document.createElement('div');
              footer.setAttribute("class" , "cardfooter");
              var h4name = document.createElement('h4');
              var h4namenode = document.createTextNode(d.Title);
              h4name.className = "name";
              h4name.appendChild(h4namenode);
              footer.appendChild(h4name);
            var h6 = document.createElement('h6');
              var h6node = document.createTextNode(d.Model);
              h6.appendChild(h6node);
                footer.appendChild(h6);
            //   footer.appendChild(pdetailnode);
              addpost.appendChild(footer);
              addpostdata.appendChild(addpost);






/* <img src="../images/c.jpg" alt="c" >
                                <div class="cardfooter">
                                   <h4 class="name"> <b >Muhammad Imran</b> </h4>
                                    <p>This is Muhammad Sarim.</p>
                                    <h5 class="category">category</h5>
                                    <h5 class="category"> model</h5>
                                    <hr>
                                    <button></button>
                                    <button></button>
                                </div>
 */

            //   divclass.appendChild(pdetail);
             
            
            
            
              //   var img = document.createElement('img');
            //   img.setAttribute("src" , image);
            // //   img.setAttribute("alt", "Sorry ");
            //   addpost.appendChild(img);
        
            
            //   var divclass = document.createElement('div');
            //   divclass.className ="cardfooter";
            //   addpost.appendChild(divclass);
            //   var bname = document.createElement('b');
            //   var bnamenode = document.createTextNode(d.Title);
            //   bname.className = "name";
            //   bname.appendChild(bnamenode);
            //   addpost.appendChild(bname);
            // //   addpost.appendChild(bname);
            //   var pdetail = document.createElement('p');
            //   var pdetailnode = document.createTextNode(d.Detail);
            //   addpost.appendChild(pdetail);
            //   pdetail.appendChild(pdetailnode);
            // //   divclass.appendChild(pdetail);
            //     addpost = "";
            })
        })
                }        


    //                 function search(){
    //     var search=document.getElementById("myInput").value.toUpperCase();
    //     // var filter=search.toUpperCase();
    //     var card=document.getElementsByClassName('card-img-top')[0];
    //     var cardb=document.getElementsByClassName('card-body')[0];
      
    //     for(i=0;i<cardb.length;i++){
    //   var h2=cardb[i].getElementsByTagName("h2")[0];
    //   if(h2.innerHTML.toUpperCase().indexOf(search)>-1){
    //     cardb[i].style.display="";
    //     card[i].style.display="";
      
    //   }
    //   else{
    //     cardb[i].style.display="none";
    //     card[i].style.display="none"
    //   }
    //     }
    //   }


            //     var addpost = document.createElement('div');
            //     addpost.setAttribute("id" , "addpost");
            //   var img = document.createElement('img');
            //   img.setAttribute("src" , "../images/c.jpg");
            //   addpost.appendChild(img);
            // var bname = document.createElement('b');
            //   var bnamenode = document.createTextNode("for u");
            //   bname.className = "name";
            //   bname.appendChild(bnamenode);
            // //   addpost.appendChild(bname);
            //   var pdetail = document.createElement('p');
            //   var pdetailnode = document.createTextNode("sarim");
            //   addpost.appendChild(pdetail);
            //   pdetail.appendChild(pdetailnode);
            //   addpost.appendChild(bname);
            //     addpostdata.appendChild(addpost);
            // //   divclass.appendChild(pdetail);
             