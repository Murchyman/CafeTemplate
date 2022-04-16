import css from "styled-jsx/css";

export default css.global`
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 4em;
    padding-right: 4em;
    padding-bottom: 3em;
  }

  .heading {
    margin-top: 3em;
    text-align: center;
    font-size: 2em;
    font-weight: bold;
  }

  .rowItem:hover {
    color: var(--ActionColour);
  }

  .orange {
    color: var(--ActionColour);
  }

  .heroFoot {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 2em;
    margin-top: 5em;
    width: 70vw;
    font-size: 1.5em;
    font-weight: 700;
  }

  .subHeading {
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 0em;
  }

  .times {
    margin-top: 1.5em;
    text-align: center;
    padding: 1em;
    width: 13em;
    font-weight: bolder;
    font-size: 1.5em;
  }

  .heroText {
    font-size: 1.8em;
    text-align: center;
    margin-top: -0.5em;

    width: 40%;
  }

  .button {
    margin: 1.5em;
  }

  .menuHeading {
    margin-top: 0em;
    color: var(--ActionColour);
    font-weight: bold;
    font-size: 3em;
    margin-bottom: 0em;
    font-style: italic;
    width: 60%;
  }

  .MenuNav {
    position: -webkit-sticky;
    position: sticky;
    width: 30%;
    top: 15em;
    margin-right: 5em;
    margin-left: 5em;
  }



  .menu {
    width: 100%;
  }

  .infoBox {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    min-width: 70%;
    max-width: 70%
    height: 100%;
    text-align: left;
  }

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    padding-right: 1em;
  }

  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  /* mobile */
  @media screen and (max-width: 950px) {
    .rowItem {
      display: none;
    }

    .menuHeading {
      font-size: 2em;
    }

    .main {
      padding-left: 0em;
      padding-right: 0em;
    }

    .heroText {
      font-size: 1.5em;
      width: 100%;
    }

    .heroFoot {
      display: none;
    }

    .menu {
      width: 100%;
    }

    .infoBox {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 80vw;
      height: 100%;
      text-align: left;
    }

    .hero {
      padding: 1em;
    }

    .left {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      text-align: left;
    }

    .right {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .MenuNav {
      top: 0em;
      width: 100%;
      margin-right: 0em;
      background-color: ${process.env.NEXT_PUBLIC_BackgroundColor};
      margin-left: 0em;
    }

    .menuContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 2em;
    }
  }

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 
      min-height: 100%;
  }
`;
