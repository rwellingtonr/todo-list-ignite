import { useState } from "react";
import { CreateButton } from "./components/CreateButton";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import { NoTask } from "./components/NoTask";
import { uuid } from "./utils/uuid";
import { useToast } from "./context/ToastProvider";

type TaskData = {
	id: string;
	todo: string;
};

export function App() {
	const [tasks, setTasks] = useState<TaskData[]>([]);
	const [todo, setTodo] = useState<string>("");
	const [countCompletedTask, setCountCompletedTask] = useState<number>(0);

	const { notification } = useToast();

	const handleCreateTask = () => {
		if (!todo) {
			notification("Campo precisa ser preenchido", "error");
			return;
		}
		const newTask: TaskData = {
			id: uuid(),
			todo,
		};
		setTasks((prev) => [...prev, newTask]);
		setTodo("");
		notification("Task adicionada", "info");
	};

	const handleRemoveTask = (id: string) => {
		const tasksWithoutRemovedOne = tasks.filter((task) => task.id !== id);
		setTasks(tasksWithoutRemovedOne);
	};

	const handleCompletedTask = () => {
		setCountCompletedTask((prev) => prev + 1);
		notification("Mais uma tarefa finalizada", "success");
	};

	return (
		<div className="bg-gray-600 w-screen h-screen m-0 p-0 flex flex-col justify-start items-center">
			<Header />
			<main className="w-96 md:w-[736px] -mt-7">
				<div id="createTask" className="flex gap-2 items-center">
					<Input onChange={({ target }) => setTodo(target.value)} value={todo} />
					<CreateButton onClick={handleCreateTask} />
				</div>
				<article id="contentInfo" className="flex justify-between mb-6 mt-16">
					<div className="flex flex-row gap-2">
						<h5 className="text-blue text-md font-bold">Tarefas criadas</h5>
						<span
							id="tasksCreated"
							className="bg-gray-400 text-gray-200 text-sm font-bold w-6 rounded-full py-[2px] px-2">
							{tasks.length ?? 0}
						</span>
					</div>
					<div className="flex flex-row gap-2">
						<h5 className="text-purple text-md font-bold">Concluídas</h5>
						<span
							id="tasksCompleted"
							className="bg-gray-400 text-gray-200 text-sm font-bold rounded-full py-[2px] px-2 flex flex-row">
							{tasks.length ? `${countCompletedTask} de ${tasks.length}` : "0"}
						</span>
					</div>
				</article>

				{tasks.length ? (
					tasks.map((task) => (
						<Task
							key={task.id}
							id={task.id}
							task={task.todo}
							onRemoveTask={handleRemoveTask}
							onCompletedTask={handleCompletedTask}
						/>
					))
				) : (
					<NoTask />
				)}
			</main>
		</div>
	);
}
