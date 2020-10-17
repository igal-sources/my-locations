import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import allActions from "../../../actions";
import { constants } from "../../../shared/types";
import { Modal, Button, Header } from "semantic-ui-react";
import "./location-confirm-remove.scss";

const LocationConfirmRemove = ({ locationItem = {}, modalOpen }) => {
  const isCancelled = useRef(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const { name = "" } = locationItem && locationItem;

  const handleDeleteAction = () => {
    dispatch(allActions.titleActions.updateLocationTitleView({ name: constants.Locations }));
    dispatch(allActions.locationsActions.removeLocation(locationItem));
    setIsOpen(false);
    history.push("./");
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
      <Modal.Header>Remove location</Modal.Header>
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

export default LocationConfirmRemove;
