document.addEventListener('DOMContentLoaded', function() {
    var newAccessoryForm = document.getElementById('newAccessoryForm');
    var loginForm = document.querySelector('form');
    var welcomeMessage = document.getElementById('welcomeMessage');
    var createButton = document.getElementById('createButton');
    var updateButton = document.getElementById('updateButton');
    var deleteButton = document.getElementById('deleteButton');
    var searchButton = document.getElementById('searchButton');
  
    // Make the buttons not visible until the manager enters their username and password
    createButton.style.display = 'none';
    updateButton.style.display = 'none';
    deleteButton.style.display = 'none';
    searchButton.style.display = 'none';
    newAccessoryForm.style.display = 'none';
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the entered username and password
      var usernameInput = document.getElementById("uname");
      var passwordInput = document.getElementById("psw");
      var username = usernameInput.value;
      var password = passwordInput.value;
  
      if (username === 'admin' && password === '12345') {
        welcomeMessage.textContent = 'Hello, Manager';
        createButton.style.display = 'block';
        updateButton.style.display = 'block';
        deleteButton.style.display = 'block';
        searchButton.style.display = 'block';
        loginForm.style.display = 'none';
      } else {
        // Not the manager
        alert('Invalid username or password. Please try again.');
      }
    });
  });

      /////////////////////////////////////////
       /* 
      newAccessoryForm.addEventListener('submit', async function(event) {
      event.preventDefault(); // Prevent form submission
      var newAccessoryForm = document.getElementById('newAccessoryForm');
      newAccessoryForm.style.display = 'block';
      const newprice = document.getElementById("price");
      const newimg = document.getElementById("pictureUrl");
      const newtitle= document.getElementById("title");
      const file = newimg.files[0];
      const formData = new FormData();
     formData.append("file", file);
      
     const filename = await res.json();
      
     await fetch("/api/createProduct", {
         method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newtitle.value,
            price: newprice.value,
            image: `/img/${filename.fileName}`,
          }),
        });
        newname.value = "";
        newprice.value = "";
        newimg.value = "";
        newqua.value = "";
      });*/
      /////////////////////////////////////////////////////
    
      function createNew() {
        var newAccessoryForm = document.getElementById('newAccessoryForm');
        newAccessoryForm.style.display = 'block';
      
        newAccessoryForm.addEventListener('submit', async function (event) {
          event.preventDefault(); // Prevent form submission
      
          var category = document.getElementById('category').value;
          var pictureUrl = document.getElementById('pictureUrl').value;
          var title = document.getElementById('title').value;
          var price = document.getElementById('price').value;
      
          const formData = new FormData();
          formData.append('file', pictureUrl);
      
          const uploadResponse = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
      
          const { fileName } = await uploadResponse.json();
      
          await fetch('/api/createProduct', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title,
              price,
              image: `/img/${fileName}`,
            }),
          });
      
          // Clear the form input values
          document.getElementById('category').value = '';
          document.getElementById('pictureUrl').value = '';
          document.getElementById('title').value = '';
          document.getElementById('price').value = '';
      
          // Optional: Show a success message or perform any additional actions
          alert('Product created successfully!');
        });
      }
      
        /*
          var targetContainer;
          if (category === 'rings') {
            targetContainer = document.getElementsByClassName('rings-container');
          } else if (category === 'necklaces') {
            targetContainer = document.getElementsByClassName('necklaces-container');
          } else if (category === 'bracelets') {
            targetContainer = document.getElementsByClassName('bracelets-container');
          } else {
            // Invalid category
            console.log('Invalid category');
            return;
          }
      var accessoryDiv = document.createElement('div');
      accessoryDiv.innerHTML = `
        <img src="${pictureUrl}" alt="${title}">
        <h3>${title}</h3>
        <p>Price: ${price}</p>
      `;
  
      targetContainer.appendChild(accessoryDiv);
  
      var categoryPage = category + '.html';
      var targetPage = window.location.origin + '/views/' + categoryPage;
      window.location.href = targetPage;
      
    });*/
  
  