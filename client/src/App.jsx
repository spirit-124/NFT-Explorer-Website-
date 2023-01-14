import {
  Navbar,
  Footer,
  Welcome,
  Services,
  Transaction,
  Loader,
} from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        {/* <h1>Hello World!!</h1>1 */}
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>
  );
};

export default App;
