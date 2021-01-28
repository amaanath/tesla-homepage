import './App.css';
import Header from './components/Header';
import Product from "./components/Product";
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__productsContainer"> 

        <Product 
          title = 'Model S'
          desc = 'Order Online for Touchless Delivery'
          descLink = ''
          backgroundImg = {ModelS}
          leftBtnTxt = 'CUSTOM ORDER'
          leftBtnLink = ''
          rightBtnTxt = 'EXISTING INVENTORY'
          rightBtnLink = ''
          twoButtons = 'true'
          first
        />

        <Product 
          title = 'Model Y'
          desc = 'Order Online for Touchless Delivery'
          descLink = ''
          backgroundImg = {ModelY}
          leftBtnTxt = 'CUSTOM ORDER'
          leftBtnLink = ''
          rightBtnTxt = 'LEARN MORE'
          rightBtnLink = ''
          twoButtons = 'true'
        />

        <Product 
          title = 'Model 3'
          desc = 'Order Online for Touchless Delivery'
          descLink = ''
          backgroundImg = {Model3}
          leftBtnTxt = 'CUSTOM ORDER'
          leftBtnLink = ''
          rightBtnTxt = 'EXISTING INVENTORY'
          rightBtnLink = ''
          twoButtons = 'true'
        />

        <Product 
          title = 'Model X'
          desc = 'Order Online for Touchless Delivery'
          descLink = ''
          backgroundImg = {ModelX}
          leftBtnTxt = 'CUSTOM ORDER'
          leftBtnLink = ''
          rightBtnTxt = 'EXISTING INVENTORY'
          rightBtnLink = ''
          twoButtons = 'true'
        />

        <Product 
          title = 'Lowest Cost Solar Panels in America'
          desc = 'Money-back Guarantee'
          descLink = ''
          backgroundImg = {SolarPanels}
          leftBtnTxt = 'ORDER NOW'
          leftBtnLink = ''
          rightBtnTxt = 'LEARN MORE'
          rightBtnLink = ''
          twoButtons = 'true'
        />

        <Product 
          title = 'Solar for New Roofs'
          desc = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
          descLink = ''
          backgroundImg = {SolarRoof}
          leftBtnTxt = 'ORDER NOW'
          leftBtnLink = ''
          rightBtnTxt = 'LEARN MORE'
          rightBtnLink = ''
          twoButtons = 'true'
        />

        <Product 
          title = 'Accessories'
          desc = ''
          descLink = ''
          backgroundImg = {Accessories}
          leftBtnTxt = 'SHOP NOW'
          leftBtnLink = ''
          rightBtnTxt = ''
          rightBtnLink = ''
        />

      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
