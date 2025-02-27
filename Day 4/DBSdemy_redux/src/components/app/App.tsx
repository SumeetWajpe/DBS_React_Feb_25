import { useSelector } from "react-redux";

function App() {
  const posts = useSelector((store: any) => store.posts);
  console.log(posts);
  return <h1> Redux</h1>;
}

export default App;
