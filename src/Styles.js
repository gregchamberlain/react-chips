export let defaultStyles = {
	wrapper: {
    display: "flex",
    position: "relative",
    border: "1px solid #ccc",
    font: "13.33333px Arial",
    minHeight: 24,
    alignItems: "center",
    flexWrap: "wrap",
    padding: "2.5px",
    borderRadius: 5,
    ':focus': {
    	border: "1px solid green",
    },
  },
  chip: {
  	default: {
  		padding: 5,
	    background: "#ccc",
	    margin: "2.5px",
	    borderRadius: 3,
	    cursor: 'default',
  	},
  	selected: {
  		background: '#888',
  	}
  },
	listItem: {
		default: {
	    padding: '2px 6px',
	    cursor: 'default'
	  },

	  highlighted: {
	    color: 'white',
	    background: 'hsl(200, 50%, 50%)',
	  },
	}
}
