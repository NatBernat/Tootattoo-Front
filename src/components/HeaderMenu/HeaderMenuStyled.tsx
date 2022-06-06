import styled from "styled-components";

const HeaderMenuStyled = styled.header`
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;

  h1 {
    cursor: pointer;
    img {
      width: 25vw;
      min-width: 150px;
      max-width: 500px;
    }
  }

  .header-link {
    text-decoration: none;
  }

  p {
    color: #000;
    font-size: 1.5em;
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }

  li p {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    text-decoration: none;
  }

  li p:hover,
  .menu-btn:hover {
    background-color: #f4f4f4;
  }

  .logo {
    display: block;
    max-width: 300px;
    float: left;
    padding: 10px 0 10px 20px;
    text-decoration: none;
  }

  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  .menu-icon {
    cursor: pointer;
    display: block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
    .navicon {
      background: #333;
      display: block;
      height: 2px;
      position: relative;
      transition: background 0.2s ease-out;
      width: 18px;
    }
    .navicon:before,
    .navicon:after {
      background: #333;
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
    }
    .navicon:before {
      top: 5px;
    }

    .navicon:after {
      top: -5px;
    }
  }

  .menu-btn {
    display: none;
    :checked ~ .menu {
      max-height: 240px;
    }
    :checked ~ .menu-icon .navicon {
      background: transparent;
    }

    :checked ~ .menu-icon .navicon:before {
      transform: rotate(-45deg);
    }

    :checked ~ .menu-icon .navicon:after {
      transform: rotate(45deg);
    }

    :checked ~ .menu-icon:not(.steps) .navicon:before,
    :checked ~ .menu-icon:not(.steps) .navicon:after {
      top: 0;
    }
  }

  @media (max-width: 450px) {
    .header li {
      float: left;
    }
    .header li p {
      padding: 20px 30px;
    }
    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  }
`;

export default HeaderMenuStyled;
