import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useViewTitle, useMappingActions } from "../../../shared/hooks/use-selectors";
import CategoryConfirmRemove from "../../categories-container/category-remove/CategoryConfirmRemove";
import * as types from "../../../shared/types";
import "./header.scss";

const Header = () => {
  const isCancelled = useRef(false);
  const actionsStatus = useMappingActions();
  const categoryItem = useViewTitle();
  console.log("categoryItem: ", categoryItem);
  const [headerTitle, setHeaderTitle] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const handleDeleteAction = () => {
    console.log("handleDeleteAction: ");
    setModalOpen(true);
  };
  const createActionLinkClassName = classNames({
    "header-link": true,
    "disabled-link": actionsStatus && actionsStatus[types.toolbarAction.CREATE],
  });
  const readActionLinkClassName = classNames({
    "header-link": true,
    "disabled-link": actionsStatus && actionsStatus[types.toolbarAction.READ],
  });
  const updateActionLinkClassName = classNames({
    "header-link": true,
    "disabled-link": actionsStatus && actionsStatus[types.toolbarAction.UPDATE],
  });
  const deleteActionLinkClassName = classNames({
    "header-link": true,
    "disabled-link": actionsStatus && actionsStatus[types.toolbarAction.DELETE],
  });
  useEffect(() => {
    !isCancelled.current && setModalOpen(false);
    setHeaderTitle(categoryItem.name);
    console.log("HEADER - useEffect: ", headerTitle);
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryItem.name]);

  return (
    <div className="header-container">
      <div className="header-title">
        <h2>{headerTitle}</h2>
      </div>
      <Link
        to="/add-category"
        onClick={() => setHeaderTitle("New Category")}
        className={createActionLinkClassName}
      >
        CREATE
      </Link>
      <Link
        to={{ pathname: "/view-category", state: { headerTitle, readOnly: true } }}
        className={readActionLinkClassName}
      >
        VIEW
      </Link>
      <Link
        to={{ pathname: "/update-category", state: { headerTitle, readOnly: false } }}
        className={updateActionLinkClassName}
      >
        UPDATE
      </Link>
      <Link to="/" onClick={handleDeleteAction} className={deleteActionLinkClassName}>
        DELETE
      </Link>
      <CategoryConfirmRemove categoryName={headerTitle} modalOpen={modalOpen} />
    </div>
  );
};

export default Header;
