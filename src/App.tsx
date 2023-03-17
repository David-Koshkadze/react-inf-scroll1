import { useEffect, useState } from "react";

// const URL = "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`${URL}/user/1/10`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}

export default App;
