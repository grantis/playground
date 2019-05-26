import React from "react"
import styled from "@emotion/styled"

const Cell = styled.div`
  background-color: red;
`
const Container = styled.div`
  width: 100px;
  height: 100px;
  display: grid;
  grid-template-rows: 3fr;
  grid-template-columns: 3fr;
`

const Grid = () => {
  return (
    <Container>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </Container>
  )
}

export default Grid
