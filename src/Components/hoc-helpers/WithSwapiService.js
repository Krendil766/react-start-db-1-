import React from "react";
import { SwapiServicesConsumer } from "../SwapiServicesContext/SwapiServicesContext";

export const WithSwapiService = (Component, fn) => {
  return (props) => {
    return (
      <SwapiServicesConsumer>
        {(swapi) => {
          const serviceProps = fn(swapi);
          console.log(serviceProps);
          
          return <Component {...props} {...serviceProps} />;
        }}
      </SwapiServicesConsumer>
    );
  };
};
