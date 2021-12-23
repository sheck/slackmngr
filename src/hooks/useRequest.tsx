import { useContext } from "react"
import { useToast } from "@chakra-ui/react"
import { AuthContext } from "../contexts"

export function useRequest({ displayErrors = true } = {}) {
  const toast = useToast()
  const { token } = useContext(AuthContext)

  // Is it dumb that every request is a POST? Yes
  // Is it more dumb that Slack prevents using the authorization header in xhr
  // requests because it's missing from their cors response headers and thus
  // forces you to put the token in the form data body, preventing you from
  // submitting json in request, and thus requiring all requests to now be
  // POSTs? Yes
  async function authedFetch(path: string, params = {}) {
    const body = new URLSearchParams({ ...params, token })
    const response = await fetch(`https://slack.com/api/${path}`, {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body,
    })
    const json = await response.json()
    console.debug(path, params, json)
    if (json.ok || !displayErrors) {
      return json
    } else {
      toast({
        title: json.error,
        status: "error",
        isClosable: true,
      })
    }
  }
  return authedFetch
}
