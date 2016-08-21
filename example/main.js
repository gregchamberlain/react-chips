import React from 'react';
import { render } from 'react-dom';
import Chips, { Styles, Chip } from '../src'

let data = [
  {name: "Ruby", yr: 1994},
  {name: "Java", yr: 1998},
  {name: "Javascript", yr: 2001},
  {name: "Go", yr: 2006},
  {name: "C++", yr: 1995},
  {name: "C", yr: 1987},
  {name: "Swift", yr: 2010},
]

render(
  <Chips
  	autoCompleteData={data}
    renderChip={(item) => (
      <Chip value={item}/>
    )}
    getChipValue={(item) => `${item.name} - ${item.yr}`}
    autoCompleteOnly={true}
    renderListItem={(item, isHighlighted) => (
      <div
        style={isHighlighted ? {
          ...Styles.listItem.default,
          ...Styles.listItem.highlighted
        } : Styles.listItem.default}
        key={item.abbr}
      ><strong>{item.name}</strong> - {item.yr}</div>
    )}
    listFilter={(opt, val) => (
      opt.name.toLowerCase().indexOf(val.toLowerCase()) !== -1 ||
      opt.yr.toString().indexOf(val.toLowerCase()) !== -1
    )}
  	/>,
document.getElementById('root'))
