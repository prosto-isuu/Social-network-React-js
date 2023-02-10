import React from 'react';

const Status = (props) => {
    return (
        <div>
            <div>
                <span>
                  {props.datum.body}
            </span>
            </div>
            <div>
                <input placeholder={props.datum.name}/>
            </div>

        </div>
    );
};

export default Status;