import React from 'react';
import { IContentPrimaryFrameProps} from "./interface/IContentPrimaryFrame";

const ContentPrimaryFrame = (props: React.PropsWithChildren<IContentPrimaryFrameProps>) => {
	const { className, children } = props;
	return (
		<div className={`ui__content-primary-frame ${className}`}>
			{children}
		</div>
	);
};

export default ContentPrimaryFrame;
