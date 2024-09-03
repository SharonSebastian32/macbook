import { Environment, ScrollControls } from "@react-three/drei";
import "./Styles.css";
import { Canvas } from "@react-three/fiber";
import MacContainer from "./Components/MacComponents";

const App = () => {
  return (
    <div className="w-full h-screen ">
      <div className="absolute  flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2 font-Helvetica">
        <h2 className="text-3xl tracking-tighter font-[700]">macBook Pro</h2>
        <h5>Oh so pro</h5>
        <br />
        <p className="text-center w-3/4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",
          ]}
        />

        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
