import { EntityId } from "types/common/EntityId";
import {
  StoreDataStatus,
  StoreDataStatusError,
} from "types/store/StoreDataStatus";

export enum AlbumsActions {
  FETCH_ALBUMS_REQUEST = "albums/FETCH_ALBUMS_REQUEST",
  FETCH_ALBUMS_SUCCESS = "albums/FETCH_ALBUMS_SUCCESS",
  FETCH_ALBUMS_ERROR = "albums/FETCH_ALBUMS_ERROR",
}

export type AlbumsState = {
  albums: StoreDataStatus & {
    data: AlbumsStoreData | null;
  };
};

export type AlbumsStoreData = AlbumStoreData[];

export type AlbumStoreData = {
  userId: EntityId;
  id: EntityId;
  title: string;
};

export type FetchAlbumsDataRequestAction = {
  type: AlbumsActions.FETCH_ALBUMS_REQUEST;
};

export type FetchAlbumsDataSuccessAction = {
  type: AlbumsActions.FETCH_ALBUMS_SUCCESS;
  payload: AlbumsStoreData;
};

export type FetchAlbumsDataErrorAction = {
  type: AlbumsActions.FETCH_ALBUMS_ERROR;
  payload: StoreDataStatusError;
};

export type AlbumsActionTypes =
  | FetchAlbumsDataRequestAction
  | FetchAlbumsDataSuccessAction
  | FetchAlbumsDataErrorAction;
