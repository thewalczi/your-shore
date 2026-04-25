import Image from "next/image"

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center font-sans">
			<h1>Find your shore</h1>
			<input
				type="text"
				name="location"
				id="location"
				className="border-2 border-black rounded-sm w-xl p-2"
			/>
		</div>
	)
}
