import React from 'react';

import { Card } from '../card/card_component';

import './card-list_styles.css';

//export out a functional component called CardList
//only has a render() and doesn't know state

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
