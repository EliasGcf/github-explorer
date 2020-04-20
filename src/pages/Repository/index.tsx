import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/50633599?v=4"
            alt="EliasGcf"
          />
          <div>
            <strong>EliasGcf/fastfeet</strong>
            <p>Descricao</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1090</strong>
            <span>Start</span>
          </li>
          <li>
            <strong>90</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>34</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asdf">
          <div>
            <strong>asdfasdf</strong>
            <p>asdfasdf</p>
          </div>

          <FiChevronRight size={20} color="#cbcbd6" />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
