export default function CTA() {
  return (
    <section id="start" className="relative py-12 sm:py-14 md:py-16">
      <div className="container-px mx-auto">
        <div className="chat-window rounded-3xl px-6 sm:px-10 py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Chat to Learn—Minimal Distractions</h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">Drop content. Ask questions. Get guidance.
            A calm chat-first flow designed for focus.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="button-primary h-12 px-6 text-base">Start Now</a>
            <a href="#how" className="button-ghost h-12 px-5 text-base">How it works</a>
          </div>
        </div>
      </div>
    </section>
  );
}


