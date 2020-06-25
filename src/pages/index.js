import React, { useState, createContext } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PrimaryButton from "../components/Button/primaryButton"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>This is what we call playground</p>
      <div>
        <Image />
      </div>
      <div>
        <PrimaryButton />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br /><br />
      <Link to="/about">About Page</Link> <br /><br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
