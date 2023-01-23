import { useState } from "react";
import { Checkbox } from "../Checkbox";
import { DeleteButton } from "../DeleteButton";

type TaskProps = {
	task: string;
	id: string;
	onRemoveTask: (id: string) => void;
	onCompletedTask: (id: string, isCompleted: boolean) => void;
};

export function Task({ task, onRemoveTask, id, onCompletedTask }: TaskProps) {
	const [strickenTask, setStrickenTask] = useState(false);

	const handleCompletedTask = (id: string) => {
		const isCompleted = !strickenTask;
		onCompletedTask(id, isCompleted);
		setStrickenTask(isCompleted);
	};

	return (
		<div className="flex p-4 gap-3 mb-3 bg-gray-500 items-center rounded-lg w-full">
			<Checkbox id={id} onChange={() => handleCompletedTask(id)} />
			<p
				id={id}
				className={`pl-3 text-md flex-1 ${
					strickenTask ? "text-gray-300 line-through" : "text-gray-100"
				}`}>
				{task}
			</p>
			<DeleteButton onClick={() => onRemoveTask(id)} />
		</div>
	);
}
