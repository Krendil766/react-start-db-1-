import React, {Component} from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import Spinner from '../Spinner/Spinner';


export const WithData = (View) => {
    return class extends Component {
      state = {
        data: null || [],
        error: "",
      };
      componentDidMount() {
        this.props.getData().then((data) => {
          this.setState({
            data,
          });
        });
      }
      componentDidCatch(){
          this.setState({error:true})
      }
      render() {
      const { data, error } = this.state;
        if (!data) {
          return <Spinner />;
        }
        if(error){
            return <ErrorIndicator/>
        }
        return <View {...this.props} data={data} />;
      }
    };
  };