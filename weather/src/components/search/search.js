import React ,{useRef, useState} from "react";

const Search = (props) => {
  const searchElm = useRef(null);
  
  return (
    <>
      <div class="main" style={{ marginTop: "70px" }}>
        <div class="form-group has-search m-5">
          <span class="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            class="form-control"
            placeholder="please enter your city"
            ref={searchElm}
            required
          />
          <button className="btn btn-m btn-primary m-5" onClick={()=>props.goSearch(searchElm.current.value)}>
            Click Here To go
          </button>
        </div>
      </div>
    </>
  );
};
export default Search;
