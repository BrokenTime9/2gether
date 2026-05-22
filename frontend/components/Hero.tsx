export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-4">
      <h1 className="text-6xl font-bold max-w-4xl leading-tight">
        Watch Movies Together In Real Time
      </h1>

      <p className="text-zinc-400 mt-6 max-w-2xl text-lg">
        Create rooms, invite friends, sync playback, and chat while watching
        your favorite movies.
      </p>

      <div className="flex gap-4 mt-10">
        <button className="bg-red-500 px-6 py-3 rounded-xl hover:bg-red-600">
          Start Watching
        </button>

        <button className="bg-zinc-800 px-6 py-3 rounded-xl hover:bg-zinc-700">
          Join Existing Room
        </button>
      </div>
    </section>
  );
}
