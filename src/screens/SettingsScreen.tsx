import { useState } from "react"
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  useToast,
  VStack,
  HStack,
} from "@chakra-ui/react"
import { useAuth } from "../contexts"
import {
  ChevronLeftIcon,
  EditIcon,
  Search2Icon,
  ViewIcon,
  ViewOffIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"
import { version } from "../../package.json"

export function SettingsScreen() {
  const { hasAuth, token, setToken } = useAuth()
  const navigate = useNavigate()

  return (
    <Container>
      <VStack paddingTop={3} spacing={5}>
        <Button leftIcon={<ChevronLeftIcon />} onClick={() => navigate(-1)}>
          Back
        </Button>
        <Heading>Settings</Heading>
        <HStack>
          <Text>v{version}</Text>
          <Button size="xs" href="https://github.com/sheck/slackmngr/blob/main/CHANGELOG.md#changelog">
            View Changelog
          </Button>
        </HStack>
        <Box>
          <Text>Slack Manager works best as a home screen app.</Text>
          <Text>For iOS: Share &gt; Add to Home Screen.</Text>
        </Box>
        <Button
          leftIcon={<Search2Icon />}
          onClick={() =>
            window.open("https://github.com/sheck/slackmngr", "_blank")
          }
        >
          View Source on Github
        </Button>
        {hasAuth && (
          <>
            <Divider />
            <Button leftIcon={<EditIcon />} onClick={() => navigate("/edit")}>
              Edit Recipes
            </Button>
            <Divider />
            <RevealTokenButton {...{ token }} />
            <Button colorScheme="yellow" leftIcon={<WarningTwoIcon />} onClick={() => setToken("")}>
              Clear Slack Token
            </Button>
          </>
        )}
      </VStack>
    </Container>
  )
}

function RevealTokenButton({ token }: { token: string }) {
  const [visible, setVisible] = useState(false)
  const toggle = () => setVisible(!visible)
  const toast = useToast()

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(token)
      toast({
        title: "Token copied to clipboard",
        status: "success",
      })
    } catch (error) {
      toast({
        title: `Could not copy token. ${error}`,
        status: "error",
      })
    }
  }

  if (visible) {
    return (
      <>
        <Button leftIcon={<ViewOffIcon />} onClick={toggle}>
          Hide Token
        </Button>
        <Text>{token}</Text>
        <Button onClick={copyToClipboard}>Copy to clipboard</Button>
      </>
    )
  } else {
    return (
      <>
        <Button leftIcon={<ViewIcon />} onClick={toggle}>
          Show Token
        </Button>
      </>
    )
  }
}
