Example: Full Workflow for Ethical Data Collection
1. Fake Web Page (HTML + JavaScript)
html
Copy
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Collection Test</title>
</head>
<body>
    <h1>Welcome to My Test Page</h1>
    <p>This page collects data for testing purposes in my sandbox lab.</p>

    <script>
        // Collecting the user's IP and browser data
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ip = data.ip;
                const browser = navigator.userAgent;

                // Send the data to the local server (ensure it's secure)
                fetch('https://localhost:5000/save', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ip: ip, browser: browser })
                }).then(response => {
                    console.log("Data sent successfully.");
                }).catch(error => {
                    console.error("Error sending data:", error);
                });
            });
    </script>
</body>
</html>
2. Attacker Server (Flask Example)
Here’s a secure Flask server that listens for incoming data and stores it in a .txt file. You can adjust this to use more secure storage like a database if needed.

python
Copy
from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route('/save', methods=['POST'])
def save_data():
    # Collect and log the data sent from the fake page
    data = request.get_json()
    ip = data.get('ip')
    browser = data.get('browser')

    # Log the data in a secure way (make sure file permissions are safe)
    with open('collected_data.txt', 'a') as f:
        f.write(f"IP: {ip}, Browser: {browser}\n")

    # Respond with a success message
    return jsonify({"message": "Data saved successfully!"})

if __name__ == '__main__':
    # Ensure the server is running on HTTPS for local testing (with a self-signed cert if needed)
    app.run(host='0.0.0.0', port=5000, ssl_context='adhoc')
3. Security Best Practices: