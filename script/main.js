
function getAdds() {
    firebase.database().ref('Posts/').once('value', (snapshot) => {
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

    function myFunction (){
        var input = document.getElementById('myInput').value;
        var h5 = document.getElementsByClassName('name')[0];
        if(!input.match(h5)){
            alert('ok');
        }
        else{
            alert('ot ok');
        }
    }


// function myFunction() {
//     var input,  addpost, cardfooter, h6, i;
//     input = document.getElementById("myInput").value.toUpperCase();
//     addpost = document.getElementById("addpost");
//     cardfooter = document.getElementsByClassName("cardfooter");
//     for (i = 0; i < cardfooter.length; i++) {
//         h6 = cardfooter[i].getElementsByTagName("h5")[0].value;
//         h6.toUpperCase(input);
//         if (h6 == indexOf(input) > -1) {
//             addpost.style.display = "none";
//         } else {
//             addpost.style.display = "inline";
//             addpost.style.width = "50px";

//         }
//     }
// }



// $(document).ready(function(){
//     $("#myInput").on("keyup", function() {
//       var value = $(this).val().toLowerCase();
//       $("#addpostdata *").filter(function() {
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//       });
//     });
//   });

    //                 function search(){
    //     var search=document.getElementById("myInput").value.toUpperCase();
    //     // var filter=search.toUpperCase();
    //     var card = document.getElementsByTagName('img')[0];
    //     var cardb = document.getElementsByClassName('cardfooter')[0];

    //     for(i=0;i<cardb.length;i++){
    //   var h2=cardb[i].getElementsByTagName("h6")[0];
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
