import React, { createContext, useContext, useState } from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Home from '../app/page';
import ProductGrid, { Product } from '@/app/components/ProductGrid';
import AddToCart from '@/app/components/AddToCart';
import Context, { ContextValue } from '@/app/context/contextValue';
import userEvent from '@testing-library/user-event';
import Header from '@/app/components/Header';
import Cart from '@/app/components/Cart';
import Checkout from '@/app/components/Checkout';
import CheckoutList from '@/app/components/CheckoutList';
import ProductCheckoutCard from '@/app/components/ProductCheckoutCard';
import Qtd from '@/app/components/Qtd';
import Total from '@/app/components/Total';

async function resolvedComponent(Component: any, props: any) {
  const ComponenteResolved = await Component(props);
  return () => ComponenteResolved;
}

const products = [
  {
    id: 1,
    name: 'Iphone 11 128 GB',
    brand: 'Apple',
    description:
      'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp',
    price: '5000.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z',
  },
  {
    id: 2,
    name: 'AirPods',
    brand: 'Apple',
    description:
      'Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
    price: '1200.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z',
  },
  {
    id: 3,
    name: 'Macbook Air',
    brand: 'Apple',
    description:
      'Processador intel Core i5 de dois núcleos e 1,8 GHz (Turbo Boost de até 2,9 GHz) com cache L3 compartilhado de 3 MB.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
    price: '8200.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z',
  },
  {
    id: 4,
    name: 'iPhone 12 64 GB',
    brand: 'Apple',
    description:
      'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp',
    price: '6500.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z',
  },
  {
    id: 5,
    name: 'Apple Watch Series 7',
    brand: 'Apple',
    description:
      'O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp',
    price: '3200.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z',
  },
  {
    id: 6,
    name: 'iPad',
    brand: 'Apple',
    description:
      'iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp',
    price: '4200.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z',
  },
  {
    id: 7,
    name: 'Headset Cloud Revolver',
    brand: 'HyperX',
    description:
      'A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp',
    price: '1000.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z',
  },
  {
    id: 8,
    name: 'Headset Cloud Stinger',
    brand: 'HyperX',
    description:
      'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
    price: '600.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z',
  },
];

describe('Page', () => {
  jest.spyOn(axios, 'get').mockResolvedValue(
    Promise.resolve({
      data: {
        products,
      },
    }),
  );
  it('renders a ProductGrid', async () => {
    const GridResolved = await resolvedComponent(ProductGrid, {});
    const { container } = render(
      <Context>
        <GridResolved />
      </Context>,
    );
    expect(container).toBeInTheDocument();
  });

  it('render AddToCart', async () => {
    const product = {
      id: 8,
      name: 'Headset Cloud Stinger',
      brand: 'HyperX',
      description:
        'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
      price: '600.00',
    };
    render(
      <Context>
        <AddToCart product={product} />
      </Context>,
    );
    const button = screen.getAllByRole('button');
    expect(button).toHaveLength(1);
    await userEvent.click(button[0]);
  });

  it('render Header', () => {
    const { container } = render(
      <Context>
        <Header />
      </Context>,
    );
    const texts = screen.getAllByRole('paragraph');
    expect(texts).toHaveLength(2);
    expect(container).toBeInTheDocument();
  });
  it('render Cart', async () => {
    const { container } = render(
      <Context>
        <Cart />
      </Context>,
    );
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(container).toBeInTheDocument();
  });

  it('render Checkout', async () => {
    const isCheckout = true;
    const cart: Product[] = [];
    const { container } = render(
      <Context>
        <Checkout />
      </Context>,
    );
    const div = screen.getByTestId('id-checkout');
    expect(div.style.display).toBe('none');

    const text = screen.getByTestId('id-title');
    const closeBtn = screen.getByTestId('id-close-checkout');
    render(
      <ContextValue.Provider value={{ isCheckout, cart }}>
        <Checkout />
      </ContextValue.Provider>,
    );
    await userEvent.click(closeBtn);
    expect(text).toBeInTheDocument();
    expect(text.innerHTML).toBe('Carrinho de compras');
    expect(div).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  });
  it('render CheckoutList', async () => {
    const { container } = render(
      <ContextValue.Provider value={{ cart: products }}>
        <CheckoutList />
      </ContextValue.Provider>,
    );
    expect(container).toBeInTheDocument();
  });
  it('render ProductCheckoutCard', async () => {
    const setCart = jest.fn();
    const { container } = render(
      <ContextValue.Provider value={{ cart: products, setCart }}>
        <ProductCheckoutCard product={products[0]} />
      </ContextValue.Provider>,
    );
    expect(container).toBeInTheDocument();
    const img = screen.getByRole('img');
    const button = screen.getByText('x');
    await userEvent.click(button);
    expect(img).toBeInTheDocument();
  });

  it('render Qtd', async () => {
    const setCart = jest.fn();
    const { container } = render(
      <ContextValue.Provider value={{ cart: products, setCart }}>
        <Qtd product={products[0]} />
      </ContextValue.Provider>,
    );

    const minusBtn = screen.getByText('-');
    const plusBtn = screen.getByText('+');
    await userEvent.click(minusBtn);
    await userEvent.click(plusBtn);
    expect(container).toBeInTheDocument();
  });

  it('render Total', async () => {
    const { container } = render(
      <ContextValue.Provider value={{ cart: products }}>
        <Total />
      </ContextValue.Provider>,
    );
    expect(container).toBeInTheDocument();
  });
});
