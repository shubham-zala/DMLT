const axios = require('axios');
require('dotenv').config();

const generateContent = async (topic) => {
  const prompt = `
You are an expert tutor for DMLT (Diploma in Medical Laboratory Technology) students in India.
Your job is to help students prepare for THEORY, PRACTICALS, and VIVA exams.

Topic: "${topic}"

Target Audience:
• 1st & 2nd year DMLT students
• Indian exam and lab context
• Simple, clear, viva-oriented language

IMPORTANT RULES:
• Be exam-focused
• Provide detailed theory where needed
• Use medically correct terms
• Output MUST be valid JSON only (no markdown, no extra text)

-----------------------------------
OUTPUT FORMAT (STRICT JSON)
-----------------------------------

{
  "topic": "${topic}",

  "viva_answer_format": {
    "definition": "One-line clear definition suitable for viva",
    "principle": "Short explanation of the working principle",
    "procedure": "Brief steps involved in the test or concept",
    "normal_values": "Normal reference values with units (if applicable)",
    "clinical_importance": "Why this test/concept is important clinically"
  },

  "detailed_explanation": "A detailed, comprehensive explanation (150-200 words) ensuring the student fully understands the concept, including background and key details",

  "diagram_reference": {
    "what_to_draw": "What diagram should be drawn in exam",
    "labels_to_include": ["Label 1", "Label 2", "Label 3"],
    "exam_drawing_tips": [
      "Tip 1 for neat diagram",
      "Tip 2 commonly expected by examiners"
    ]
  },

  "viva_questions": [
    {
      "question": "Question 1",
      "answer": "Short, direct answer",
      "importance": "most_asked"
    },
    {
      "question": "Question 2",
      "answer": "Short, direct answer",
      "importance": "normal"
    },
    {
      "question": "Question 3",
      "answer": "Short, direct answer",
      "importance": "most_asked"
    },
    {
      "question": "Question 4",
      "answer": "Short, direct answer",
      "importance": "normal"
    },
    {
      "question": "Question 5",
      "answer": "Short, direct answer",
      "importance": "normal"
    },
    {
      "question": "Question 6",
      "answer": "Short, direct answer",
      "importance": "normal"
    },
    {
      "question": "Question 7",
      "answer": "Short, direct answer",
      "importance": "most_asked"
    },
    {
      "question": "Question 8",
      "answer": "Short, direct answer",
      "importance": "normal"
    },
    {
      "question": "Question 9",
      "answer": "Short, direct answer",
      "importance": "normal"
    },
    {
      "question": "Question 10",
      "answer": "Short, direct answer",
      "importance": "normal"
    }
  ],

  "common_mistakes": [
    "Common mistake students make in exams or labs",
    "Another frequent error related to this topic",
    "One mistake examiners often penalize"
  ],

  "examiner_traps": [
    "Trick or confusion examiners may test",
    "Concept students usually mix up"
  ],

  "difficulty_level": "Easy / Medium / Hard",

  "quick_revision_points": [
    "1-line revision point",
    "High-yield fact for last-minute revision",
    "Common viva sentence students can say"
  ]
}

-----------------------------------
FINAL CHECK BEFORE RESPONDING
-----------------------------------
• JSON must be valid
• Exactly 10 viva questions
• Use Indian lab practices and syllabus tone
• No emojis, no markdown, no explanations outside JSON
  `;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo", // Cost-effective default, can also use "google/gemini-pro" via OpenRouter
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        response_format: { type: "json_object" } // Valid for some models, ensures JSON
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5000", // Required by OpenRouter
          "X-Title": "DMLT Viva Prep", // Optional
        },
      }
    );

    const content = response.data.choices[0].message.content;

    // Attempt to parse JSON
    try {
      return JSON.parse(content);
    } catch (e) {
      // Fallback for markdown code blocks
      const cleanText = content.replace(/```json/g, '').replace(/```/g, '').trim();
      return JSON.parse(cleanText);
    }

  } catch (error) {
    console.error("OpenRouter API Error:", error.response ? error.response.data : error.message);
    throw new Error("Failed to generate content");
  }
};

module.exports = { generateContent };
