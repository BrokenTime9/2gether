export default function ChatBox() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-4 h-full flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Live Chat</h2>

      <div className="flex-1 space-y-3 overflow-y-auto">
        <div className="bg-zinc-800 p-3 rounded-lg">
          <p className="font-semibold text-red-400">Alex</p>

          <p>This scene is crazy 😭</p>
        </div>

        <div className="bg-zinc-800 p-3 rounded-lg">
          <p className="font-semibold text-blue-400">Sarah</p>

          <p>No spoilers!</p>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <input
          type="text"
          placeholder="Send message..."
          className="flex-1 bg-zinc-800 rounded-lg px-4 py-2 outline-none"
        />

        <button className="bg-red-500 px-4 rounded-lg">Send</button>
      </div>
    </div>
  );
}
