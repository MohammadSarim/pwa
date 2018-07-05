
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
var ddd = document.getElementById("data")
ddd.addEventListener('click', print())

function print(){
     var a = document.getElementById('data').value;
    firebase.database().ref('Posts/' + a).once('value', (snapshot) => {
        // var addpostdata = document.getElementById('categoryData')
        snapshot.forEach((data) => {
            var d = data.val();
            // var key = Object.keys(d); 
            // console.log(d);
            // console.log(key.imgUrl, "k")
            var image = d.imgUrl;
            
            // console.log('a',a);
            var usercategory = document.getElementById('categoryData');
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
            usercategory.appendChild(addpost);
            console.log('a' ,a);
        })
    })
}
