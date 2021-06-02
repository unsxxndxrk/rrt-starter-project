import { EntityId } from "types/common/EntityId";

export type User = {
  id: EntityId;
  name: string;
  username: string;
  email: string;
  city: string;
  street: string;
  zipcode: string;
  company: string;
};
