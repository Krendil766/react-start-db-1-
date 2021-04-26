import React, { Component } from "react";
import SwapiServices from "../../services/SwapiServices";
import Spinner from "../Spinner/Spinner";
import "./ItemList.css";
export default class ItemList extends Component {
  swapi = new SwapiServices();
  state = {
    itemList: null || [],
    error: "",
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then((itemList) => {
      this.setState({
        itemList,
      });
    });
  }
  onRenderItems = (arr) => {
    return arr.map((item) => {
        const {id} = item;
        const label = this.props.children(item)
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  };
  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    } else {
      return (
        <ul className="item-list list-group">{this.onRenderItems(itemList)}</ul>
      );
    }
  }
}
