import React from 'react';
import { render } from 'react-dom';
// import Chips, { Styles, Chip } from '../dist/bundle'
import Chips, { Styles, Chip } from '../src'
import CustomChip from './CustomChip'

// let data = [
//   {name: "Greg Chamberlain", image: "https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/13600191_10208541837936750_8149579611814361860_n.jpg?oh=aa4de98353a4743f40159704df799178&oe=583F65E3"},
//   {name: "Spencer Gander", image: "https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/13882281_1153219218034621_594044806989828947_n.jpg?oh=b10465238a1618b655f55ec3ba67a50a&oe=585E7D9D"},
//   {name: "Walker Nelson", image: "https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/10534614_10204477181792812_5032954756891491515_n.jpg?oh=5c36d9b6e6b7f14fab011441a7234737&oe=584E0D61"},
//   {name: "Cody Heller", image: "https://scontent-mia1-2.xx.fbcdn.net/v/t1.0-9/12112379_10208151881018458_6178246044306481495_n.jpg?oh=0db0684e9e09f5d5b778744bcd620e31&oe=5811C776"},
// ]

render(
  <Chips autoCompleteData={["Hello", "Goodbye", "Auvua", "Happy", "Hola", "Holla"]} />
,document.getElementById("root"))
// render(
//   <Chips
//     style={{
//       ...Styles.wrapper,
//       border: "none",
//       borderRadius: 2,
//       padding: 5,
//       minHeight: 42,
//       boxShadow: "2px 2px 20px rgba(0,0,0,0.3)",
//       ':focus': {
//         border: "none",
//       }
//     }}
//   	autoCompleteData={data}
//     renderChip={(item) => (
//       <CustomChip image={item.image}>{item.name}</CustomChip>
//     )}
//     autoCompleteOnly={true}
//     renderListItem={(item, isHighlighted) => (
//       <div
//         style={isHighlighted ? {
//           ...Styles.listItem.default,
//           ...Styles.listItem.highlighted
//         } : Styles.listItem.default}
//         key={item.name}
//       ><img src={item.image} width={24} height={24} style={{margin: 5}}/>{item.name}</div>
//     )}
//     listFilter={(opt, val) => (
//       opt.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
//     )}
//   	/>,
// document.getElementById('root'))
