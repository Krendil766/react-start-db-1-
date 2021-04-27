
import React, { Component, Children, cloneElement } from "react";
import "././ItemDetails.css";
import SwapiServices from "../../services/SwapiServices";
import Spinner from "../Spinner/Spinner";

const Record = ({item,label, field }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  swapi = new SwapiServices();
  state = {
    item: null || {},
    img: null || "",
  };
  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }
  updatePerson = () => {
    const { personId, getData, getImgUrl } = this.props;
    
    if (!personId) {
        console.log(2);
        
      return;
    }
    getData(personId).then((item) => {
      this.setState({ item, img: getImgUrl(item) });

    });
  };
  render() {
      const {item,img}=this.state;
    return (
      <div className="person-details card">
        <img className="person-image" src={img} />
        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {Children.map(this.props.children, (child) => {
              return cloneElement(child, {item});
            })}
          </ul>
        </div>
      </div>
    );
  }
}
