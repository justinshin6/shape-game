import Navbar from "@/components/Navbar";
import PlayGuest from "@/components/PlayGuest";
import SignIn from "@/components/authentication/SignIn";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Navbar />

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Guess The Game</h1>
        <PlayGuest />
        <SignIn />
      </div>
    </main>
  );
}
