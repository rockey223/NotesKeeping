import "./styles.css";
import Header from "./components/Header";
import Content from "./components/Content";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Content />
      </div>
    </>
  );
}
