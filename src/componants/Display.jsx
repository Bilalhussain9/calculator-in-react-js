const Display = ({datashareto}) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <input  type="text" className="w-100" placeholder="" value={datashareto} readOnly></input>
        </div>
      </div>
    </>
  );
};
export default Display;
