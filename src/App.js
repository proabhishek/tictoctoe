import React, {useState} from "react";
import Icon from "./Icon/Icon";

const App = () => {
  const tikArray  = new Array(9).fill("")
  let [isCross, setIsCross] = useState(true)
  let [winMessage, setWinMessage] = useState("")
  
  // resetGame

  function resetGame(){
      tikArray.fill("")
      setIsCross(true)
      setWinMessage("")
  }

  // find winner

  // verifyClicks


  return (
    <div>
      <Icon icon="circle"/>
    </div>
  );
}
export default App