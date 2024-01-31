import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { BlendFunction } from "postprocessing";
import {
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";

import CanvasLoader from "../Loader";

const Me = () => {
  const me = useGLTF("./me/jacob.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={0.1} />
      <spotLight
        position={[0, 5, -1]}
        angle={0.3}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={me.scene}
        scale={0.75}
        position={[0.5, -3.75, -0.5]}
        rotation={[0, 1.3, 0]}
      />
    </mesh>
  );
};

const MeCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [17, 3, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={-1}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Me />
        <EffectComposer>
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={[0.005, 0]}
          />
        </EffectComposer>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MeCanvas;
