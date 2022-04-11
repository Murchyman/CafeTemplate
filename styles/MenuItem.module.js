import css from "styled-jsx/css";

export default css.global`
.wrapper {
  width: 40vw;
}

.menuItemTitle {
  
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.menuItemDescription {
  margin-top: 0.3em;
  margin-bottom: 1em;
  font-weight: lighter;
  
  width: 80%;
  margin-bottom: 1.5em;
}

/* mobile */
@media screen and (max-width: 950px) {
  .wrapper {
    width: 80vw;
  }
}`;
