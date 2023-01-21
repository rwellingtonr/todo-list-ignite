import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ToastProvider } from "./context/ToastProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ToastProvider>
			<App />
		</ToastProvider>
	</React.StrictMode>
);
