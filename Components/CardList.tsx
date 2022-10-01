import * as React from 'react';

class CardList extends React.Component{

  render(){
    const {filteredMonsters} = this.props;
    return(
    <div>
    {filteredMonsters.map((e) => {
      return <h4 key={e.id}> {e.name} </h4>;
    })}
  </div>
  )}
}

export default CardList;