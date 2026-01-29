import React, { useState } from "react";

export default function JobFitAnalyzer() {
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeFit = async () => {
    if (!jobDesc) return;
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://localhost:8080/api/job-fit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription: jobDesc }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Failed to analyze the job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col p-6 w-full">
      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Job Fit Analyzer</h3>
      <p className="text-gray-400 mb-6">
        Write a job description to see how well my skills match the role.
      </p>

      {/* Input Box */}
      <div className="border border-gray-700 rounded-xl p-4 bg-black/50">
        <textarea
          className="w-full h-32 bg-transparent resize-none focus:outline-none text-white placeholder:text-gray-600"
          placeholder="Paste job description here..."
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
        />

        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-gray-500">
            Powered by Google Gemini
          </span>

          <button
            onClick={analyzeFit}
            disabled={loading}
            className="px-6 py-2 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Fit"}
          </button>
        </div>
      </div>

      {result && (
        <div className="mt-8 space-y-6 animate-in fade-in duration-500">
          <div className="p-4 bg-zinc-900 rounded-xl border border-white/10">
             <div className="text-3xl font-bold text-violet-400 mb-2">
                Fit Score: {result.fit_score}%
             </div>
             <p className="text-lg text-gray-300 italic">
                "{result.overall_verdict}"
             </p>
          </div>

          {/* Strong Matches */}
          {result.strong_matches && result.strong_matches.length > 0 && (
            <div>
              <h3 className="font-semibold text-green-400 mb-2">✅ Strong Matches</h3>
              <ul className="list-disc ml-5 text-gray-300 space-y-1">
                {result.strong_matches.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Missing Skills */}
          {result.missing_skills && result.missing_skills.length > 0 && (
            <div>
              <h3 className="font-semibold text-red-400 mb-2">⚠️ Missing Skills</h3>
              <ul className="list-disc ml-5 text-gray-300 space-y-1">
                {result.missing_skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}

           {/* Recommended Projects */}
           {result.recommended_projects_to_highlight && result.recommended_projects_to_highlight.length > 0 && (
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">🚀 Highlight Projects</h3>
              <ul className="list-disc ml-5 text-gray-300 space-y-1">
                {result.recommended_projects_to_highlight.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}