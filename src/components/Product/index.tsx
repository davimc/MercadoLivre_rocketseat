<<<<<<< HEAD
import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description
} from './styles';
=======
import React from "react";

import { Container } from "./styles";
>>>>>>> Added Layout and Global Styles

const Product: React.FC = () => {
  return (
    <Container>
<<<<<<< HEAD
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
=======
      <h1>Product</h1>
>>>>>>> Added Layout and Global Styles
    </Container>
  );
};

<<<<<<< HEAD
const WarrantySection = () => {
  return (
    <Section>
      <h4>Garantia</h4>
      <div>
        <span>
          <p className="title">Compra garantida com o Lorem Ipsum</p>
          <p className="description">
            Receba o produto que está esperando ou devolvemso o seu dinheiro
          </p>
        </span>
        <span>
          <p className="title">Garantia do vendedor</p>
          <p className="description">sem garantia</p>
        </span>
      </div>
      <a href="#">Saiba mais sobre garantia</a>
    </Section>
  );
}
const Info = () => {
  return (
    <Description>
      <h2>Descrição</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit at ligula a pharetra. Nulla aliquet porttitor urna. Aenean mollis odio sem, vel pharetra ex interdum a.
        <br />
        <br />
        Informações fornecidas pelo vendedor <br />
        consequat sodales metus viverra. Praesent nec ante eu erat convallis convallis a et metus. Proin eget massa efficitur, finibus quam at, molestie metus. Nam scelerisque ultricies accumsan. Nam rutrum vel mi at varius. Suspendisse malesuada dapibus est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </Description>
  );
}

=======
>>>>>>> Added Layout and Global Styles
export default Product;
