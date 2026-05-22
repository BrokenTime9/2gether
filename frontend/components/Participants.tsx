export default function Participants() {
  const users = ["Alex", "Sarah", "Mike"];

  return (
    <div className="bg-zinc-900 rounded-2xl p-4">
      <h2 className="text-xl font-semibold mb-4">Participants</h2>

      <div className="space-y-3">
        {users.map((user) => (
          <div key={user} className="bg-zinc-800 p-3 rounded-lg">
            {user}
          </div>
        ))}
      </div>
    </div>
  );
}
