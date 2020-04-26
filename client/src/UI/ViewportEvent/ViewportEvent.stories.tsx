import { action } from "@storybook/addon-actions"
import React from "react"
import { RootContainer } from "../Storybook"
import ViewportEvent from "."

export default {
  title: "UI/ViewportEvent",
}

const enteredViewport = action("entered viewport!")

export const Default = () => (
  <RootContainer padding>
    <ViewportEvent onEnter={enteredViewport}>Hello world!</ViewportEvent>
  </RootContainer>
)

export const OutsideViewport = () => (
  <RootContainer padding>
    <div style={{ paddingTop: "100vh" }}>
      <ViewportEvent onEnter={enteredViewport}>Hello world!</ViewportEvent>
    </div>
  </RootContainer>
)

export const DesktopOnly = () => (
  <RootContainer padding>
    <ViewportEvent onEnter={enteredViewport} desktopOnly>
      Hello world!
    </ViewportEvent>
  </RootContainer>
)

export const OneTime = () => (
  <RootContainer padding>
    <ViewportEvent onEnter={enteredViewport} oneTime>
      Hello world!
    </ViewportEvent>
  </RootContainer>
)

export const Disabled = () => (
  <RootContainer padding>
    <ViewportEvent onEnter={enteredViewport} disabled>
      Hello world!
    </ViewportEvent>
  </RootContainer>
)
