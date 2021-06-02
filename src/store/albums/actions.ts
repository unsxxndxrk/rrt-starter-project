import { StoreDataStatusError } from "types/store/StoreDataStatus";
import { AlbumsActions, AlbumsActionTypes, AlbumsStoreData } from "./types";

const fetchAlbumsDataRequestAction = (): AlbumsActionTypes => ({
  type: AlbumsActions.FETCH_ALBUMS_REQUEST,
});

const fetchAlbumsDataSuccessAction = (
  data: AlbumsStoreData,
): AlbumsActionTypes => ({
  type: AlbumsActions.FETCH_ALBUMS_SUCCESS,
  payload: data,
});

const fetchAlbumsDataErrorAction = (
  error: StoreDataStatusError,
): AlbumsActionTypes => ({
  type: AlbumsActions.FETCH_ALBUMS_ERROR,
  payload: error,
});

export const albumsActions = {
  fetchDataRequest: fetchAlbumsDataRequestAction,
  fetchDataSuccess: fetchAlbumsDataSuccessAction,
  fetchDataError: fetchAlbumsDataErrorAction,
};
