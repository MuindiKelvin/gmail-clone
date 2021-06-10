import React from 'react';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EmailIcon from '@material-ui/icons/Email';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Mail.css';
import { useHistory } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Mail() {
  const history = useHistory();
  return (
    <div className='mail'>
        <div className="mail__tools">
          <div className="mail__toolsLeft">
            <IconButton onClick={() => history.push("/")} >
              <ArrowBackIcon />
            </IconButton>

            <IconButton>
              <MoveToInboxIcon />
            </IconButton>

            <IconButton>
              <ErrorIcon />
            </IconButton>

            <IconButton>
              <DeleteIcon />
            </IconButton>

            <IconButton>
              <EmailIcon />
            </IconButton>
          
            <IconButton>
              <CheckCircleIcon />
            </IconButton>
            
            <IconButton>
              <LabelImportantIcon />
            </IconButton>

            <IconButton>
              <MoreVertIcon />
            </IconButton>

          </div>

          <div className="mail__toolsRight">
             <IconButton>
               <ExpandMoreIcon />
             </IconButton>
             <IconButton>
               <PrintIcon />
             </IconButton>
             <IconButton>
               <ExitToAppIcon />
             </IconButton>
          </div>
          
        </div>
      <div className="mail__body">
          <div className="mail__bodyHeader">
            <h2>subject</h2>
              <LabelImportantIcon className="mail__important" />
              <p>Title</p>
              <p className="mail__time">10pm</p>
          </div>
              <div className="mail__message">
                <p>This is a message</p>
              </div>
      </div>
    </div>
  );
}

export default Mail;
