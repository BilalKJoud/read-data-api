fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(json =>{
        var ul = document.getElementById('loulou') 
        json.forEach(element => { 
            var li = document.createElement('li');
            li.innerHTML = element.name;
            li.style.listStyle = "none";
            li.style.display = "inline-block";
           

            var lid = document.createElement('li');
            lid.innerHTML = element.id;
            lid.style.listStyle = "none";
            
            var img = document.createElement('img');
            img.src = element.image;
            img.style.width = "100px";
            img.style.display = "block";
            img.style.marginTop = "10px";
            img.style.borderRadius = "10px";
            img.style.borderRadius = "10px";
            
            li.appendChild(img);
            
            ul.appendChild(lid)
            ul.appendChild(li);
            
           
        });
              console.log(json)
         }) 