import "./App.css";

import Footer from "./Footer";
import ProductCard from "./ProductCard";
import Profile from "./ProfileCard";
import StatusBadge from "./StatusBadge";
import StudentList from "./Student/StudentList";
import UserList from "./User/UserList";
import { UserGreeting } from "./UserGreeting";
import WelcomeCard from "./WelcomeCard";

function App() {
  return (
    <div className="app">

      {/* Header */}
      <header className="app-header">
        <p className="app-label">REACT • TYPESCRIPT • PRACTICE</p>
        <h1>Component Showcase</h1>
        <p className="app-subtitle">
          A collection of reusable React components
        </p>
      </header>


      {/* Welcome */}
      <section className="section-card welcome-section">
        <WelcomeCard />
      </section>


      {/* Profile */}
      <section className="section-card profile-section">
        <Profile />
      </section>


      {/* Products */}
      <section className="section-wrapper">
        <div className="section-heading">
          <span>01</span>
          <h2>Products</h2>
        </div>

        <div className="product-container">

          <div className="product-section">
            <ProductCard
              productName="Watch"
              price={1200}
              inStock={true}
            />
          </div>

          <div className="product-section">
            <ProductCard
              productName="Umbrella"
              price={900}
              inStock={false}
            />
          </div>

          <div className="product-section">
            <ProductCard
              productName="Book"
              price={350}
              inStock={true}
            />
          </div>

        </div>
      </section>


      {/* Status */}
      <section className="section-wrapper status-wrapper">
        <div className="section-heading">
          <span>02</span>
          <h2>Status</h2>
        </div>

        <div className="status-container">

          <div className="status-section">
            <StatusBadge isActive={true} />
          </div>

          <div className="status-section">
            <StatusBadge isActive={false} />
          </div>

        </div>
      </section>


      {/* Greeting */}
      <section className="section-wrapper">
        <div className="section-heading">
          <span>03</span>
          <h2>User Greeting</h2>
        </div>

        <div className="greeting-container">

          <div className="greeting-section">
            <UserGreeting username="Junayed" />
          </div>

          <div className="greeting-section">
            <UserGreeting />
          </div>

        </div>
      </section>


      {/* User Management */}
      <section className="user-project">
        <UserList />
      </section>


      {/* Students */}
      <section className="student-project">
        <StudentList />
      </section>


      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;