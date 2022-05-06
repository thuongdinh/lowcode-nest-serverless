import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  addressId?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
