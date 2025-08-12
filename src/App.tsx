import "./App.css";
import { Courses } from "./components/Courses";
import { SocialMedia } from "./components/SocialMedia";

function App() {
	return (
		<>
			<header className="text-white">
				<img
					alt="midudev sonrisa"
					src="src/assets/me-big.webp"
					className="h-[50vh] mx-auto object-cover mask-radial-at-center mask-radial-from-45% mask-radial-to-80% z-10"
				/>
			</header>
			<section className="flex flex-col justify-center items-center -mt-5 z-50 text-white">
				<span className="text-xl text-sky-400 font-mono px-3 py-1 border rounded-full shadow-sm bg-black/90">
					@miduDev{" "}
					<svg
						className="ml-1 w-5 h-5 text-sky-400 inline"
						fill="currentColor"
						viewBox="0 0 20 20"
						aria-hidden="true">
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 11.172l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clipRule="evenodd"
						/>
					</svg>
				</span>

				<h1 className="text-3xl font-bold leading-tight mt-1 pt-4">
					Miguel Angel Dúran
				</h1>

				<SocialMedia />
				<p className="text-primary-light text-center mt-4 text-sm px-4 text-balance mb-5">
					Divulgador de programación, streamer y creador de contenido. Enseñando
					JavaScript, React, Node.js de forma divertida
				</p>
			</section>
			<main className="pt-4 px-4">
				<Courses />
			</main>
		</>
	);
}

export default App;
