import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import allActions from "../../../actions";
import { Table } from "semantic-ui-react";
import LocationItem from "../location-item/LocationItem";
import { fetchLocations } from "../../../apis/locationsService";
import { getCategoryById } from "../../../apis/categoriesService";
import * as types from "../../../shared/types";
import "./location-list.scss";

const LocationList = () => {
  const dispatch = useDispatch();
  const isCancelled = useRef(false);
  const [Location, setLocations] = useState([]);

  const categoryName = (categoryId) => {
    var name;
    getCategoryById((categoryId), category => {
      name = category.name;
    });
    return name;
  };

  const updateHeader = (actions) => {
    dispatch(allActions.titleActions.updateLocationTitleView({ name: types.constants.Locations }));
    dispatch(allActions.toolbarActions.updateActionsStatus(actions));
    fetchLocations((locations) => {
      console.log("LocationList: ", locations);
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
              <Table.HeaderCell width={3} textAlign="left">
                Category
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="left">Name</Table.HeaderCell>
              <Table.HeaderCell textAlign="left">Address</Table.HeaderCell>
              <Table.HeaderCell textAlign="left">Show on map</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Location &&
              Location.map(({ categoryId, name, address, coordinates }, index) => (
                <Table.Row key={index} className="location-list-table-row">
                  <Table.Cell>{categoryName(categoryId)}</Table.Cell>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{address}</Table.Cell>
                  <Table.Cell>{coordinates.latitude}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default LocationList;
