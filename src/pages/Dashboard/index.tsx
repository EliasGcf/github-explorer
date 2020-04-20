import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/50633599?v=4"
            alt="Elias Gabriel"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Fodasi</p>
          </div>

          <FiChevronRight size={20} color="#cbcbd6" />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/50633599?v=4"
            alt="Elias Gabriel"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Fodasi</p>
          </div>

          <FiChevronRight size={20} color="#cbcbd6" />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/50633599?v=4"
            alt="Elias Gabriel"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Fodasi</p>
          </div>

          <FiChevronRight size={20} color="#cbcbd6" />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
