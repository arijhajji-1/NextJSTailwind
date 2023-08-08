import Navigation from './Navigations';
import Products from './cards/product';

export default function HomePage() {
  return (
    <div style={{backgroundColor : 'white'}}>
      <Navigation />
      <div>
      <Products/>
      </div>
      {/* Rest of the page content */}
      
    </div>
  );
}
