const theme = {
  chipsContainer: {
    display: "flex",
    position: "relative",
    border: "1px solid #ccc",
    font: "13.33333px Arial",
    zIndex: 1,
    minHeight: 24,
    alignItems: "center",
    flexWrap: "wrap",
    padding: "2.5px",
    borderRadius: 5,
    ':focus': {
    	border: "1px solid #aaa",
    }
  },
  container:{
    flex: 1,
  },
  containerOpen: {

  },
  input: {
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    width: '100%',
    padding: 5,
    margin: 2.5
  },
  suggestionsContainer: {

  },
  suggestionsList: {
    position: 'absolute',
    border: '1px solid #ccc',
    left: 0,
    top: '100%',
    width: '100%',
    backgroundColor: '#fff',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  suggestion: {
    padding: '5px 15px'
  },
  suggestionFocused: {
    background: '#ddd'
  },
  sectionContainer: {

  },
  sectionTitle: {

  },
}

export default theme;

export const chipTheme = {
  chip: {
    padding: 5,
    background: "#ccc",
    margin: "2.5px",
    borderRadius: 3,
    cursor: 'default',
  },
  chipSelected: {
    background: '#888',
  },
  chipRemove: {
    fontWeight: "bold",
    cursor: "pointer",
    ':hover': {
      color: 'red',
    }
  }
}
