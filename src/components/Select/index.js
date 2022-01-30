import React from 'react';
import { List } from './styles';

function Select({options, description, ...otherProps }) {
  
  return (
       
      <List {...otherProps} selected="">
        <option disabled value="">{description}</option>
        {options.map(option => <option
          key={option.id}
          value={option.value}>
          {option.apelido}
        </option>
        )}
      </List>
    
  );
}

export default React.memo(Select);