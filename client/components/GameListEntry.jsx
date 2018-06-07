import React from 'react';

const GameListEntry = props => (
  <div 
    className={props.game.title === props.selectedGame.title ? "current-game" : "game-entry"}
    onMouseEnter={(game => props.handleGameMouseEntry(game)).bind(null, props.game)}
    onMouseLeave={props.handleGameMouseExit}
  >
    <img 
      className="game-icon" 
      src={`https://s3-us-west-1.amazonaws.com/steam-game-logos/${props.game.logoFileName}.jpg`}
      alt="failed to load"
    />
    <div className="game-info-text">
      <div>{props.game.title}</div>
      <div>{props.game.description}</div>
      <div>{props.game.price}</div>
      <div>{props.game.categories}</div>
    </div>
  </div>
);

export default GameListEntry;
