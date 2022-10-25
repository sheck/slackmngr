import { Button, useToast } from "@chakra-ui/react"
import { useEffect } from "react"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"

export function ServiceWorkerWrapper() {
  const toast = useToast()

  useEffect(() => {
    console.debug("Running serviceworker useEffect")
    serviceWorkerRegistration.register({
      onUpdate: (registration) => {
        console.debug("Update ready")
        toast({
          title: "New update available!",
          description: (
            <Button
              colorScheme="white"
              variant="outline"
              onClick={() => updateApp(registration)}
            >
              Reload
            </Button>
          ),
          duration: null,
          isClosable: true,
        })
      },
    })
    // Don't care if toast changes, really don't want this hook to run more than
    // once
    /* eslint-disable */
  }, [])

  function updateApp(registration: ServiceWorkerRegistration) {
    console.debug("Performing update!!")
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" })
    }
    window.location.reload()
  }

  return null
}
