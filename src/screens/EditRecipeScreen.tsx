import { AddIcon, ChevronLeftIcon, DeleteIcon } from "@chakra-ui/icons"
import {
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecipes } from "../contexts"
import { buildNewBlankRecipe, DEFAULT_RECIPES, Recipe } from "../recipes"
import { keywordToEmojiStrict } from "../utils/emoji"

export function EditRecipeScreen() {
  const navigate = useNavigate()
  const { recipes: persistedRecipes, setRecipes: setPersistedRecipes } =
    useRecipes()
  const [recipes, setRecipes] = useState(persistedRecipes)
  const toast = useToast()

  const reset = () => {
    setRecipes(DEFAULT_RECIPES)
    setPersistedRecipes(DEFAULT_RECIPES)
    toast({
      title: "Recipes reset to default",
      status: "info",
    })
  }
  const submit = () => {
    setPersistedRecipes(recipes)
    navigate("/")
    toast({
      title: "Recipes updated",
      status: "success",
    })
  }
  const buildRemoveRecipe = (recipe: Recipe) => () =>
    setRecipes(recipes.filter((r) => r !== recipe))
  const add = () => setRecipes([...recipes, buildNewBlankRecipe()])

  return (
    <Container>
      <Stack marginTop={3} spacing={5}>
        <Button
          marginRight="auto"
          leftIcon={<ChevronLeftIcon />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Heading>Edit Recipes</Heading>
        {recipes.map((recipe, index) => (
          <EditableRecipe
            {...{
              key: recipe.id,
              remove: buildRemoveRecipe(recipe),
              recipe,
              index,
              setRecipes,
            }}
          />
        ))}
        <Button leftIcon={<AddIcon />} colorScheme="blue" onClick={add}>
          Add New Recipe
        </Button>
        <Divider />
        <HStack justify="space-between">
          <Button onClick={reset} colorScheme="red">
            Reset to Defaults
          </Button>
          <HStack>
            <Button onClick={() => navigate(-1)}>Cancel</Button>
            <Button onClick={submit} colorScheme="green">
              Submit
            </Button>
          </HStack>
        </HStack>
      </Stack>
    </Container>
  )
}

function updateRecipe(
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>,
  index: number,
  recipePatch: Partial<Recipe>
) {
  setRecipes((recipes) => {
    const newRecipes = [...recipes]
    newRecipes[index] = { ...newRecipes[index], ...recipePatch }
    return newRecipes
  })
}

function EditableRecipe({
  recipe,
  setRecipes,
  index,
  remove,
}: {
  recipe: Recipe
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>
  index: number
  remove: () => void
}) {
  const nameChange = (ev: React.ChangeEvent<HTMLInputElement>) =>
    updateRecipe(setRecipes, index, { name: ev.target.value })
  const emojiChange = (ev: React.ChangeEvent<HTMLInputElement>) =>
    updateRecipe(setRecipes, index, { emoji_name: ev.target.value })
  const textChange = (ev: React.ChangeEvent<HTMLInputElement>) =>
    updateRecipe(setRecipes, index, { text: ev.target.value })
  const minutesChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const minutes = parseInt(ev.target.value)
    !isNaN(minutes) && updateRecipe(setRecipes, index, { minutes })
  }
  const dndChange = () => updateRecipe(setRecipes, index, { dnd: !recipe.dnd })
  return (
    <VStack
      spacing={1}
      alignItems="end"
      border="1px"
      borderColor="gray.300"
      borderRadius="md"
      p="5"
    >
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input value={recipe.name} onChange={nameChange} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Emoji: {keywordToEmojiStrict(recipe.emoji_name)}</FormLabel>
        <Input value={recipe.emoji_name} onChange={emojiChange} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Status text</FormLabel>
        <Input value={recipe.text} onChange={textChange} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Number of minutes</FormLabel>
        <Input value={recipe.minutes} type="number" onChange={minutesChange} />
      </FormControl>
      <FormControl>
        <Checkbox isChecked={recipe.dnd} onChange={dndChange}>
          Set DND with status
        </Checkbox>
      </FormControl>
      <Button
        marginLeft="auto"
        leftIcon={<DeleteIcon />}
        onClick={remove}
        colorScheme="red"
      >
        Remove
      </Button>
    </VStack>
  )
}
