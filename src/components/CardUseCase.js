import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box, Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "#",
	"text-decoration-line": "initial"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"border-radius": "4px",
			"box-shadow": "0 3px 8px 0 rgba(0,0,0,.08)",
			"align-items": "center",
			"max-width": "100%",
			"transition": "transform .3s ease-in-out,-webkit-transform .3s ease-in-out",
			"hover-box-shadow": "0 3px 8px 0 rgba(0,0,0,.11)",
			"hover-transform": "translate(0,-2px)",
			"margin": "0 0 16px 0"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"width": "80px",
			"height": "80px",
			"justify-content": "center",
			"align-items": "center",
			"border-radius": "4px 0px 0px 4px",
			"background": "--color-buttonBlue"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "40px/40px undefined",
			"children": "🙌"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"display": "inline",
			"height": "auto",
			"font": "500 20px/24px --fontFamily-googleUbuntu",
			"margin": "0 0 0 24px",
			"children": "Measure Company Culture",
			"color": "--dark"
		}
	}
};

const CardUseCase = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<Text {...override("text")} />
			</Box>
			<Text {...override("text1")} />
		</Box>
		{children}
	</Link>;
};

Object.assign(CardUseCase, { ...Link,
	defaultProps,
	overrides
});
export default CardUseCase;