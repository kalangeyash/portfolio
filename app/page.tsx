"use client";

import Silk from "./components/Silk";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Silk />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <div className="text-white text-4xl font-bold">
            My name is Yash Kalange
        </div>
        <div className="text-gray-400 text-3xl font-bold">
            I am a Computer Engineer Graduate
        </div>
      </div>
    </div>
    <div className="h-screen w-screen bg-black">

    </div>
    </div>
  );
}
