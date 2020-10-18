import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
	<iframe src="https://fast.wistia.net/embed/iframe/f65e2xyi67?videoFoam=true" title="hi5 Video" allowtransparency="true" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" oallowfullscreen="oallowfullscreen" msallowfullscreen="msallowfullscreen" 
	style="width: 100%; height: 100%;" frameborder="0">
	</iframe>
`;

const Hi5Video = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(Hi5Video)({
	name: "Hi5VideoFrame",
	normalize: true,
	mixins: true
});