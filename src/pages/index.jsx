import dynamic from 'next/dynamic'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Name = dynamic(() => import('@/components/canvas/Name'), { ssr: false })

// Dom components go here
export default function Page(props) {
	return (
		<div className="w-full h-screen max-w-screen-xl p-6">
			<div className="shadow bg-slate-100 rounded-xl">
				Text example stuff
			</div>

		</div>
	)
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Name scale={1} route='/blob' position-y={-1} />

export async function getStaticProps() {
	return { props: { title: 'Index' } }
}