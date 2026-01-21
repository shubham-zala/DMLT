const { GoogleGenerativeAI } = require("@google/generative-ai");

// The key provided by user (and seen in screenshot)
const KEY = "AIzaSyAdap3-QXvsC-WOOt5NtP-PdV_mRzMIlck";

async function testKey() {
    console.log("Testing API Key:", KEY);
    const genAI = new GoogleGenerativeAI(KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        const prompt = "Hello world";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log("SUCCESS! API Key is valid.");
        console.log("Response:", text);
    } catch (error) {
        console.log("FAILURE! API Key rejected.");
        console.log("Error Message:", error.message);
        if (error.response) {
            console.log("Error Response Body:", JSON.stringify(error.response, null, 2));
        }
    }
}

testKey();
