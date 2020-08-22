import styled from 'styled-components';

export const ProjectsPage = styled.main`
  nav {
    padding: 1rem 0;
    a {
      font-size: 18px;
      color: #64ffda;
      text-decoration: none;
      transition: 0.5s ease;
      &:hover {
        cursor: pointer;
        opacity: 0.5;
        transition: 0.5s ease;
      }
    }
  }
  header {
    padding: 1.2rem 0;
    h1 {
      color: #ccd6f6;
      font-size: 4rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    p {
      color: #66708d;
      font-size: 1.125rem;
      font-weight: 300;
    }
  }
  table {
    width: 100%;
    margin-top: 1.5rem;
    border-collapse: collapse;
    thead {
      tr {
        th {
          font-weight: 500;
          text-align: left;
          padding: 0.8rem 1.2rem 0.8rem 0.8rem;
          font-size: 1.125rem;
          color: #66708d;
        }
      }
    }

    tbody {
      tr {
        transition: 0.5s ease;
        td {
          font-weight: 300;
          text-align: left;
          padding: 0.8rem 1.2rem 0.8rem 0.8rem;
          font-size: 1.125rem;
        }
        &:hover,
        &:focus {
          background-color: rgb(102, 112, 141, 0.06);
          transition: 0.5s ease;
        }
      }
    }
  }
  .name {
    color: #ccd6f6;
    font-weight: 500;
  }
  .company,
  .tech {
    color: #66708d;
  }
  .company {
  }
  .tech {
    font-family: 'Fira Code', monospace;
    font-weight: 100;
    font-size: 0.8rem;
    .separator {
      display: inline-block;
      margin: 0 0.3rem;
    }
  }
  .links {
    span {
      display: inline-block;
      margin: 0 0.2rem;
      a {
        color: #66708d;
        transition: 0.5s ease;
        svg {
          width: 25px;
          height: 25px;
        }
      }
      &:hover {
        svg {
          color: #64ffda;
          transition: 0.5s ease;
        }
      }
    }
  }
  .hide-mobile {
    @media (max-width: 62.5rem) {
      display: none;
    }
  }
`;
