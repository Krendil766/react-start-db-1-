import React from "react";
import { SwapiServicesConsumer } from "../SwapiServicesContext/SwapiServicesContext";

export const WithSwapiService = (Component, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServicesConsumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodsToProps(swapiService);

            return (
              <Component {...props} {...serviceProps} />
            );
          }
        }
      </SwapiServicesConsumer>
    );
  }
};
