import { ReactNode, createContext, useContext } from "react";
import { Toaster, toast } from "react-hot-toast";

type ToastProviderProps = {
	children: ReactNode;
};
type ToastContextProps = {
	notification: (message: string, type: NotificationType) => void;
};
type NotificationType = "success" | "error" | "info";

const ToastContext = createContext({} as ToastContextProps);

export const useToast = () => useContext(ToastContext);

export function ToastProvider(props: ToastProviderProps) {
	const notification = (message: string, type: NotificationType) => {
		const notificationIconBasedOnType = {
			info: "🚀",
			success: "😮‍💨",
			error: "🐞",
		};

		toast(message, {
			icon: notificationIconBasedOnType[type],
			style: {
				borderRadius: "10px",
				background: "#333",
				color: "#fff",
			},
		});
	};

	return (
		<ToastContext.Provider value={{ notification }}>
			{props.children}
			<Toaster position="bottom-right" reverseOrder={false} />
		</ToastContext.Provider>
	);
}
