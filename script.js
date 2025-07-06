(async function () {
  const backendURL = "https://rpugateway.onrender.com";

  // Step 1: Get string from Python backend
  const res = await fetch('${backendURL}/api/get-string');
  const data = await res.json();
  const original = data.data;  // e.g., 'current'

  // Step 2: Add "super"
  const modified = original + "super";

  // Step 3: Send back to Python
  const sendRes = await fetch('${backendURL}/api/receive', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 'final': modified })
  });

  
  console.log("From Python:", modified);
})();
