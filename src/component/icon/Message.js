import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function Message(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-message-square"
            {...props}
        >
            <Path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </Svg>
    )
}

export default Message;
