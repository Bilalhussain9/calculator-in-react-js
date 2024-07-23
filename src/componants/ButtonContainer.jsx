const ButtonContainer=({buttonclik})=>{
    const buttonName=['1','2','3','4','6','7','8','9','0','+','*','/','-','=','C']
    return <>
    {buttonName.map((buttonName)=> 
  <button type="button" className="btn btn-primary m-1 " onClick={()=>buttonclik(buttonName)}>{buttonName}</button>

    )}

    </>
}
export default ButtonContainer;