import CardContainer from "./Components/Card/CardContainer";
import Header from "./Components/Header";

const App = () => {
  return (
    <div id="page">
      <Header gameName={"Screenshots"} />
      <main id="main-content" className="main-content">
        <CardContainer />
      </main>
    </div>
  );
};

export default App;
