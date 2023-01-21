import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
	return (
		<input
			{...props}
			type="text"
			aria-label="input task"
			className="h-14 w-full rounded-lg text-gray-100 bg-gray-500 p-4 text-lg outline-none placeholder:text-gray-300 focus-within:ring-1 ring-purple-dark"
			placeholder="Adicione uma nova tarefa"
		/>
	);
}
