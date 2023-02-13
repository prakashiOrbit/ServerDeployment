<<<<<<< HEAD
import { useNavigate, useParams } from "react-router-dom";
import React from 'react'
export function withRouter( Child ) {
    return ( props ) => {
      const params = useParams();
      const navigate = useNavigate();
      return <Child { ...props } params ={ params } navigate={navigate} />;
    }
=======
import { useNavigate, useParams } from "react-router-dom";
import React from 'react'
export function withRouter( Child ) {
    return ( props ) => {
      const params = useParams();
      const navigate = useNavigate();
      return <Child { ...props } params ={ params } navigate={navigate} />;
    }
>>>>>>> b7f219a4b8c6bcdf007d6233637736215ac64634
  }