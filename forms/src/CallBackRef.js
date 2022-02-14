import React, { Component } from 'react'

export default class CallBackRef extends Component {

  constructor (props) {
    super(props)

    this.textInput = null

    this.setTextInputRef = (element) => {
      this.textInput = element
      console.log(this.textInput)
    }

    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      if (this.textInput)
       this.textInput.focus()
    }
  }

  //   componentDidMount() {
  //     // autofocus the input on mount
  //     this.focusTextInput();
  //   }

  render () {

    // Use the `ref` callback to store a reference to the text input DOM element
    // in an instance field (for example, this.textInput).
    return (
      <div>

        <input type='text' ref={this.setTextInputRef} />

        <button type='button' onClick={this.focusTextInput}>
          Focus 
        </button>

        {/* <input type="button" value="Focus the text input" onClick={this.focusTextInput} /> */}
      </div>
    )
  }
}
