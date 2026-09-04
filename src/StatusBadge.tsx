interface IsActiveType {
  isActive: boolean;
}

export default function StatusBadge({ isActive }: IsActiveType) {
  //   if (isActive) {
  //     return (
  //       <div>
  //         <hr />
  //           <h1>StatusBadge.tsx</h1>
  //         <p>Active</p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <hr />
  //         <h1>StatusBadge.tsx</h1>
  //         <p>Inactive</p>
  //       </div>
  //     );

  return (
    <div>
      <hr />
      <h1>StatusBadge.tsx</h1>
      {isActive ? <p>Active</p> : <p>Inactive</p>}
    </div>
  );
}
