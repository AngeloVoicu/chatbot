import FooterLayout from "./components/layout/FooterLayout";
import HeaderLayout from "./components/layout/HeaderLayout";
import Sidebar from "./components/common/Sidebar";
import Route from "./routes/Route";

import Home from "./components/features/Home";
import ChatbotPage from "./components/features/ChatbotPage";

function App() {
  return (
    <div className="main">
      <div className="header border border-zinc-100 bg-blue-200 shadow-lg shadow-gray-500/50">
        <HeaderLayout />
      </div>
      <div className="contain grid grid-cols-9 gap-4 mt-4 mx-2">
        <Sidebar />
        <div className="col-span-8 border rounded shadow-lg">
          <Route path="/home">
            <Home className="my-5 mx-6" />
          </Route>
          <Route path="/chatbot">
            <ChatbotPage className="my-5 mx-6" />
          </Route>
        </div>
      </div>
      <div className="footer bg-blue-100">
        <FooterLayout colorText="#000000" />
      </div>
    </div>
  );
}

export default App;
