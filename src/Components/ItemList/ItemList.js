import React, { Component } from 'react'
import SwapiServices from '../../services/SwapiServices';
import Spinner from '../Spinner/Spinner';
import './ItemList.css'
export default class ItemList extends Component {
    swapi = new SwapiServices();
    state = {
        people: null || [],
        error: '',
    }

    componentDidMount() {
        this.swapi.getAllPeople().then((people) => {
            this.setState({
                people
            })
        })
    }
    onRenderItems = (arr) => {
        return arr.map(({ id, name }) => {
            return (
                <li key={id} className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }
    render() {
        const { people } = this.state;
        if (!people) {
            return <Spinner />
        } else {
            return (
                <ul className="item-list list-group">
                    {
                        this.onRenderItems(people)
                    }
                </ul>
            )
        }
    }
}

