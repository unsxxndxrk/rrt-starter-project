import { AlbumsResponsePayload } from "types/api/albums/AlbumsResponsePayload";
import { AlbumsStoreData } from "./types";

export const prepareAlbumsStoreData = (
  response: AlbumsResponsePayload,
): AlbumsStoreData =>
  response.map((a) => ({
    id: a.id,
    userId: a.userId,
    title: a.title,
  }));
