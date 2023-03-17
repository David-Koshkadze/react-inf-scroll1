import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-2xl font-sans bg-green-300 text-center">Hello World</h1>
    </div>
  )
}

export default App
