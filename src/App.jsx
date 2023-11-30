import { useState } from "react";

function App() {
	//fix the on toggle when rating button is clicked
	const [isActive, setIsActive] = useState(null);

	const handleClick = (idx) => {
		setIsActive(idx);
	};

	return (
		/* Rating slide */
		<div className="w-96 h-96 whitespace-nowrap overflow-hidden">
			<div className="inline-block break-words align-top whitespace-normal">
				<div
					className="w-96 h-96 p-5 rounded-3xl text-white flex flex-col gap-8"
					style={{
						backgroundColor: "#1a202c",
					}}
				>
					<div>
						<img
							src="/icon-star.svg"
							alt="star"
							width={30}
							height={30}
						/>
					</div>

					<h1 className="text-2x1 font-bold     gap-4">
						How did we do?
					</h1>
					<p className="text-gray-400 text-sm">
						Please let us know what we did whit your support
						request. All feedback is appriciated to help us improve
						our offering!
					</p>
					<div className="grid grid-cols-5 gap-5">
						{[1, 2, 3, 4, 5].map((i) => {
							return (
								<div
									key={i}
									className={`grid place-content-center text-gray-400 h-12 w-12 rounded-full bg-zinc-900 cursor-pointer   hover:bg-white hover:text-orange-500 transition-all
                  ${
						isActive === i
							? "bg-yellow-500 hover:bg-yellow-500 text-white hover:text-white"
							: ""
					}`}
									onClick={() => handleClick(i)}
								>
									{i}
								</div>
							);
						})}
					</div>
					<button
						className="w-full text-2l bg-orange-500 rounded-3xl py-2 hover:bg-white hover:text-orange-500 transition-all" /* onClick={handleSubmit} */
					>
						Submit
					</button>
				</div>
			</div>

			{/* Thank you slide */}
			<div className="inline-block break-words align-top whitespace-normal">
				<div
					className="w-96 h-96 p-6 rounded-3xl text-white flex flex-col item-center gap-10"
					style={{
						backgroundColor: "#1a202c",
					}}
				>
					<img
						src="/illustration-thank-you.svg"
						alt="thank you"
						width={150}
						height={150}
						className="mx-auto object-center object-cover"
					/>
					<span className="text-center bg-zinc-900 px-5 py-2 rounded-3xl text-orange-500">
						You selected 3 out of 5
					</span>
					<div className="text-center">
						<h1 className="text-2xl font-bold">Thank You!</h1>
						<p className="text-sm text-gray-400">
							we appriciate you taking the time to give a rating.
							if you ever need more support, do not hesitate to
							get in touch!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
