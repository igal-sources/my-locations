import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useViewTitle, useMappingActions } from "../../../shared/hooks/use-selectors";
import * as types from "../../../shared/types";
import "./header.scss";

const Header = () => {
  const isCancelled = useRef(false);
  const actionsStatus = useMappingActions();
  const titleText = useViewTitle();
  const [headerTitle, setHeaderTitle] = useState(titleText);

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
    setHeaderTitle(titleText);
    console.log("HEADER - useEffect: ", titleText);
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleText]);

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
      <Link to="/" className={readActionLinkClassName}>
        READ
      </Link>
      <Link
        to={{ pathname: "/update-category", state: { titleText } }}
        className={updateActionLinkClassName}
      >
        UPDATE
      </Link>
      <Link to="/" onClick={() => setHeaderTitle("delete")} className={deleteActionLinkClassName}>
        DELETE
      </Link>
    </div>
  );
};

export default Header;
