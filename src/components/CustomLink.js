import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Link } from "@quarkly/widgets";
import { MdKeyboardArrowRight } from "react-icons/md";
const defaultProps = {
	"href": "#",
	"display": "inline-block",
	"background": "rgba(53,5,255,.95)",
	"padding": "16px 56px 17px 56px",
	"font": "20px/32px --fontFamily-googleUbuntu",
	"color": "#fff",
	"text-decoration-line": "initial",
	"border-radius": "4px",
	"box-shadow": "0 2px 3px 0 rgba(0,0,0,.2)",
	"transition": ",transform 0.3s --transitionTimingFunction-easeInOut 0s",
	"hover-transform": "translate(0px, -2px)",
	"hover-box-shadow": "0 2px 3px 0 rgba(0,0,0,.3)"
};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"icon": MdKeyboardArrowRight,
			"category": "md",
			"color": "#FFF",
			"display": "inline-block",
			"position": "relative",
			"top": "7px",
			"left": "-3px"
		}
	}
};

const CustomLink = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		Start for free now{" "}
		<Icon {...override("icon")} />
		{children}
	</Link>;
};

Object.assign(CustomLink, { ...Link,
	defaultProps,
	overrides
});
export default CustomLink;