import JobFitAnalyzer from "./JobFitAnalyzer";
import PortfolioAI from "./PortfolioAI";

export default function AIShowcase() {
  return (
    <section id="AI" className="max-w-8xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-4 text-center">
        AI-Powered Portfolio
      </h2>

      <p className="text-gray-400 text-center mb-14 max-w-3xl mx-auto">
        AI tools: one to evaluate job fit, and one to explain my
        portfolio honestly and professionally.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Job Fit Analyzer Card */}
        <div
          className="
    relative
    min-h-[560px]
    h-full
    bg-neutral-950
    border border-white/10
    rounded-3xl
    p-6
    flex flex-col
    shadow-[0_0_30px_rgba(168,85,247,0.35)]
    hover:shadow-[0_0_45px_rgba(168,85,247,0.55)]
    transition-shadow
  "
        >
          <JobFitAnalyzer />
        </div>

        {/* PortfolioAI Card */}
        <div
          className="
    relative
    min-h-[560px]
    h-full
    bg-neutral-950
    border border-white/10
    rounded-3xl
    p-6
    flex flex-col
    shadow-[0_0_30px_rgba(168,85,247,0.35)]
    hover:shadow-[0_0_45px_rgba(168,85,247,0.55)]
    transition-shadow
  "
        >
          <PortfolioAI />
        </div>
      </div>
    </section>
  );
}
