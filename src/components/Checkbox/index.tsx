import { InputHTMLAttributes } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export function Checkbox(props: CheckboxProps) {
	return (
		<div className="relative">
			<input
				{...props}
				id={`inputCheckbox-${props.id}`}
				type="checkbox"
				className="peer/inputCheckbox invisible "
			/>
			<label
				htmlFor={`inputCheckbox-${props.id}`}
				className="border-2 border-blue 
        rounded-full 
        cursor-pointer 
        h-6 w-6 
        absolute 
        left-0 top-0 hover:border-blue-dark 
        peer-checked/inputCheckbox:bg-purple-dark
        peer-checked/inputCheckbox:border-purple-dark
        peer-checked/inputCheckbox:hover:bg-purple
        peer-checked/inputCheckbox:hover:border-purple
        peer-checked/inputCheckbox:after:opacity-100
        peer-checked/inputCheckbox:after:border-gray-100
        after:border-2
        after:border-t-0
        after:border-r-0
        after:absolute
        after:content-['']
        after:h-2
        after:w-3
        after:-rotate-45
        after:left-1
        after:top-1
        after:opacity-0
        "
			/>
		</div>
	);
}
