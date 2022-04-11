import css from 'styled-jsx/css'

export default css.global`
:root {
  --ActionColour: ${process.env.ActionColor};
}
a{
  font-weight: bold;

}
a:hover{
  color: var(--ActionColour);
}
html,
body {
  scroll-behavior: smooth;

  background-color: ${process.env.BackgroundColor};
  color: ${process.env.BasicColor};
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`