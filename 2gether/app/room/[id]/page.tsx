import ChatBox from "@/components/ChatBox";
import Participants from "@/components/Participants";
import VideoPlayer from "@/components/VideoPlayer";

export default function RoomPage() {
  return (
    <main className="min-h-screen p-6 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <VideoPlayer />
        </div>

        <div className="h-[500px]">
          <ChatBox />
        </div>
      </div>

      <div className="mt-6">
        <Participants />
      </div>
    </main>
  );
}
