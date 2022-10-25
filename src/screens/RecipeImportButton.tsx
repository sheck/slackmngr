import { ChangeEvent, useRef } from "react"

import { ArrowUpIcon } from "@chakra-ui/icons"
import { Box, Button, Input, useToast } from "@chakra-ui/react"

import { Recipe } from "../recipes"

export function RecipeImportButton({
  onImport,
}: {
  onImport: (a: Recipe[]) => void
}) {
  const toast = useToast()
  const fileInput = useRef<HTMLInputElement>(null)

  function handleFileChanged(event: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader()
    reader.onload = (rEvent) => {
      const inputString = rEvent.target?.result?.toString()
      if (!inputString) {
        return toast({
          title: "Could not parse imported recipes",
          status: "error",
        })
      }
      const json = JSON.parse(inputString)
      onImport(json)
      return toast({
        title: "File imported successfully",
        description: "You must click submit for these changes to take effect",
        status: "success",
      })
    }
    const files = event.target.files
    if (files && files.length > 0) {
      reader.readAsText(files[0])
    } else {
      return toast({
        title: "There was a problem with the file import.",
        status: "error",
      })
    }
  }

  function handleClick() {
    fileInput.current?.click()
  }

  return (
    <Box>
      <Input
        type="file"
        ref={fileInput}
        onChange={handleFileChanged}
        display="none"
        accept=".json"
      />
      <Button size="sm" onClick={handleClick} leftIcon={<ArrowUpIcon />}>
        Import
      </Button>
    </Box>
  )
}
