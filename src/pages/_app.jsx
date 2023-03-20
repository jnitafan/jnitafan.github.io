import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'index' } }) {
	const ref = useRef()
	return (
		<>
			<Header title={pageProps.title} />
			<Layout ref={ref}>
				<div className="flex flex-col gap-4">
					<div className="w-screen h-72">
						{Component?.canvas && (
							<Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
								{Component.canvas(pageProps)}
							</Scene>
						)}
					</div>
					<div>
						<Component {...pageProps} />
					</div>
				</div>


			</Layout>
		</>
	)
}
