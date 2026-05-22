export default function VideoPlayer() {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden">
      <div className="aspect-video bg-black flex items-center justify-center">
        <p className="text-zinc-500">Video Player</p>
      </div>

      <div className="flex items-center gap-4 p-4 border-t border-zinc-800">
        <button className="bg-red-500 px-4 py-2 rounded-lg">Play</button>

        <button className="bg-zinc-700 px-4 py-2 rounded-lg">Pause</button>

        <button className="bg-zinc-700 px-4 py-2 rounded-lg">Sync</button>
      </div>
    </div>
  );
}
