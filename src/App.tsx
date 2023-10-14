import { RouterProvider } from "react-router-dom"
import MainRouter from "./router/MainRouter"
import { store } from "./Global/Store"
import persistStore from "redux-persist/es/persistStore"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"

const App = () => {

  const persistor = persistStore(store)
  return (
    <div>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
      <RouterProvider router={MainRouter}/>
      </PersistGate>
      </Provider>
    </div>
  )
}

export default App