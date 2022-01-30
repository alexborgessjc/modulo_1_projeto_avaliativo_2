import React from 'react';
import { List } from './styles';

function Select({options, description, ...otherProps }) {
  
  return (      
      <List {...otherProps} defaultValue={'DEFAULT'}>
        <option disabled value='DEFAULT' >{description}</option>
        {options.map(option => <option
          key={option.id}
          value={option.id}>
          {option.apelido}
        </option>
        )}
      </List>   
  );
}

export default React.memo(Select);