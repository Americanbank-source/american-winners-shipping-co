
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

  // Tracking history as a table
  html += '<div class="history"><h3>Tracking History:</h3>';
  html += '<table border="1" cellspacing="0" cellpadding="6"><thead><tr><th>Date</th><th>Time</th><th>Status</th></tr></thead><tbody>';
  data.history.forEach(event => {
    html += '<tr><td>' + event.date + '</td><td>' + event.time + '</td><td>' + event.status + '</td></tr>';
  });
  html += '</tbody></table></div>';

  // Display note in red bold if exists
  if (data.note) {
    html += '<div style="margin-top:20px;color:darkred;font-weight:bold;">' + data.note.replace(/\n/g, "<br>") + '</div>';
  }

  html += '<p><strong>Sender:</strong> ' + data.sender.name + ' (' + data.sender.email + '), ' + data.sender.location + '</p>';
  html += '<p><strong>Receiver:</strong> ' + data.receiver.name + ', ' + data.receiver.address + '</p>';

  if (data.proof) {
    html += '<div class="proof"><h3>Proof / Package Image:</h3>';
    html += '<img src="' + data.proof + '" alt="Package Proof" style="max-width:100%;margin-top:10px;">';
    html += '</div>';
  }

  resultDiv.innerHTML = html;
}
