import Image from 'next/image';
import ProductGrid from './components/ProductGrid';
import Header from './components/Header';
import Context from './context/contextValue';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

export default function Home() {
  return (
    <main>
      <Context>
        <Checkout />
        <div>
          <Header />
          <div className='product-grid-container'>
            <ProductGrid />
          </div>
          <Footer />
        </div>
      </Context>
    </main>
  );
}
