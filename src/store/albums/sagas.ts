import { AxiosResponse } from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { AlbumsApiService } from "services/AlbumsApiService";
import { AlbumsResponsePayload } from "types/api/albums/AlbumsResponsePayload";
import { ApiClientError } from "types/api/ApiClientError";
import { selectApiError } from "utils/selectApiError";
import { albumsActions } from "./actions";
import { AlbumsActions } from "./types";
import { prepareAlbumsStoreData } from "./utils";

export function* fetchAlbumsData() {
  try {
    const result: AxiosResponse<AlbumsResponsePayload> = yield call(
      AlbumsApiService.fetchAlbums,
    );
    yield put(
      albumsActions.fetchDataSuccess(prepareAlbumsStoreData(result.data)),
    );
  } catch (e) {
    console.error(e);
    const error = e as ApiClientError;
    yield put(
      albumsActions.fetchDataError({
        message: selectApiError(error.response?.data.message),
      }),
    );
  }
}

export function* albumsSaga() {
  yield takeLatest(AlbumsActions.FETCH_ALBUMS_REQUEST, fetchAlbumsData);
}
