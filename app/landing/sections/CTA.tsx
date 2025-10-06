"use client";

export default function CTA() {
  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="container-px mx-auto">
        <div className="chat-window rounded-3xl px-6 sm:px-10 py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Ready to learn faster with AI?</h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">Launch the LearnLux app to start reading, understanding, and growing today.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => (window.location.href = "https://learnlux.org")}
              className="button-primary h-12 px-6 text-base"
            >
              Go to LearnLux →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


