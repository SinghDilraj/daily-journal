import React from 'react';
import { FaPlus } from "react-icons/fa";

import '../../Assets/Css/Journal.css'

class BlankJournal extends React.Component {
    render() {
      return (
        <div className='Journal BlankJournal'>
            <p>Create New Journal</p>
            <p><FaPlus /></p>
        </div>
      )
    }
  }

export default BlankJournal;