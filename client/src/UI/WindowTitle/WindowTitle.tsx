import React from "react"
import { SettingsContext } from "../../Context"

interface IWindowTitleProps {
  alerts?: number
  index?: boolean
  title?: string | null
}

const WindowTitle: React.FC<IWindowTitleProps> = ({
  alerts,
  index,
  title,
}) => {
  const settings = React.useContext(SettingsContext)
  if (!settings) return null

  const prefix = alerts ? `(${alerts}) ` : ""

  if (index && settings.forumIndexTitle) {
    document.title = prefix + settings.forumIndexTitle
  } else if (title) {
    document.title = `${prefix}${title} | ${settings.forumName}`
  } else {
    document.title = prefix + settings.forumName
  }

  return null // never render itself
}

export default WindowTitle
