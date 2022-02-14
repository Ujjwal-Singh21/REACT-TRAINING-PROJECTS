import Button from './Button'

function App (props) {
  return (
    <div>
      <h1> WELCOME , This is App Message with name {props.appName} </h1>
      <Button name='button1'> Checking Children Concept </Button>
      <Button name='button2' />
      <Button name='button3' />
      <Button name='button4' />
    </div>
  )
}

export default App
