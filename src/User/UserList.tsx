import "./UserList.css";
import users from "./UserData";
import UserCard from "./UserCard";

const UserList = () => {
  return (
    <section className="user-list-section">

      <div className="user-list-header">
        <p className="user-list-label">MINI PROJECT</p>

        <h1>User Management System</h1>

        <p>
          Manage users and monitor their current status
        </p>
      </div>

      <div className="user-list">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            isActive={user.isActive}
          />
        ))}
      </div>

    </section>
  );
};

export default UserList;