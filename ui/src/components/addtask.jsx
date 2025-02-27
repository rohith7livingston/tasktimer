import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const TaskModal = () => {
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const updateHourDisplay = (operation) => {
    if (operation === 'increment') {
      setHr((prevHr) => (prevHr + 1) % 24);
    } else {
      setHr((prevHr) => (prevHr - 1 + 24) % 24);
    }
  };

  const updateMinuteDisplay = (operation) => {
    if (operation === 'increment') {
      setMin((prevMin) => (prevMin + 1) % 60);
    } else {
      setMin((prevMin) => (prevMin - 1 + 60) % 60);
    }
  };

  const updateSecondDisplay = (operation) => {
    if (operation === 'increment') {
      setSec((prevSec) => (prevSec + 1) % 60);
    } else {
      setSec((prevSec) => (prevSec - 1 + 60) % 60);
    }
  };

  return (
    <div className="card_section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="crd">
              <button
                type="button"
                className="custom-button"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Add task
              </button>

              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog mt-5">
                  <div className="modal-content">
                    <div className="modal-header">
                      <input className="modal-title thanking-customers-section-modal-title" placeholder="Enter task name" />
                      <input className="modal-title thanking-customers-section-modal-title" placeholder="Enter task name" />
                      <span aria-hidden="true">&times;</span>
                    </div>
                    <div className="modal-body" id="bdy">
                      <div>
                        <div className="d-flex flex-row justify-content-center jungle">
                          <div>
                            <i className="fa-solid fa-caret-up icon" onClick={() => updateHourDisplay('increment')}></i>
                          </div>
                          <div>
                            <i className="fa-solid fa-caret-up icon" onClick={() => updateMinuteDisplay('increment')}></i>
                          </div>
                          <div>
                            <i className="fa-solid fa-caret-up icon" onClick={() => updateSecondDisplay('increment')}></i>
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                          <div>
                            <h1 id="hr"> {hr < 10 ? '0' + hr : hr} :</h1>
                          </div>
                          <div>
                            <h1 id="min"> {min < 10 ? '0' + min : min} <span>:</span></h1>
                          </div>
                          <div>
                            <h1 id="sec"> {sec < 10 ? '0' + sec : sec}</h1>
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center jungle">
                          <div className="gun">
                            <i className="fa-solid fa-caret-down icon" onClick={() => updateHourDisplay('decrement')}></i>
                          </div>
                          <div>
                            <i className="fa-solid fa-caret-down icon" onClick={() => updateMinuteDisplay('decrement')}></i>
                          </div>
                          <div>
                            <i className="fa-solid fa-caret-down icon" onClick={() => updateSecondDisplay('decrement')}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;