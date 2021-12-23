import { useContext, useEffect, useState } from "react"
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react"
import { RepeatIcon, SettingsIcon } from "@chakra-ui/icons"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { useRequest } from "../hooks/useRequest"
import { SlackResourceContext, useRecipes } from "../contexts"
import { Recipe } from "../recipes"
import { useNavigate } from "react-router-dom"
import { keywordToEmojiMaybe } from "../utils/emoji"

export function MainScreen() {
  const { recipes } = useRecipes()
  return (
    <Container height="100%">
      <Stack height="100%">
        <Stack spacing={5}>
          <Heading
            marginY="1"
            size="md"
            textAlign="center"
            textTransform="uppercase"
            letterSpacing="widest"
          >
            ✌️slackmngr
          </Heading>
          <Profile />
          <Divider />
          <SimpleGrid columns={[1, 2]} spacing={5}>
            {recipes.map((recipe) => (
              <StatusButton key={recipe.id} {...recipe} />
            ))}
            <ResetDNDButton />
            <ResetAllButton />
          </SimpleGrid>
        </Stack>
        <Box flexGrow={1}></Box>
        <Box overflow="auto">
          <Box sx={{ position: "sticky", bottom: "0" }}>
            <Footer />
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

function Profile() {
  const { profile, setProfile, dnd, setDnd } = useContext(SlackResourceContext)
  const request = useRequest()
  const [isLoading, setIsLoading] = useState(false)

  function handleRefresh() {
    setIsLoading(true)
    const profile = request("users.profile.get").then((user) =>
      setProfile(user.profile)
    )
    const dnd = request("dnd.info").then((dnd) => setDnd(dnd))
    Promise.all([profile, dnd]).then(() => setIsLoading(false))
  }

  useEffect(() => {
    handleRefresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <HStack>
      {profile && (
        <Stack>
          <Heading size="lg">
            {keywordToEmojiMaybe(profile.status_emoji)}{" "}
            {dnd?.snooze_enabled && "💤 "}
            {profile.status_text}
          </Heading>
          {dnd?.snooze_enabled && (
            <Text
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="wider"
              fontWeight="bold"
              color="gray.500"
            >
              ends {dayjs.unix(dnd.snooze_endtime).fromNow()}
            </Text>
          )}
        </Stack>
      )}
      <Spacer />
      <Button isLoading={isLoading} onClick={handleRefresh}>
        <RepeatIcon />
      </Button>
    </HStack>
  )
}

function StatusButton({ emoji_name, name, minutes, text, dnd }: Recipe) {
  const request = useRequest()
  const toast = useToast()
  const { setProfile, setDnd } = useContext(SlackResourceContext)
  const [isLoading, setIsLoading] = useState(false)
  const emoji = keywordToEmojiMaybe(emoji_name)

  async function handleClick() {
    setIsLoading(true)

    let endTime, dndRequest
    if (dnd) {
      dndRequest = await request("dnd.setSnooze", { num_minutes: minutes })
      if (!dndRequest) return setIsLoading(false)
      endTime = dndRequest.snooze_endtime
    } else {
      endTime = minutesFromNowEpoch(minutes)
    }

    setDnd(dndRequest)
    const status = await request("users.profile.set", {
      profile: JSON.stringify({
        status_expiration: endTime,
        status_emoji: emoji_name,
        status_text: text,
      }),
    })
    if (!status) return setIsLoading(false)

    toast({
      title: `${emoji} ${text}`,
      status: "success",
    })
    setProfile(status.profile)
    setIsLoading(false)
  }

  return (
    <Button isLoading={isLoading} size="lg" onClick={handleClick}>
      {emoji} {name}
    </Button>
  )
}

function ResetAllButton() {
  const request = useRequest()
  const requestIgnoreErrors = useRequest({ displayErrors: false })
  const toast = useToast()
  const { setProfile, setDnd } = useContext(SlackResourceContext)
  const [isLoading, setIsLoading] = useState(false)

  async function handleClick() {
    setIsLoading(true)
    const dnd = requestIgnoreErrors("dnd.endSnooze")
    const stat = request("users.profile.set", {
      profile: JSON.stringify({
        status_emoji: "",
        status_text: "",
      }),
    })
    const [{ profile, dndResp }] = await Promise.all([stat, dnd])
    toast({ title: "Status & DND cleared", status: "success" })
    setProfile(profile)
    setDnd(dndResp)
    setIsLoading(false)
  }

  return (
    <Button isLoading={isLoading} size="lg" onClick={handleClick}>
      ❌ Reset
    </Button>
  )
}

function ResetDNDButton() {
  const requestIgnoreErrors = useRequest({ displayErrors: false })
  const toast = useToast()
  const { setDnd } = useContext(SlackResourceContext)
  const [isLoading, setIsLoading] = useState(false)

  async function handleClick() {
    setIsLoading(true)
    const dndResp = await requestIgnoreErrors("dnd.endSnooze")
    toast({ title: "DND cleared", status: "success" })
    setDnd(dndResp)
    setIsLoading(false)
  }

  return (
    <Button isLoading={isLoading} size="lg" onClick={handleClick}>
      ☀️ Clear DND
    </Button>
  )
}

dayjs.extend(relativeTime)
function minutesFromNowEpoch(minutes: number): number {
  const epochSeconds = Math.round(new Date().getTime() / 1000)
  return epochSeconds + minutes * 60
}

function Footer() {
  const navigate = useNavigate()
  return (
    <Stack direction="row" paddingBottom={3}>
      <Box flexGrow={1} />
      <Button onClick={() => navigate("settings")}>
        <SettingsIcon />
      </Button>
    </Stack>
  )
}
