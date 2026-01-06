import React, { useEffect, useState } from "react";

export default function AboutHome() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="mt-25">
      <div
        className="h-[50vh] bg-center bg-cover relative flex items-center justify-center text-center mt-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1654086317502-531c0d05919b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwZWxlZ2FudHxlbnwxfHx8fDE3NjA2ODE2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div
          className={`relative text-white px-4
            transition-all duration-700 ease-out
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-[26px] font-semibold mb-2">О нас</h1>
          <p className="text-[20px] font-normal">
            История, миссия и наши ценности
          </p>
        </div>
      </div>
    </section>
  );
}
