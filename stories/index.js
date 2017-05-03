import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Chips from './Chips';
import CustomChip from './CustomChip';

const suggestions = [
  'JavaScript',
  'Ruby',
  'Python',
  'Java',
  'Swift',
  'C++',
  'C',
  'Objective C',
  'Go'
];

const data = [
  {name: 'JavaScript', image: 'http://i.stack.imgur.com/Mmww2.png'},
  {name: 'Ruby', image: 'https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.ruby.png' },
  {name: 'Python', image: 'http://www.iconarchive.com/download/i73027/cornmanthe3rd/plex/Other-python.ico' },
  {name: 'Java', image: 'https://cdn2.iconfinder.com/data/icons/metro-ui-dock/128/Java.png' },
  {name: 'Swift', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNaPStsM3XwWDAgvjFfT5RFcDxuynJUJmY4lH5PSMyhphA9hA' },
  {name: 'C++', image: 'http://www.freeiconspng.com/uploads/c--logo-icon-0.png' },
  {name: 'C', image: 'http://www.compindiatechnologies.com/images/icon/c.gif' },
  {name: 'Objective C', image: 'http://2.bp.blogspot.com/-BuR1DpqQprU/U5CQ_0w2L7I/AAAAAAAABZY/H9wbfbO-kew/s1600/iOS_Objective_C.png' },
  {name: 'Go', image: 'https://www.codemate.com/wp-content/uploads/2015/11/go-lang-icon-180x180.png' },
];

const fetchSuggestions = (value) => {
  return new Promise((resolve, reject) => {
    if(value.length >= 1){
      setTimeout(() => {
        let filtered = suggestions
          .filter(item => item.startsWith(value));
        resolve(filtered);
      }, 1000);
    } else {
      resolve([]);
    }
  });
};

storiesOf('Chips', module)
  .add('Basic', () => (
    <Chips
      createChipKeys={[13]}
      placeholder="Type a Programming Language"
      suggestions={suggestions}
      fromSuggestionsOnly={false}
      shouldRenderSuggestions={value => true}
    />
  ))
  .add('Custom Chip', () => (
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
  ))
  .add('Async', () => (
    <Chips
      createChipKeys={[13]}
      placeholder="Type a Programming Language"
      fetchSuggestions={fetchSuggestions}
    />
  ));


const style = {
  display: "flex",
  alignItems: "center",
  padding: '2px 6px',
  cursor: 'default'
}