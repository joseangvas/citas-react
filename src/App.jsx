function App() {
  const sumar = () => {
    const a = 10;
    const b = 30;

    return a + b;
  }

  const total = sumar();

  return (
    <>
      <div className="App">
        <h1>{'Hola Mundo'.toUpperCase()}</h1>
        <h5>{`La suma es: ${total}`}</h5>
      </div>
    </>
  )
}

export default App
