import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full Stack  okstar Developer",
              "Open Source Developer",
              "Passionate About Clean Code",
              "Builder of Scalable, Real‑World Web Applications"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type