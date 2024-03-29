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
  Link,
} from "@chakra-ui/react"
import { useAuth, useRecipes } from "../contexts"
import {
  ChevronLeftIcon,
  DownloadIcon,
  EditIcon,
  ExternalLinkIcon,
  Search2Icon,
  ViewIcon,
  ViewOffIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"
import packageJson from "../../package.json"
import { useMagicJSONDownload } from "../hooks/useMagicDownload"

const { version } = packageJson

export function SettingsScreen() {
  const { hasAuth, token, setToken } = useAuth()
  const navigate = useNavigate()
  const { recipes } = useRecipes()
  const downloadRecipes = useMagicJSONDownload(
    "slackmngr-recipes.json",
    recipes
  )

  return (
    <Container>
      <VStack paddingTop={3} spacing={5}>
        <Button leftIcon={<ChevronLeftIcon />} onClick={() => navigate(-1)}>
          Back
        </Button>
        <Heading>Settings</Heading>
        <HStack>
          <Text>v{version}</Text>
          <Link
            href="https://github.com/sheck/slackmngr/blob/main/CHANGELOG.md#changelog"
            color="teal"
            isExternal
          >
            View Changelog <ExternalLinkIcon mx="2px" />
          </Link>
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
            <HStack>
              <Button leftIcon={<EditIcon />} onClick={() => navigate("/edit")}>
                Edit Recipes
              </Button>
              <Button
                onClick={downloadRecipes}
                variant="outline"
                leftIcon={<DownloadIcon />}
                size="md"
              >
                Export Recipes
              </Button>
            </HStack>
            <Divider />
            <RevealTokenButton {...{ token }} />
            <Button
              colorScheme="yellow"
              leftIcon={<WarningTwoIcon />}
              onClick={() => setToken("")}
            >
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
