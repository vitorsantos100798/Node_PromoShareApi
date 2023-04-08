type CreateUserType = {
  email: string;
  password: string;
  city: string;
};
type LoginType = {
  email: string;
  password: string;
};

export { CreateUserType, LoginType };
