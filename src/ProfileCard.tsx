export default function Profile() {
  let name: string = "Junayed Hasan";
  let age: number = 24;
  let favHobby: string = "Photography";

  return (
    <div>
      <hr />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Hobby: {favHobby}</p>
      <p>Approximate Birth Year: {2026-age}</p>
    </div>
  );
}
