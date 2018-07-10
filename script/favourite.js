var currentuser = localStorage.getItem('currentUser');
console.log(currentuser, "getcurrentuser");

firebase.database().ref('favourite/' + currentuser ).on('value').then(function (data) {
    var Adobject = data.val();
    var keys = Object.keys(Adobject)
    // console.log('keys' , keys);
    var addpostdata = document.getElementById('addpostdata');
    // console.log(Adobject)
    
    for (let id = 0; id < keys.length; id++){
2
      
        var ads = Adobject[keys[id]];
        // console.log(ads)
        var image = ads.imgUrl;
    
        var addpost = document.createElement("div");
        addpost.setAttribute("id", "addpost");
        var img = document.createElement('img');
        img.setAttribute("src", ads.imgUrl);
        // img.className = "img-fluid ";
        addpost.appendChild(img);
        var footer = document.createElement('div');
        footer.setAttribute("class", "cardfooter");
        var h4name = document.createElement('h5');
        var h4namenode = document.createTextNode(ads.Title);
        h4name.className = "name";
        h4name.appendChild(h4namenode);
        footer.appendChild(h4name);
        var h6 = document.createElement('h6');
        // var h6node = document.createTextNode(d.Price);
        h6.innerHTML = "Rs: " + ads.Price;
        //   h6.appendChild(h6node);
        footer.appendChild(h6);
        var category = document.createElement('h6');
        category.className = "category";
        category.innerHTML = "Category: " + ads.Category;
        // var categorynode = document.createTextNode(d.Category);
        // category.appendChild(categorynode);
        footer.appendChild(category);
        var model = document.createElement('h6');
        model.className = "category";
        model.innerHTML = "Model: " + ads.Model;
        // var modelnode = document.createTextNode(d.Model);
        // model.appendChild(modelnode);
        footer.appendChild(model);
        var hr = document.createElement('hr');
        footer.appendChild(hr);
    
        var b = document.createElement('a');
        b.setAttribute("id", "icon");
        let i = document.createElement('i');
        i.setAttribute("id" , "heart")
        i.className = "fa fa-heart-o";
        b.appendChild(i);
        footer.appendChild(b);

        // b.addEventListener('click', ()=>{
        //   let userUid = firebase.auth().currentUser.uid;
        //   let postData = {    

        //         Price: ads.Price,
        //         Title: ads.Title,
        //         imgUrl: ads.imgUrl,
        //         Model: ads.Model,
        //         Category : ads.Category,
        //         user: firebase.auth().currentUser.uid,
                
        //     };
        //   firebase.database().ref('favourite/' + userUid).push(postData)
        //   .then(()=>{
        //     console.log('added');
          
        //   })
        //   // favouriteIcon.removeAttribute("class");
    
          
        // });




        var btn = document.createElement('a');
        btn.setAttribute("id", "iconchat");
        var ichat = document.createElement('i');
        ichat.className = "fa fa-envelope";
        btn.appendChild(ichat);
        footer.appendChild(btn);
        addpost.appendChild(footer);
        addpostdata.appendChild(addpost);
        
        
       
      

         
        
    }
})


