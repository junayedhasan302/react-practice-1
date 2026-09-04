import "./UserCard.css";
import type { UserType } from "./UserData";

const UserCard = ({ id, name, email, isActive }: UserType) => {
  return (
    <div className="user-card">

      <div className="user-avatar">
        {name.charAt(0)}
      </div>

      <h2>{name}</h2>

      <p>
        <strong>ID:</strong> {id}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      {isActive ? (
        <span className="user-status active">
          Active
        </span>
      ) : (
        <span className="user-status inactive">
          Inactive
        </span>
      )}

    </div>
  );
};

export default UserCard;