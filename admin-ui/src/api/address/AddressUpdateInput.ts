import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";
import { UserUpdateManyWithoutAddressesInput } from "./UserUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  state?: string | null;
  users?: UserUpdateManyWithoutAddressesInput;
  zip?: number | null;
};
