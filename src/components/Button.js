import React from "react";

const Button = (props) => {
	const { variant, disabled, disabledShadow, startIcon, endIcon, size, color } =
		props;
	// console.log(Object.keys(props));

	// the conditions in the curly braces means if there is a property such as diabledShadow, then add a class of 'disabledShadow'
	// if there is a property of disabled and no property of variant then add a class of 'disabled'
	// if there is a property of iconLeft or iconRight or size, then add a class of blue-default

	let classes = `btn-project ${variant} ${size} ${color} 
	${disabledShadow && "disabledShadow"}
	${disabled && !variant && "disabled"} 
	${disabled && variant && "disabledVariant"} 
	${(startIcon || endIcon || size) && "blue-default"} 
	${Object.keys(props).length < 1 && "ordinary"}
	`;

	// disabled && !variant && (classes += " disabled");
	// disabled && variant && (classes += " disabledVariant");
	// disabledShadow && (classes += " disabledShadow");
	// size && (classes += " blue-default");
	// (iconLeft || iconRight) && (classes += " blue-default");

	// Object.keys(props).length < 1 && (classes += " ordinary");

	// let text =
	// 	(color
	// 		&&
	// 		`${color.slice(0, 1)}`.toUpperCase() +
	// 			`${color.slice(1)}`.toLowerCase()) ||
	// 	"Default";

	let text = (color && color !== "primary" && color) || "Default";
	// color == "primary" && (text = "Default");

	// if there is a property such as iconRight, then add the class of me
	let iconClass = `material-symbols-outlined 
	${startIcon && "me"} ${endIcon && "ms"}`;
	// iconLeft && (iconClass += " me");
	// iconRight && (iconClass += " ms");
	return (
		<button className={classes}>
			{startIcon && <span className={iconClass}>{startIcon}</span>}
			{text}
			{endIcon && <span className={iconClass}>{endIcon}</span>}
		</button>
	);
};

export default Button;
