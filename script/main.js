
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
            addpost.appendChild(img);
            var footer = document.createElement('div');
            footer.setAttribute("class", "cardfooter");
            var h4name = document.createElement('h6');
            var h4namenode = document.createTextNode(d.Name);
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
           b.setAttribute("id" , "icon");
            var i = document.createElement('i');
            i.className = "fa fa-heart-o" ;
            b.appendChild(i);
            footer.appendChild(b);
            var btn = document.createElement('button');
            btn.setAttribute("id" , "iconchat");
            var ichat = document.createElement('i');
            ichat.className = "fa fa-comment";
            btn.appendChild(ichat);
            footer.appendChild(btn);

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
