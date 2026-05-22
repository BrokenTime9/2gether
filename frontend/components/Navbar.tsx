export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-800">
      <h1 className="text-2xl font-bold text-red-500">WatchParty</h1>

      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700">
          Join Room
        </button>

        <button className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600">
          Create Room
        </button>
      </div>
    </nav>
  );
}
