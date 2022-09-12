import React, { useState } from 'react';
import { Button } from '../../components/Form/Button';
import { CategorySelect } from '../../components/Form/CategorySelect';
import { Input } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsType,
} from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionsType>
            <TransactionTypeButton
              type="up"
              title="Iconme"
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsType>

          <CategorySelect title="Categoria" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}