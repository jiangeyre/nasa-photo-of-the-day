import React, { Component } from "react";
import DatePicker from 'react-date-picker';
import Moment from 'react-moment';
import styled from 'styled-components';

const DatePickerContainer = styled.div`
  background-color: ghostwhite;
`;

class MyApp extends Component {
     
    
    state = {
      date: new Date(),
    }
   
    onChange = date => {
        this.setState({ date })
    }
    
    
    render() {
      return (
        <DatePickerContainer>
          <DatePicker
            onChange={this.onChange}
            value={this.state.date}
            maxDate={new Date()}
          />
          <p  className="currentDate">
           <Moment format="YYYY-MM-DD">
              {this.state.date}
            </Moment>
          </p>
            
        </DatePickerContainer>
        
      );
    }
  }
export default MyApp;