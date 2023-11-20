import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditBank(data) {

    const handleClose = () => data.setShow(false);
    const handleShow = () => data.setShow(true);

    const handleUpdate=()=>{

        data.updateBankHandler();
        data.setShow(false);

    }
    return (
        <>
            

            <Modal
                show={data.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    <Modal.Title>Edit Bank</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className="p-2">
                        <div className="mb-3">
                            <label className="form-label">Bank Name</label>
                            <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={
                                    (e) => { data.setBankName(e.target.value) }
                                }
                                value={data.bankName}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Abbrevation</label>
                            <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={
                                    (e) =>
                                        data.setAbbrevation(e.target.value)
                                }

                                value={data.abbrevation}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Branch</label>
                            <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={(e) =>

                                    data.setBranch(e.target.value)
                                }

                                value={data.branch}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Ifsc</label>
                            <input type="text" disabled className="form-control rounded-pill text-primary fw-bold"
                               

                                value={data.ifsc}
                            />
                        </div>

                    </form>

                </Modal.Body>
                <Modal.Footer>
                   
                    <button className='btn btn-outline-secondary' onClick={handleClose}>Close</button>
                    <button className='btn btn-outline-primary' onClick={handleUpdate}>Update</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditBank;