import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type UserCreateInput = {
  address?: AddressWhereUniqueInput | null;
  balance?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
