import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, PerspectiveCamera } from '@react-three/drei'

export default function Scene({ children, ...props }) {
	// Everything defined in here will persist between route changes, only children are swapped
	return (
		<Canvas {...props}>
			<directionalLight intensity={0.75} />
			<ambientLight intensity={0.75} />
			<PerspectiveCamera position={[0, 0, 0]} fov={45}>
				{children}
			</PerspectiveCamera>
			<Preload all />
		</Canvas>
	)
}
