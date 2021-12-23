export type Recipe = {
  id: string
  name: string
  emoji_name: string
  text: string
  minutes: number
  dnd: boolean
}

export function buildNewBlankRecipe() {
  return {
    id: `${new Date().getTime()}`,
    name: "New Recipe",
    emoji_name: ":wave:",
    text: "My away text",
    minutes: 60,
    dnd: true
  }
}

export const DEFAULT_RECIPES: Array<Recipe> = [
  {
    id: "lunch",
    name: "Lunch",
    emoji_name: ":fork_and_knife:",
    text: "Out to lunch",
    minutes: 60,
    dnd: true,
  },
  {
    id: "break",
    name: "Break",
    emoji_name: ":coffee:",
    text: "On a break",
    minutes: 30,
    dnd: true,
  },
  {
    id: "out-of-office",
    name: "Out of office",
    emoji_name: ":no_entry:",
    text: "Out of office",
    minutes: 720,
    dnd: true,
  },
  {
    id: "sick",
    name: "Sick",
    emoji_name: ":face_with_thermometer:",
    text: "Out sick",
    minutes: 720,
    dnd: true,
  },
  {
    id: "relocating",
    name: "Relocating",
    emoji_name: ":bus:",
    text: "Relocating",
    minutes: 30,
    dnd: false,
  },
  {
    id: "coffee-shop",
    name: "Coffee shop",
    emoji_name: ":computer:",
    text: "Working from coffee shop",
    minutes: 720,
    dnd: false,
  },
]
