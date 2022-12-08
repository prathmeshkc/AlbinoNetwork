import "./styles.css";
import { Box, styled, Typography, Link } from '@mui/material';
import React, { Component } from "react";

import { H, Section } from "react-headings";


const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

export default class Card extends Component {

  render() {
 
    return [
      
      <div className="card">
        <img src={this.props.img} alt="" />
        <div className="card-body">
          <h2>{this.props.title}</h2>
          <p>
            People of Albinism Community
          </p>
          <h5>{this.props.author}</h5>
        </div>
      </div>
     
     
      
    ];
  }
}
