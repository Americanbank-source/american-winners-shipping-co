
function trackItem() {
  const input = document.getElementById('trackingNumber').value.trim();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  if (!trackingData[input]) {
    resultDiv.innerHTML = '<p style="color:red;">Tracking number not found.</p>';
    return;
  }

  const data = trackingData[input];
  let html = '<h2>Tracking Number: ' + input + '</h2>';

  html += '<p><strong>Current Location:</strong> ' + data.current_location + '</p>';
  html += '<p><strong>Expected Delivery:</strong> ' + data.expected_delivery + '</p>';

  html += '<div class="history"><h3>Tracking History:</h3>';
  data.history.forEach(event => {
    html += '<div><strong>' + event.date + ' ' + event.time + '</strong>: ' + event.status + '</div>';
  });
  html += '</div>';

  html += '<p><strong>Sender:</strong> ' + data.sender.name + ' (' + data.sender.email + '), ' + data.sender.location + '</p>';
  html += '<p><strong>Receiver:</strong> ' + data.receiver.name + ', ' + data.receiver.address + '</p>';

  resultDiv.innerHTML = html;
}
