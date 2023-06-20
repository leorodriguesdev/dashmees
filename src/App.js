import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function Dashboard() {
  const [houseDebts, setHouseDebts] = useState([]);
  const [personalDebts, setPersonalDebts] = useState([]);
  const [monthlyDebts, setMonthlyDebts] = useState([]);

  useEffect(() => {
    // Simulação de dados recebidos do servidor
    const houseDebtsData = [
      { name: 'Aluguel', value: 1000 },
      { name: 'Água', value: 50 },
      { name: 'Luz', value: 80 },
    ];

    const personalDebtsData = [
      { name: 'Transporte', value: 150 },
      { name: 'Alimentação', value: 200 },
      { name: 'Lazer', value: 100 },
    ];

    const monthlyDebtsData = [
      { name: 'Crédito', value: 500 },
      { name: 'Telefone', value: 80 },
      { name: 'Internet', value: 100 },
    ];

    setHouseDebts(houseDebtsData);
    setPersonalDebts(personalDebtsData);
    setMonthlyDebts(monthlyDebtsData);
  }, []);

  const calculateTotal = (debts) => {
    return debts.reduce((total, debt) => total + debt.value, 0);
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Saldo pessoal: R$ 1000</p>
      <p>Saldo total: R$ 2000</p>
      <p>Saída: R$ 1500</p>
      <p>Sobra: R$ 500</p>

      <div className="row">
        <div className="col">
          <h2>Dividas da Casa</h2>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Nome da dívida</th>
                <th>Valor da dívida</th>
              </tr>
            </thead>
            <tbody>
              {houseDebts.map((debt, index) => (
                <tr key={index}>
                  <td>{debt.name}</td>
                  <td>R$ {debt.value}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td>Total</td>
                <td>R$ {calculateTotal(houseDebts)}</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="col">
          <h2>Dividas Pessoais</h2>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Nome da dívida</th>
                <th>Valor da dívida</th>
              </tr>
            </thead>
            <tbody>
              {personalDebts.map((debt, index) => (
                <tr key={index}>
                  <td>{debt.name}</td>
                  <td>R$ {debt.value}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td>Total</td>
                <td>R$ {calculateTotal(personalDebts)}</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="col">
          <h2>Dívidas do Mês</h2>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Nome da dívida</th>
                <th>Valor da dívida</th>
              </tr>
            </thead>
            <tbody>
              {monthlyDebts.map((debt, index) => (
                <tr key={index}>
                  <td>{debt.name}</td>
                  <td>R$ {debt.value}</td>
                </tr>
              ))}
              <tr className="total-row">
                <td>Total</td>
                <td>R$ {calculateTotal(monthlyDebts)}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
