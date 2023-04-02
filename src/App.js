import { Canvas, useLoader } from "@react-three/fiber";
import "./App.css";
import { OrbitControls, Environment } from "@react-three/drei";
import { Minecraft } from "./Minecraft";
import { Suspense, useState } from "react";

function App() {
  const [cofres, setCofres] = useState(true);
  const [antorchas, setAntorchas] = useState(true);

  console.log(cofres);
  return (
    <div className="App">
      <button className="quitar-cofres" onClick={() => setCofres(!cofres)}>
        Quitar cofres
      </button>
      <button className="quitar-cofres" onClick={() => setAntorchas(!antorchas)}>
        Quitar antorchas
      </button>
      <Canvas>
        <Suspense>
          <Minecraft cofres={cofres} antorchas={antorchas} />
          <Environment files="./hdr/decor_shop_1k.hdr" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
