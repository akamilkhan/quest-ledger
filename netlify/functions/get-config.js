exports.handler = async (event, context) => {
  const config = {
    apiKey:            process.env.FIREBASE_API_KEY || "",
    authDomain:        process.env.FIREBASE_AUTH_DOMAIN || "",
    projectId:         process.env.FIREBASE_PROJECT_ID || "",
    storageBucket:     process.env.FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "",
    appId:             process.env.FIREBASE_APP_ID || "",
    measurementId:     process.env.FIREBASE_MEASUREMENT_ID || ""
  };

  // If apiKey is missing or empty, return 404
  if (!config.apiKey) {
    return {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Firebase credentials not configured in Netlify environment variables." })
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(config)
  };
};
