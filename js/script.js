document.getElementById('send-button').addEventListener('click', function() {
  var method = document.getElementById('method-dropdown').value;
  var url = document.getElementById('url-input').value;
  var requestBody = document.getElementById('request-body').value;

  fetch(url, {
      method: method,
      body: requestBody,
      headers: {
          'Content-Type': 'application/json'
          // Add other headers as needed
      }
  })
  .then(response => {
      document.getElementById('response-status').innerText = `Status: ${response.status} ${response.statusText}`;
      return response.json();
  })
  .then(data => {
      document.getElementById('response-body').innerText = JSON.stringify(data, null, 2);
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
