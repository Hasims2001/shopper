import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function Point(props) {
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
            className="prefix__feather prefix__feather-gift"
            {...props}
        >
            <Path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
        </Svg>
    )
}

export default Point;
