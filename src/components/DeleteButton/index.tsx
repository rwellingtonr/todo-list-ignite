import { Trash } from "phosphor-react";

type DeleteButtonProps = {};

export function DeleteButton({}: DeleteButtonProps) {
	return (
		<span className="bg-transparent p-1 rounded hover:bg-gray-400" aria-label="delete button">
			<Trash
				size={14}
				aria-label="trash icon"
				className="text-gray-300 transition duration-100 ease-out  hover:text-danger   "
			/>
		</span>
	);
}
