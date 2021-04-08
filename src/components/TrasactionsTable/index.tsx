import { useEffect } from 'react';
import { Container } from "./styles";
import { api } from '../../services/api';


export function TrasactionTable() {
  useEffect(() => {
    api.get("transactions")
    .then(response => console.log(response.data));
  }, []);
  
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.200</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}