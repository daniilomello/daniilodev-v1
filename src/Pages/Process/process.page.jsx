import React from 'react';
import { Link } from 'react-router-dom';

export const Process = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <span>←</span> Voltar
        </Link>
      </nav>

      <header>
        <h1>Processo</h1>
      </header>
    </div>
  );
};
