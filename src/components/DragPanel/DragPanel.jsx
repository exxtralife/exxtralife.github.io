import "./DragPanel.css";
import { useDrag } from "./useDrag";
import React, { useEffect, useRef, useState } from "react";

const DragPanel = React.forwardRef((props, ref) => {
    
    const internalRef = useRef(null);
    const panel = ref || internalRef;
    

    useEffect(() => 
    {
       

    })
    const close_button = useRef(null);
    const { position, handleMouseDown } = useDrag({
        ref: panel,
        initialPosition: props.position
    });

    const [visible, setVisible] = useState(true);
    var handleClick = () => {
        setVisible(false);
    }
    


    if(!visible) return null;
    return (
        <div
            className="dragPanel"
            ref={panel}
            style={{
                top: position.y,
                left: position.x,
            }}
        >
            <div onPointerDown={handleMouseDown} className="panelHeader">
                <svg className="closeButton" ref={close_button} onClick={handleClick} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 50 50" xmlSpace="preserve" fill="#000000">
                    <g id="SVGRepo_iconCarrier">
                        <line fill="none" stroke="#000000" strokeWidth="3px" strokeLinecap="round" strokeLinejoin="round" x1="25" y1="10.5" x2="25" y2="39.5"></line>
                        <line fill="none" stroke="#000000" strokeWidth="3px" strokeLinecap="round" strokeLinejoin="round" x1="39.5" y1="25" x2="10.5" y2="25"></line>
                    </g>
                </svg>
            </div>

            <div className="panelContent">{props.label}</div>
        </div>
    );
})

export default DragPanel;
