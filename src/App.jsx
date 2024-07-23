// import "./App.css";
import Display from "./componants/Display";
import ButtonContainer from "./componants/ButtonContainer";
import { useState } from "react";
function App() {
  const [sharedata, setdata] = useState("");
  const whichbuttonclik = (buttonText) => {
    if (buttonText === "C") {
      setdata("");
    } else if (buttonText === "=") {
      const reuslt = eval(sharedata);
      setdata(reuslt);
    } else {
      let newbuttontext = sharedata + buttonText;
      setdata(newbuttontext);
    }
  };
  return (
    <div className="row">
      <div className="col-6">
        <div className="card">
          <Display datashareto={sharedata} />
          <div className="card-body">
            <ButtonContainer buttonclik={whichbuttonclik}></ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
