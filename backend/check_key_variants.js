const { GoogleGenerativeAI } = require("@google/generative-ai");

const variants = [
    "AIzaSyAdap3-QXvsC-WOOt5NtP-PdV_mRzMIlck", // Original (I, l)
    "AIzaSyAdap3-QXvsC-WOOt5NtP-PdV_mRzMllck", // (l, l)
    "AIzaSyAdap3-QXvsC-WOOt5NtP-PdV_mRzMIIck", // (I, I)
    "AIzaSyAdap3-QXvsC-WOOt5NtP-PdV_mRzMlIck", // (l, I)
    "AIzaSyAdap3-QXvsC-WOOt5NtP-PdV_mRzMilck", // (i, l) - unlikely but possible
];

async function testVariant(key, index) {
    console.log(`Testing Variant ${index + 1}: ${key}`);
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        await model.generateContent("Test");
        console.log(`✅ MATCH FOUND! The correct key is: ${key}`);
        process.exit(0);
    } catch (error) {
        console.log(`❌ Variant ${index + 1} failed.`);
    }
}

async function run() {
    for (let i = 0; i < variants.length; i++) {
        await testVariant(variants[i], i);
    }
    console.log("All variants failed.");
}

run();
