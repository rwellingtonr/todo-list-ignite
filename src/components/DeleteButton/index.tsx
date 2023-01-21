import { Trash } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

type DeleteButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function DeleteButton(props: DeleteButtonProps) {
	return (
		<button
			{...props}
			className="bg-transparent p-1 rounded cursor-pointer hover:bg-gray-400"
			aria-label="delete button">
			<Trash
				size={24}
				aria-label="trash icon"
				className="text-gray-300 transition duration-100 ease-out  hover:text-danger   "
			/>
		</button>
	);
}
