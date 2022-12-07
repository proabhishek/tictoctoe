import {FcDoughnutChart, FcMissedCall} from "react-icons/fc"
import {FaExpandArrowsAlt} from "react-icons/fa";

const Icon = (props) => {
    switch(props.icon){
         case "circle": 
            return <FcDoughnutChart />
         case "cross":
            return <FcMissedCall />
        default:
            return <FaExpandArrowsAlt />

    }
}

export default Icon;