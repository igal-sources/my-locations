import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import allActions from "../../../actions";
import { Table } from "semantic-ui-react";
import LocationItem from "../location-item/LocationItem";
import { fetchCategories } from "../../../apis/categoriesService";
import * as types from "../../../shared/types";
import "./location-list.scss";

const LocationList = () => {
  const dispatch = useDispatch();
  const isCancelled = useRef(false);
  const [Location, setLocations] = useState([]);

  const updateHeader = (actions) => {
    dispatch(allActions.titleActions.updateLocationTitleView({name: types.constants.Locations}));
    dispatch(allActions.toolbarActions.updateActionsStatus(actions));    
    fetchCategories((locations) => {
      console.log('LocationList: ', locations);
      setLocations(locations);
    });
  };

  useEffect(() => {
    let mapping = types.actionsMapping;
    Object.assign(mapping, {
      CREATE: false,
      READ: true,
      UPDATE: true,
      DELETE: true,
    });

    !isCancelled.current && updateHeader(mapping);
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Location]);

  return (
    <div className="location-list-container">
      <div className="table-scroll">
        <Table singleLine textAlign="left" className="location-list-table">
          <Table.Header className="location-list-table-header">
            <Table.Row active className="location-list-header-rows">
              <Table.HeaderCell textAlign="left">Locations</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Location &&
              Location.map((item, index) => (
                <Table.Row key={index} className="location-list-table-row">
                  <Table.Cell>
                    <LocationItem key={index} locationItem={item} />
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default LocationList;
