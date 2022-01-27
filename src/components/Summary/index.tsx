import { Container } from './styles';
import incomeImg from '../../assets/income.svg';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <h2>Entradas</h2>
          <img src={incomeImg} alt="income" />
        </header>
      </div>
    </Container>
  );
}
