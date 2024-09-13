import { Parallax } from "react-parallax";

export default function Hero() {
  return (
    <Parallax
      bgImage="https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=1080&width=1920"
      strength={500}
    >
      <div
        id="home"
        className="h-screen flex items-center justify-center text-black"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Mt. 8848 Cricket Club
          </h1>
          <p className="text-xl">Reaching new heights in cricket</p>
        </div>
      </div>
    </Parallax>
  );
}
