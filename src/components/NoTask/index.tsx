import clipboard from "~/assets/clipboard.svg";

export function NoTask() {
	return (
		<div
			id="noTask"
			className="flex flex-col justify-center items-center border-t border-gray-300 text-gray-300 border-1 rounded-lg py-16 px-6">
			<img src={clipboard} alt="clipboard image" className="mb-4" />
			<p className="text-lg bold">Você ainda não tem tarefas cadastradas</p>
			<p className="text-lg">Crie tarefas e organize seus itens a fazer</p>
		</div>
	);
}
