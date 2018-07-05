
function getAdds() {
    firebase.database().ref('Posts/').on('value', (snapshot) => {
        snapshot.forEach((data) => {
            var d = data.val();
            // var key = Object.keys(d); 
            // console.log(d);
            // console.log(key.imgUrl, "k")
            var image = d.imgUrl;

            var addpostdata = document.getElementById('addpostdata');
            var addpost = document.createElement("div");
            addpost.setAttribute("id", "addpost");
            var img = document.createElement('img');
            img.setAttribute("src", image);
            // img.className = "img-fluid ";
            addpost.appendChild(img);
            var footer = document.createElement('div');
            footer.setAttribute("class", "cardfooter");
            var h4name = document.createElement('h5');
            var h4namenode = document.createTextNode(d.Title);
            h4name.className = "name";
            h4name.appendChild(h4namenode);
            footer.appendChild(h4name);
            var h6 = document.createElement('h6');
            // var h6node = document.createTextNode(d.Price);
            h6.innerHTML = "Rs: " + d.Price;
            //   h6.appendChild(h6node);
            footer.appendChild(h6);
            var category = document.createElement('h6');
            category.className = "category";
            category.innerHTML = "Category: " + d.Category;
            // var categorynode = document.createTextNode(d.Category);
            // category.appendChild(categorynode);
            footer.appendChild(category);
            var model = document.createElement('h6');
            model.className = "category";
            model.innerHTML = "Model: " + d.Model;
            // var modelnode = document.createTextNode(d.Model);
            // model.appendChild(modelnode);
            footer.appendChild(model);
            var hr = document.createElement('hr');
            footer.appendChild(hr);

            var b = document.createElement('button');
            b.setAttribute("id", "icon");
            var i = document.createElement('i');
            i.className = "fa fa-heart";
            b.appendChild(i);
            footer.appendChild(b);
            var btn = document.createElement('button');
            btn.setAttribute("id", "iconchat");
            var ichat = document.createElement('i');
            ichat.className = "fa fa-envelope";
            btn.appendChild(ichat);
            footer.appendChild(btn);

            addpost.appendChild(footer);
            addpostdata.appendChild(addpost);
        })
    })
}
// var ddd = document.getElementById("categoryData");
// ddd.addEventListener('click', function print( ) {
//     console.log("ddd" , ddd);
// })
var category=document.getElementById("data1");
// function print(){
    //  var a = document.getElementById('data').value;
    
category.addEventListener('change', (e)=>{

    // console.log(e.target.value);
    
    var selectvalue = e.target.value;
    // if(selectvalue == true){
    // console.log(selectvalue)
    // firebase.database().ref('Posts/' + selectvalue).once('value', (snapshot) => {

    //     snapshot.forEach((da) => {
    //         var ld = da.val();

            firebase.database().ref('Posts/' + selectvalue).once('value', (snapshot) => {
                // snapshot.forEach((data) => {
                    var ld = snapshot.val();
                    // console.log(ud);
                    // snapshot.forEach((v) =>{

            // console.log('ld' , ld);
            // var key = Object.keys(d); 
            // console.log(d);
            // console.log(key.imgUrl, "k")
            // var pic = da.key;
            // var arr = [];
            // var ld = v.val();
            // console.log('key'  , v.key);
            // console.log('ld' , v.imgUrl)
            // var img =  v.imgUrl ;
            // for(var k in ld){
            //     // console.log(ld[k]);
            //     arr.push(ld)[k];
            //     console.log(arr);
            // } 

                    // console.log(img , "va"); 
            // console.log(va , " -- -== =");
            // snapshot.forEach(function (listdata){
        //     var ld = listdata.val();
        //     var key = listdata.key;
        //     // var a =ld.val(imgUrl);
        //     // console.log(a , '=====');

        //     // console.log(ld.keys);
        //     // console.log(listdata.key);
        //     // console.log(ld)
             var image = ld.imgUrl;
             console.log('img ', image); 

            var addpostdata = document.getElementById('addpostdata').innerHTML = " " ;
            var categorydata = document.getElementById('categoryData');
            var addpost = document.createElement("div");
            addpost.setAttribute("id", "addpost");
            var img = document.createElement('img');
            img.setAttribute("src", image);
            // img.className = "img-fluid ";
            addpost.appendChild(img);
            var footer = document.createElement('div');
            footer.setAttribute("class", "cardfooter");
            var h4name = document.createElement('h5');
            var h4namenode = document.createTextNode(ld.Title);
            h4name.className = "name";
            h4name.appendChild(h4namenode);
            footer.appendChild(h4name);
            var h6 = document.createElement('h6');
            // var h6node = document.createTextNode(d.Price);
            h6.innerHTML = "Rs: " + ld.Price;
            //   h6.appendChild(h6node);
            footer.appendChild(h6);
            var category = document.createElement('h6');
            category.className = "category";
            category.innerHTML = "Category: " + ld.Title;
            // var categorynode = document.createTextNode(d.Category);
            // category.appendChild(categorynode);
            footer.appendChild(category);
            var model = document.createElement('h6');
            model.className = "category";
            model.innerHTML = "Model: " + ld.Model;
            // var modelnode = document.createTextNode(d.Model);
            // model.appendChild(modelnode);
            footer.appendChild(model);
            var hr = document.createElement('hr');
            footer.appendChild(hr);

            var b = document.createElement('button');
            b.setAttribute("id", "icon");
            var i = document.createElement('i');
            i.className = "fa fa-heart";
            b.appendChild(i);
            footer.appendChild(b);
            var btn = document.createElement('button');
            btn.setAttribute("id", "iconchat");
            var ichat = document.createElement('i');
            ichat.className = "fa fa-envelope";
            btn.appendChild(ichat);
            footer.appendChild(btn);

            addpost.appendChild(footer);
            categorydata.appendChild(addpost);
            // categorydata.innerHTML = ' ';

// })
            })
            // })
        // }
        })
// }


function searchBar() {
    var searchBar = document.getElementById('myInput');
    var searching = searchBar.value.toLocaleUpperCase();
    var cardImg = document.getElementsByTagName('img');
    var adCardText = document.getElementsByClassName('cardfooter');//li
    // var adCard = document.getElementsByClassName('h5');//li
    var t = document.getElementById('addpostdata');
    

    for (i = 0; i < adCardText.length; i++) {
        var h4 = adCardText[i].getElementsByTagName('h5')[0];
        if (h4.innerHTML.toLocaleUpperCase().indexOf(searching) > -1) {
          adCardText[i].style.display = "inline";
          cardImg[i].style.display = 'inline';
        //   t.style.visibility = 'hidden';
          
        }
        else {
          adCardText[i].style.display = 'none';
            cardImg[i].style.display = 'none';
            // t.style.visibility = 'hidden';
            // adCard[i].style.display = 'none';
        }
    }
    }

    // var cat=e.target.value
//    console.log( data.val())
    
//   var postObject=data.val()

//   var adContainer = document.getElementById("set");
    

       
//   // cardDeck = document.createElement("DIV");
//   // cardDeck.className = "card-deck";
//   // adContainer.appendChild(cardMb3Hoverable);


// var cardMb3Hoverable = document.createElement("DIV");
// cardMb3Hoverable.setAttribute("class", "card mb-4 hoverable");
// adContainer.appendChild(cardMb3Hoverable);

// var viewOverlayZoom = document.createElement("DIV");
// viewOverlayZoom.setAttribute("class", "view overlay zoom");
// viewOverlayZoom.style.backgroundColor="grey"
// cardMb3Hoverable.appendChild(viewOverlayZoom);

// var cardImgTop = document.createElement("IMG");
// cardImgTop.className = "img-fluid card-img-top waves-effect waves-light";
// cardImgTop.setAttribute("id", "adImg");
// cardImgTop.setAttribute("src", postObject.imageUrl);
// viewOverlayZoom.appendChild(cardImgTop);

// var cardBody = document.createElement("DIV");
// cardBody.setAttribute("class", "card-body");
// cardMb3Hoverable.appendChild(cardBody);

// var cardTitle = document.createElement("H2");
// cardTitle.setAttribute("class", "card-title");
// cardTitle.innerHTML = postObject.title;
// // cardTitle.toUppercase()
// cardBody.appendChild(cardTitle);

// var cardText = document.createElement("p");
// cardText.setAttribute("class", "card-text");
// cardText.style.fontSize="16px"
// cardText.innerHTML = postObject.description;
// cardBody.appendChild(cardText);

// var cardPriceTag = document.createElement("H3");
// cardPriceTag.setAttribute("class", "red-text");
// cardPriceTag.innerHTML = "Rs.";


// var cardPrice = document.createElement("h4");
// cardPrice.setAttribute("class", "red-text");
// cardPrice.innerHTML = postObject.price+"/"+"-";
// cardPrice.style.display = "inline";
// cardPriceTag.appendChild(cardPrice);
// // cardPrice.style.margin="10px 0px 0px 0px" 

// cardBody.appendChild(cardPriceTag);

// var hr = document.createElement("HR");
// cardBody.appendChild(hr);

// var adPostBy = document.createElement("P");
// adPostBy.innerHTML = "AD Posted By: ";
// cardBody.appendChild(adPostBy);

// var adPosterName = document.createElement("SPAN");
// adPosterName.className = "text-secondary";
// adPosterName.innerHTML = postObject.fname;
// adPosterName.style.color="blue"
// // adPosterName.style.fontWeight="bolder"

// adPostBy.appendChild(adPosterName);



// var adPosterNum = document.createElement("P");
// adPosterNum.innerHTML = "Contact Number: ";

// var adPosterNumber = document.createElement("SPAN");
// adPosterNumber.innerHTML = postObject.number;
// adPosterNumber.className = "text-secondary"
// adPosterNum.appendChild(adPosterNumber);
// adPosterNumber.style.color="blue"
// // adPosterNumber.style.fontWeight="bold"

// cardBody.appendChild(adPosterNum);


// var watchlater=document.createElement("button");
// var btntext=document.createTextNode("Watch Later")
// watchlater.appendChild(btntext);
// watchlater.setAttribute("class","btn btn-danger")
// cardBody.appendChild(watchlater)

// var chat=document.createElement("button");
// var btntext=document.createTextNode("Chat")
// chat.appendChild(btntext);
// chat.setAttribute("class","btn btn-secondary")
// cardBody.appendChild(chat)



    
    // })
//   })
// }