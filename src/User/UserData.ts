export type UserType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const users: UserType[] = [
  {
    id: 1,
    name: "Junayed Hasan",
    email: "junayed@example.com",
    isActive: true,
  },
  {
    id: 2,
    name: "Rakib Hasan",
    email: "rakib@example.com",
    isActive: false,
  },
  {
    id: 3,
    name: "Sakib Ahmed",
    email: "sakib@example.com",
    isActive: true,
  },
  {
    id: 4,
    name: "Nayeem Islam",
    email: "nayeem@example.com",
    isActive: false,
  },
];

export default users;