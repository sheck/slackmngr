import { Button, Container, Heading, VStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export function NotFoundScreen() {
  const navigate = useNavigate()
  return (
    <Container>
      <VStack>
        <Heading>Not Found</Heading>
        <Button onClick={() => navigate("/")}>Back to main page</Button>
      </VStack>
    </Container>
  )
}
