import type greetingType from "./PropsType";

export function UserGreeting({ username }: greetingType) {
  return (
    <div>
        <hr />
        <h1>UserGreeting.tsx</h1>
        <p>Hello {username || "Guest"}!</p>
    </div>
  );
}
