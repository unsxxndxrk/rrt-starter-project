import { apiEndpoints } from "constants/apiEndpoints";
import { AlbumsResponsePayload } from "types/api/albums/AlbumsResponsePayload";
import { API } from "utils/http-client";

const { albums } = apiEndpoints;

class AlbumsApiService {
  fetchAlbums = () => {
    return API.get<AlbumsResponsePayload>(albums.fetchAlbums);
  };
}

const AlbumsApiServiceInstanse = new AlbumsApiService();

export { AlbumsApiServiceInstanse as AlbumsApiService };
