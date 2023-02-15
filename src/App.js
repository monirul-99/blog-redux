import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Store from "./Redux/Store";
import { Router } from "./Routes/Routes";

function App() {
  return (
    <div className="">
      <Provider store={Store}>
        <RouterProvider router={Router} />
      </Provider>
    </div>
  );
}

export default App;
