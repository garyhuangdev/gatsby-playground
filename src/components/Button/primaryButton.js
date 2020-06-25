import React from "react"

const PrimaryButton = (props) => (
  <button onClick={() => { console.log("Button clicked") }}>{props.children}</button>
)

export default PrimaryButton