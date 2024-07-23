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
    <div className="row justify-content-center mt-5">
      <div className="col-2">
        <div className="card text-center">
          <div className="card-body row ">
            <div className="col-12">
          <Display datashareto={sharedata} />

            <ButtonContainer buttonclik={whichbuttonclik}></ButtonContainer>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
