import { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/reducers/store";
import { setPlayer } from "@/reducers/slice-actions/playerSlice";

// const players = [
//   {
//     name: "John Doe",
//     role: "Batsman",
//     image:
//       "https://plus.unsplash.com/premium_photo-1721963696949-c6d959e6604f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNyaWNrZXR8ZW58MHwxfDB8fHww",
//     stats: "Avg: 45.5, SR: 135.2",
//   },
//   {
//     name: "Jane Smith",
//     role: "Bowler",
//     image:
//       "https://plus.unsplash.com/premium_photo-1721963697056-e8cde3b8eb53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxjcmlja2V0JTIwcGxheWVyfGVufDB8MXwwfHx8MA%3D%3D?height=300&width=300",
//     stats: "Wickets: 89, Econ: 6.2",
//   },
//   {
//     name: "Bob Johnson",
//     role: "All-rounder",
//     image:
//       "https://images.unsplash.com/photo-1677785643764-179393bc3842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNyaWNrZXR8ZW58MHwxfDB8fHww",
//     stats: "Bat Avg: 38.7, Bowl Avg: 28.3",
//   },
//   {
//     name: "Alice Brown",
//     role: "Wicket-keeper",
//     image:
//       "https://images.unsplash.com/photo-1643294358128-0d2da3b4ea7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGNyaWNrZXR8ZW58MHwxfDB8fHww",
//     stats: "Dismissals: 67, Bat Avg: 32.1",
//   },
// ];

export default function Team() {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const dispatch = useAppDispatch();

  const player = useAppSelector((state) => state.player);
  console.log(player);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_APP_ENDPOINT + "players",
        {
          withCredentials: true,
        }
      );
      console.log(response.data.users);
      dispatch(setPlayer(response?.data?.users));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  if (!player || player.length === 0) {
    return (
      <div className="text-center text-3xl font-bold text-red-500 mt-20">
        Loading...
      </div>
    );
  }
  return (
    <Parallax
      //   bgImage="https://images.unsplash.com/photo-1674986778924-7a33c1531443?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3JpY2tldHxlbnwwfDF8MHx8fDA%3D?height=1080&width=1920"
      strength={300}
      blur={2}
    >
      <section id="team" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Our Team
          </h2>
          <div className="relative h-fit max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={
                "http://localhost:8080/public/img/player/1728026919788-95317386.jpg"
              }
              alt={
                player[currentPlayerIndex]?.firstName +
                " " +
                player[currentPlayerIndex]?.lastName
              }
              className="w-full max-h-fit object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                {player[currentPlayerIndex]?.firstName +
                  " " +
                  player[currentPlayerIndex]?.lastName}
              </h3>
              <p className="text-gray-600">
                {player[currentPlayerIndex]?.playingPosition}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {player[currentPlayerIndex]?.address}
              </p>
            </div>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-1"
              onClick={() =>
                setCurrentPlayerIndex(
                  (prevIndex) => (prevIndex - 1 + player.length) % player.length
                )
              }
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-1"
              onClick={() =>
                setCurrentPlayerIndex(
                  (prevIndex) => (prevIndex + 1) % player.length
                )
              }
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        </div>
      </section>
    </Parallax>
  );
}
