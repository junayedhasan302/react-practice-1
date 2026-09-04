import "./App.css";

import Footer from "./Footer";
import ProductCard from "./ProductCard";
import Profile from "./ProfileCard";
import StatusBadge from "./StatusBadge";
import StudentList from "./Student/StudentList";
import { UserGreeting } from "./UserGreeting";
import WelcomeCard from "./WelcomeCard";

function App() {
  return (
    <div className="app">

      <div className="component welcome-section">
        <WelcomeCard />
      </div>

      <div className="component profile-section">
        <Profile />
      </div>

      <div className="product-container">
        <div className="component product-section">
          <ProductCard
            productName="Watch"
            price={1200}
            inStock={true}
          />
        </div>

        <div className="component product-section">
          <ProductCard
            productName="Umbrella"
            price={900}
            inStock={false}
          />
        </div>

        <div className="component product-section">
          <ProductCard
            productName="Book"
            price={350}
            inStock={true}
          />
        </div>
      </div>

      <div className="status-container">
        <div className="component status-section">
          <StatusBadge isActive={true} />
        </div>

        <div className="component status-section">
          <StatusBadge isActive={false} />
        </div>
      </div>

      <div className="greeting-container">
        <div className="component greeting-section">
          <UserGreeting username="Junayed" />
        </div>

        <div className="component greeting-section">
          <UserGreeting />
        </div>
      </div>

      <div className="component student-section">
        <StudentList />
      </div>

      <Footer />

    </div>
  );
}

export default App;