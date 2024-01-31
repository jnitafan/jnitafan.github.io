import { Suspense, useRef, useState } from "react";
import { TextureLoader } from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import {
  Html,
  OrbitControls,
  Outlines,
  GizmoViewport,
  GizmoHelper,
  Box,
  CycleRaycast,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useInView } from "framer-motion";

const Plane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial transparent opacity={0} />
    </mesh>
  );
};

const Cube = (props) => {
  const [ref] = useBox(() => ({
    mass: 1,
    args: [props.scale, props.scale, props.scale],
    ...props,
  }));
  const colorMap = useLoader(TextureLoader, props.img);
  const [active, setActive] = useState(false);
  return (
    <mesh
      castShadow
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setActive(true))}
      onPointerMissed={(e) => (e.stopPropagation(), setActive(false))}
      scale={props.scale}
    >
      <Box args={[1, 1, 1]}>
        <meshPhongMaterial map={colorMap} />
        <Outlines thickness={0.05} color={active ? "#fc5310" : "#25fffb"} />
      </Box>
      <Html className="pointer-events-none">
        <div className={active ? "content opacity-100" : "content opacity-0"}>
          <nobr>{props.name}</nobr>
        </div>
      </Html>
    </mesh>
  );
};

const getRandomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

const CubeCanvas = (tech) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className="h-full">
      <Canvas
        frameloop={inView ? "always" : "never"}
        dpr={[1, 2]}
        shadows
        camera={{ position: [-5, 5, 5], fov: 50 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewport
              axisColors={["#ef4444", "#22c55e", "#3b82f6"]}
              labelColor="black"
            />
          </GizmoHelper>
          <OrbitControls />
          <ambientLight intensity={1} />
          <directionalLight intensity={2} position={[1.1, 1, 0]} />
          <Physics>
            <Plane />
            {tech.cubes.map((technology, index) => (
              <Cube
                position={[
                  getRandomRange(-7.5, 7.5),
                  5 + index * 2,
                  getRandomRange(-7.5, 7.5),
                ]}
                scale={technology.proficiency}
                img={technology.icon}
                name={technology.name}
                key={technology.name}
              />
            ))}
          </Physics>
          <CycleRaycast scroll={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CubeCanvas;
