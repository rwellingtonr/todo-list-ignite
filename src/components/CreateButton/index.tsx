import { PlusCircle } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

type CreateButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function CreateButton(props: CreateButtonProps) {
	return (
		<button
			{...props}
			aria-label="create button"
			className="bg-blue transition duration-100 ease-out p-4 rounded-lg hover:bg-blue-dark hover:ease-in flex flex-row items-center ">
			<span className="font-bold text-md">Criar</span>
			<PlusCircle size={16} color="#ffff" className="ml-2" />
		</button>
	);
}
