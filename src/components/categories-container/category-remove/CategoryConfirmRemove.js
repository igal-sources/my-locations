import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import allActions from "../../../actions";
import "./category-confirm-remove.scss";
import { Modal, Button, Header } from "semantic-ui-react";

const CategoryConfirmRemove = ({ categoryName, modalOpen }) => {
  console.log('categoryName, modalOpen: ', categoryName, modalOpen);
  const isCancelled = useRef(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteAction = () => {
    console.log('REMOVE categoryName: ', categoryName);
    dispatch(allActions.titleActions.updateTitleView("Categories List"));
    dispatch(allActions.categoriesActions.removeCategory(categoryName));
    //history.push("./");
    setIsOpen(false);
  };
  useEffect(() => {
    setIsOpen(modalOpen);
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen]);
  return (
    <Modal
      className="bike-details-card-container"
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
    >
      <Modal.Header>Remove category</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Confirm remove {categoryName}? </Header>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="YES"
          labelPosition="left"
          icon="checkmark"
          onClick={() => handleDeleteAction()}
          positive
        />
        <Button basic
          content="NO"
          labelPosition="right"
          icon="remove"
          onClick={() => setIsOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default CategoryConfirmRemove;