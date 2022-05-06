import { Customer } from "../customer/Customer";
import { User } from "../user/User";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  state: string | null;
  updatedAt: Date;
  users?: Array<User>;
  zip: number | null;
};
