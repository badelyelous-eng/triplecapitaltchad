export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container-tct text-center">
        <span className="label-tct block mb-6">
          Design System TCT — Test
        </span>

        <h1 className="mb-6">
          Transformer une vision en impact durable.
        </h1>

        <p
          className="max-w-2xl mx-auto mb-8"
          style={{ color: "var(--color-text)" }}
        >
          Triple Capital Tchad accompagne les gouvernements, les partenaires
          techniques et financiers et les collectivités dans la préparation,
          la structuration et le financement de projets climatiques et de
          développement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-4 rounded-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-surface)",
            }}
          >
            Découvrir nos expertises
          </button>

          <button
            className="px-8 py-4 rounded-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer"
            style={{
              border: "1.5px solid var(--color-primary)",
              color: "var(--color-primary)",
              backgroundColor: "transparent",
            }}
          >
            Échanger sur votre projet
          </button>
        </div>
      </div>
    </main>
  );
}