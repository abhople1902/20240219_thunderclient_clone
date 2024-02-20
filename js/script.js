// document.getElementById('send-button').addEventListener('click', function() {
//   var method = document.getElementById('method-dropdown').value;
//   var url = document.getElementById('url-input').value;
//   var requestBody = document.getElementById('request-body').value;

//   fetch(url, {
//       method: method,
//       body: requestBody,
//       headers: {
//           'Content-Type': 'application/json'
//           // Add other headers as needed
//       }
//   })
//   .then(response => {
//       document.getElementById('response-status').innerText = `Status: ${response.status} ${response.statusText}`;
//       return response.json();
//   })
//   .then(data => {
//       document.getElementById('response-body').innerText = JSON.stringify(data, null, 2);
//   })
//   .catch(error => {
//       console.error('Error:', error);
//   });
// });






// import('node-fetch').then(async (fetchModule) => {
//   const fetch = fetchModule.default;
  
//   // Your code using fetch goes here
//   const url = 'http://localhost:3000/products';
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log('Data fetched successfully:', data);
// }).catch((err) => {
//   console.error('Error loading node-fetch module:', err);
// });





const apiUrl = 'http://localhost:3000/products/65d2e703d27a46434d455d64';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
