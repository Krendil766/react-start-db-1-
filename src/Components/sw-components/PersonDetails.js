import React from "react";
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import { WithSwapiService } from "../hoc-helpers/WithSwapiService";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapi) => {
  return {
    getData: swapi.getPerson,
    getImgUrl: swapi.getPersonImage,
  };
};

export default WithSwapiService(PersonDetails, mapMethodsToProps);
