import React from 'react';
import { IHeaderButtonProps} from "./interface/IHeaderButtonProps";

const HeaderButton = (props: IHeaderButtonProps) => {
    const { content, onClick, className } = props;

    return (
        <button
            type="button"
            className={`ui__header-button ${className === undefined ? '' : className}`}
            onClick={onClick}
        >
            { content }
        </button>
    );
};

export default HeaderButton;