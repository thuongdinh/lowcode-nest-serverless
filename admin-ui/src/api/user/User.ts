import { Address } from "../address/Address";

export type User = {
  address?: Address | null;
  balance: number | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
