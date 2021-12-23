import { Container, Spinner, VStack } from "@chakra-ui/react"

export function LoadingScreen() {
  return (
    <Container>
      <VStack>
        <Spinner />
      </VStack>
    </Container>
  )
}
