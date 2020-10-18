import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "/",
	"background": "url(https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5b8bdfda37ffb3b160a259fb_Logo-p-500.png) round",
	"padding": "0 0 0 0",
	"width": "60px",
	"height": "60px",
	"sm-margin": "0 0 0 10px"
};
const overrides = {};

const LogoHeader = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(LogoHeader, { ...Link,
	defaultProps,
	overrides
});
export default LogoHeader;