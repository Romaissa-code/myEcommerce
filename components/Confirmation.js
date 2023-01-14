
import { TiTickOutline } from "react-icons/ti";
const Confirmation = () => {
    return (
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body text-secondary ">
                Added succesfly to the card
                <button
                  style={{ background: "none", border: "none" }}
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  <TiTickOutline style={{ color: "red" ,fontSize:"20" }} />
                </button>
              </div>
   
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Confirmation;