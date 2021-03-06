import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const NewTaskModal = (props) => {
  return <div>
    <Modal dialogClassName="static-modal" show={props.show} onHide={props.handleClose}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            style={{width: "100%"}}
            className={props.validate && !props.taskDescription ? "common-input-error" : "common-input"}
            type="text" value={props.taskDescription}
            placeholder="Açıklama"
            name='taskDescription'
            onChange={(e) => { props.handleChange("taskDescription", e.target.value) }} />
          {
            props.validate && !props.taskDescription &&
            <div className="help-block">Açıklama girmelisiniz !</div>
          }
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => props.addNewTask()}>Ekle</Button>
          <Button onClick={() => props.handleClose()}>İptal</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  </div>;
}
NewTaskModal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  addNewTask: PropTypes.func,
  handleClose: PropTypes.func
}
export default NewTaskModal;
