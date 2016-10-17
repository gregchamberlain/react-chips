import React from 'react';
import Chips, { Chip } from '../lib'
import CustomChip from './CustomChip'

const data = [
  {name: 'JavaScript', image: 'http://i.stack.imgur.com/Mmww2.png'},
  {name: 'Ruby', image: 'https://www.codementor.io/assets/tutorial_icon/ruby-on-rails.png' },
  {name: 'Python', image: 'http://www.iconarchive.com/download/i73027/cornmanthe3rd/plex/Other-python.ico' },
  {name: 'Java', image: 'https://cdn2.iconfinder.com/data/icons/metro-ui-dock/128/Java.png' },
  {name: 'Swift', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNaPStsM3XwWDAgvjFfT5RFcDxuynJUJmY4lH5PSMyhphA9hA' },
  {name: 'C++', image: '' },
  {name: 'C', image: '' },
  {name: 'Objective C', image: '' },
  {name: 'Go', image: '' },
];

const CustomExample = () => (
  <Chips
    placeholder="Type a Programming Language"
  	suggestions={data}
    renderChip={(item) => (
      <CustomChip image={item.image}>{item.name}</CustomChip>
    )}
    fromSuggestionsOnly={true}
    renderSuggestion={(item, { query }) => (
      <div
        style={style}
        key={item.name}>
        <img src={item.image} width={24} height={24} style={{margin: 5}}/>{item.name}
      </div>
    )}
    suggestionsFilter={(opt, val) => (
      opt.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
    )}
    getSuggestionValue={suggestion => suggestion.name}
  	/>
);

const style = {
  display: "flex",
  alignItems: "center",
  padding: '2px 6px',
  cursor: 'default'
}

export default CustomExample;
