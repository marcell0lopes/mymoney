import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { useContext } from 'react';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <h2>Entradas</h2>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <h2>Saídas</h2>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- R$500</strong>
      </div>
      <div className="highlight-background">
        <header>
          <h2>Total</h2>
          <img src={totalImg} alt="Saídas" />
        </header>
        <strong>R$500</strong>
      </div>
    </Container>
  );
}
