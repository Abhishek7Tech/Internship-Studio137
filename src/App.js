
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import { SliderProvider } from "./contexts/SliderContext";
function App() {
  return <div className="App">
    <Header></Header>
    <SliderProvider>
    <Card></Card>
    </SliderProvider>
  </div>;
}

export default App;
