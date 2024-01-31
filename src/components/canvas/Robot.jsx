import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import { useInView } from "framer-motion";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

import CanvasLoader from "../Loader";

const Robot = (...props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./robot/robot.gltf");
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    actions.Dance.play();
  }, [mixer]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position={[0, -0.25, 0]}
          rotation={[0, 0, 0]}
          scale={0.2}
        >
          <primitive object={nodes.Root} />
          <skinnedMesh
            name="Mesh"
            geometry={nodes.Mesh.geometry}
            material={materials.RobotMat}
            skeleton={nodes.Mesh.skeleton}
          />
          <skinnedMesh
            name="Plane"
            geometry={nodes.Plane.geometry}
            material={materials.FaceMat}
            skeleton={nodes.Plane.skeleton}
          />
        </group>
      </group>
    </group>
  );
};

const RobotCanvas = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className="size-full">
      <Canvas
        className="manipulation"
        shadows
        frameloop={inView ? "always" : "never"}
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          position: [0, 0, -1],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableRotate={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.1} />
          <spotLight
            position={[-0.2, -0.5, 0.1]}
            rotation={[0.1, 0.1, 0.1]}
            color={"#ff7200"}
          />
          <spotLight
            intensity={0.5}
            position={[0.375, 0.4, 0.1]}
            rotation={[0.1, 0.1, 0.1]}
            color={"#25fffb"}
          />
          <Robot />
          <EffectComposer>
            <Bloom
              intensity={5}
              kernelSize={KernelSize.VERY_SMALL}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.01}
              mipmapBlur={false}
            />
          </EffectComposer>
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RobotCanvas;
