import { createContext, useContext } from "react"
import { Recipe } from "./recipes"

type AuthContextInterface = {
  token: string
  setToken: Function
  hasAuth: boolean
}
export const AuthContext = createContext({} as AuthContextInterface)
export function useAuth() {
  return useContext(AuthContext)
}

export const RecipeContext = createContext(
  {} as { recipes: Recipe[]; setRecipes: (recipes: Recipe[]) => void }
)
export function useRecipes() {
  return useContext(RecipeContext)
}

type SlackResourceContextInterface = {
  profile?: {
    display_name: string
    status_emoji: string
    status_text: string
  }
  setProfile: Function
  dnd?: {
    snooze_enabled: boolean
    snooze_endtime: number
  }
  setDnd: Function
}
export const SlackResourceContext = createContext(
  {} as SlackResourceContextInterface
)
