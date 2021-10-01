import React from 'react';

import { 
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon>

        </LocationIcon>
        <div>
          <p>Localização</p>
          <strong>São Paulo, São Paulo</strong>
        </div>
      </LocationCard>
      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>
        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>Vendas nos 4 últimos meses</span>
          </div>

          <div>
            <strong><SupportIcon /></strong>
            <span>Presta um bom atendimento</span>
          </div>
          <div>
            <strong><ClockIcon /></strong>
            <span>Tempo de </span>
          </div>
        </ReputationRow>
        <More href="#">Ver mais dados do vendedor</More>
      </ReputationCard>
    </Container>
  );
};

export default SellerInfo;