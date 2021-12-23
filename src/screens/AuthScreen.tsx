import { useContext } from "react"
import {
  Alert,
  AlertIcon,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react"
import { AuthContext } from "../contexts"
import { ArrowRightIcon, InfoIcon } from "@chakra-ui/icons"
import { Navigate, useLocation, useNavigate } from "react-router-dom"

export function AuthScreen() {
  const { hasAuth, setToken } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  function handleSubmit(e: any) {
    e.preventDefault()
    const form = new FormData(e.target)
    setToken(form.get("token"))
  }

  if (hasAuth) {
    const from = location.state?.from?.pathname || "/"
    return <Navigate to={from} replace={true} />
  }

  return (
    <Container>
      <Stack>
        <Heading>Auth</Heading>
        <form onSubmit={handleSubmit}>
          <VStack align="start">
            <Alert status="info">
              <AlertIcon /> You should add this app to your home screen before
              logging in
            </Alert>
            <FormControl id="token" isRequired>
              <FormLabel>Slack API Token</FormLabel>
              <Input
                name="token"
                type="text"
                autoComplete="off"
                spellCheck="false"
              />
              <FormHelperText>
                Token must have access to the <code>dnd:write</code>,{" "}
                <code>users.profile:read</code>, and{" "}
                <code>users.profile:write</code> scopes
              </FormHelperText>
            </FormControl>
            <Stack direction="row" justify="space-between" width="100%">
              <Button rightIcon={<ArrowRightIcon />} type="submit">
                Submit
              </Button>
              <Button
                leftIcon={<InfoIcon />}
                onClick={() => navigate("/settings")}
              >
                About slackmngr
              </Button>
            </Stack>
          </VStack>
        </form>
      </Stack>
    </Container>
  )
}
