import { useState } from "react";

export default function PortfolioAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askPortfolio = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");

    try {
      // FIX: Added 'await' here
      const res = await fetch("http://localhost:8080/api/portfolio-abilities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          projects: "" // Ensure this matches backend expectation
        }),
      });
      
      // FIX: Added 'await' here
      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      console.error(err);
      setAnswer("Sorry, PortfolioAI is unable to respond right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col p-6 w-full">
      <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">Portfolio AI</h3>

      <p className="text-gray-400 mb-8 max-w-2xl">
        An AI assistant that answers questions about my portfolio using only
        verified project and skill data. It does not exaggerate or invent
        information.
      </p>

      {/* Input Box */}
      <div className="border border-gray-700 rounded-xl p-4 bg-black/50">
        <textarea
          className="w-full h-32 bg-transparent resize-none focus:outline-none text-white placeholder:text-gray-600"
          placeholder="Ask about my projects, skills, strengths, or areas I’m improving…"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-gray-500">
            Powered by Google Gemini
          </span>

          <button
            onClick={askPortfolio}
            disabled={loading}
            className="px-5 py-2 rounded-lg bg-white text-black font-medium hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Thinking..." : "Ask Portfolio"}
          </button>
        </div>
      </div>

      {/* Answer Area - Will expand the card naturally now */}
      {answer && (
        <div className="mt-8 border border-white/10 rounded-xl p-6 bg-zinc-900/50 animate-in fade-in duration-500">
          <h3 className="font-semibold mb-3 text-violet-300">Portfolio Response:</h3>
          <div className="whitespace-pre-line text-gray-200 leading-relaxed text-base h-full">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}