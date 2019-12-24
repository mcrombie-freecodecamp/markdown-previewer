import React from 'react';
import logo from './logo.svg';
import './App.css';

const defaultMarkDown = `
# First Heading
## Second Heading

### Link
[Project Specs Link](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer "tooltip")

### Inline Code
Here is some inline code: \`npm install node.js\`

### Code Block
\`\`\`
const example = "Using markdown";
alert(example);
\`\`\`

### List
1. First Item
1. Second Item

### Block Quote
>FreeCode Camp is great!

### Image
![Image of a dog](https://upload.wikimedia.org/wikipedia/commons/b/bc/GermanShorthPtr_wb.jpg 'A pup')

### Bolded Text
**I made this text bold**
`

//handling carriage returns
marked.setOptions({
  breaks:true
})

class DisplayText extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: defaultMarkDown
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      input:event.target.value
    })
  }
  render(){
    return(
      <div class="row">
        <div class="col-xs-6">
          <div class="text-center well well-1">
            <h2>Editor</h2>
            <textarea id="editor" value={this.state.input} onChange={this.handleChange} style={{width:500,height:500}}></textarea>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="text-center well well-2">
            <h2>Previewer</h2>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.input)}} />
          </div>
        </div>
      </div>
    )
  }
}

// ReactDOM.render(<DisplayText/>,document.getElementById("app"))
export default DisplayText;
