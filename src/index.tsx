import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import reportWebVitals from "./reportWebVitals"
import { createStandaloneToast, ColorModeScript } from "@chakra-ui/react"
import { theme } from "./theme"

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" })
    }
    window.location.reload()
    const toast = createStandaloneToast()
    toast({
      title: "App updated to latest version",
      description: (
        <a href="https://github.com/sheck/slackmngr/blob/main/CHANGELOG.md#changelog">
          View Changelog
        </a>
      ),
      status: "success",
      duration: 7000,
      isClosable: true,
    })
  },
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
