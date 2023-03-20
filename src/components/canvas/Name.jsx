import * as THREE from 'three'

import { useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useFrame } from '@react-three/fiber'
import { useCursor, Text3D, Center, PivotControls } from '@react-three/drei'
import disco from '/public/fonts/CompactDiscoRegular.json'

export default function Name({ ...props }) {
	const mesh = useRef(null)
	const [hovered, hover] = useState(false)

	useCursor(hovered)
	useFrame((state, delta) => {
		const t = state.clock.getElapsedTime()
		mesh.current.rotation.y = Math.sin(t / 2) * (Math.PI / 16)
		mesh.current.rotation.x = Math.cos(t / 2) * (Math.PI / 16)
	})

	return (
		<group ref={mesh} {...props}>
			<Center top>
				<Text3D font={disco} size="2" height="0.05">
					Jacobs Portfolio
					<meshStandardMaterial color="#348feb" />
				</Text3D>
			</Center>
		</group>
	)

}
