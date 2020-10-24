import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import allActions from "../../../actions";
import { constants } from "../../../shared/types";
import { Modal, Button, Header } from "semantic-ui-react";
import "./category-confirm-remove.scss";

const CategoryConfirmRemove = ({ categoryItem = {}, modalOpen }) => {
  const isCancelled = useRef(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const { name = "" } = categoryItem && categoryItem;

  const handleDeleteAction = () => {
    dispatch(allActions.titleActions.updateCategoryTitleView({ name: constants.Categories }));
    dispatch(allActions.categoriesActions.removeCategory(categoryItem));
    setIsOpen(false);
    history.push("./categories");
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
      className="category-remove-container"
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
    >
      <Modal.Header>Remove category</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Confirm remove {name}? </Header>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="YES"
          labelPosition="left"
          icon="checkmark"
          onClick={handleDeleteAction}
          positive
        />
        <Button
          basic
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
