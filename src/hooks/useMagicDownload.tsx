import { useCallback } from "react"

export function useMagicDownload(fileName: string, textContent: string) {
  return useCallback(
    () => magicDownload(fileName, textContent),
    [fileName, textContent]
  )
}

export function useMagicJSONDownload(
  fileName: string,
  json: Record<string, unknown> | Record<string, unknown>[]
) {
  return useCallback(() => {
    const textContent = JSON.stringify(json)
    magicDownload(fileName, textContent)
  }, [fileName, json])
}

function magicDownload(fileName: string, textContent: string) {
  const blob = new Blob([textContent], {
    type: "application/json",
  })

  // create hidden link
  const element = document.createElement("a")
  document.body.appendChild(element)
  element.setAttribute("href", window.URL.createObjectURL(blob))
  element.setAttribute("download", fileName)
  element.style.display = ""

  element.click()

  document.body.removeChild(element)
}
