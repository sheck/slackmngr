import EmojiConvertor from "emoji-js"

const emoji = new EmojiConvertor()
emoji.replace_mode = "unified"
emoji.allow_native = true
export function keywordToEmojiMaybe(keyword: string): string {
  return emoji.replace_colons(keyword)
}

export function keywordToEmojiStrict(keyword: string): string {
  const candidate = emoji.replace_colons(keyword)
  if (candidate === keyword) return ""
  return candidate
}
