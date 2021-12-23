import { useEffect, useState } from "react"

import "./App.css"

import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "./theme"
import { getMany, set } from "idb-keyval"
import {
  AuthContext,
  RecipeContext,
  SlackResourceContext,
  useAuth,
} from "./contexts"

import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom"

import { MainScreen } from "./screens/MainScreen"
import { LoadingScreen } from "./screens/LoadingScreen"
import { AuthScreen } from "./screens/AuthScreen"
import { SettingsScreen } from "./screens/SettingsScreen"
import { NotFoundScreen } from "./screens/NotFoundScreen"
import { EditRecipeScreen } from "./screens/EditRecipeScreen"
import { DEFAULT_RECIPES, Recipe } from "./recipes"

function RequireAuth({ children }: { children: JSX.Element }) {
  let { hasAuth } = useAuth()
  let location = useLocation()

  if (!hasAuth) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [token, _setToken] = useState("")
  const [profile, setProfile] = useState()
  const [dnd, setDnd] = useState()
  const [recipes, _setRecipes] = useState([] as Recipe[])

  useEffect(() => {
    getMany(["slackmngr.token", "slackmngr.recipes"]).then(
      ([fetchedToken, fetchedRecipes]) => {
        let newRecipes = []
        if (fetchedRecipes && fetchedRecipes.length > 0) {
          newRecipes = fetchedRecipes
        } else {
          newRecipes = DEFAULT_RECIPES
        }
        _setToken(fetchedToken || "")
        _setRecipes(newRecipes)
        setIsLoaded(true)
      }
    )
  }, [])

  const hasAuth = token.length > 0
  function setToken(input: string) {
    set("slackmngr.token", input)
    _setToken(input)
  }

  function setRecipes(input: Recipe[] | ((recipes: Recipe[]) => Recipe[])) {
    set("slackmngr.recipes", input)
    _setRecipes(input)
  }

  if (!isLoaded)
    return (
      <ChakraProvider theme={theme}>
        <LoadingScreen />
      </ChakraProvider>
    )

  return (
    <ChakraProvider theme={theme}>
      <AuthContext.Provider value={{ token, setToken, hasAuth }}>
        <RecipeContext.Provider value={{ recipes, setRecipes }}>
          <SlackResourceContext.Provider
            value={{ profile, setProfile, dnd, setDnd }}
          >
            <HashRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <RequireAuth>
                      <MainScreen />
                    </RequireAuth>
                  }
                />
                <Route path="/login" element={<AuthScreen />} />
                <Route path="/settings" element={<SettingsScreen />} />
                <Route path="/edit" element={<EditRecipeScreen />} />
                <Route path="*" element={<NotFoundScreen />} />
              </Routes>
            </HashRouter>
          </SlackResourceContext.Provider>
        </RecipeContext.Provider>
      </AuthContext.Provider>
    </ChakraProvider>
  )
}
