import rocket from "~/assets/rocket.svg";

export function Header() {
	return (
		<header className="w-screen h-[12.5rem] flex items-center justify-center gap-3 bg-gray-700">
			<img src={rocket} className="h-9" alt="Rocket logo of the ToDo's webapp" />
			<h1 className="text-[2.5rem] flex">
				<span className="text-blue font-black">to</span>
				<span className="text-purple-dark font-black">do</span>
			</h1>
		</header>
	);
}
