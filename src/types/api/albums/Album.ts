import { EntityId } from "types/common/EntityId";

export type Album = {
  userId: EntityId;
  id: EntityId;
  title: string;
};
