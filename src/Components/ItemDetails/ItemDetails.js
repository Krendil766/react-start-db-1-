import React, { Component } from 'react';
import '././ItemDetails.css';
import SwapiServices from '../../services/SwapiServices';
import Spinner from '../Spinner/Spinner';

export default class ItemDetails extends Component {
    swapi = new SwapiServices();
    state = {
        person: null || {},
        img:null||''
    }
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
            return;
        }
        getData(personId)
            .then(person => {
                this.setState({ person, img:getImgUrl(person) })
            });
    }
    render() {
        const { id, name, gender, birthYear, eyeColor } = this.state.person;
        return (
            <div className="person-details card">
                <img className="person-image"
                    src={this.state.img} />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
