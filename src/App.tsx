import { RouterProvider } from "react-router-dom"
import MainRouter from "./router/MainRouter"
import { store } from "./Global/Store"
import persistStore from "redux-persist/es/persistStore"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

const App = () => {

  const client = new QueryClient()
  const persistor = persistStore(store)
  return (
    <div>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={client}>
      <RouterProvider router={MainRouter}/>
        </QueryClientProvider>
      </PersistGate>
      </Provider>
    </div>
  )
}

export default App