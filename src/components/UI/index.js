import styled,{ injectGlobal } from 'styled-components'

injectGlobal `
import url("https://fonts.googleapis.com/css?family=Roboto:400,900");
body{
margin: 0,
padding: 0,
font-size: 20px;
}
`
export const theme = {
    mainColor: "pink",
    dangerColor: "red",
    successColor: "green",
    font: "Tahoma"
}

export const MainWrapper = styled.main`
width: 100vw;
height: 100vh
background-color: ${ props => props.theme.mainColor }
`

export const SectionWrapper = styled.section`
display: flex;
`