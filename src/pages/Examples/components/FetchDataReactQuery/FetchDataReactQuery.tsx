import { useMemo } from "react";
import { useQuery, useQueryClient } from "react-query";
import { fetchUsers } from "utils/api/queryFns";
import FetchDataReactQueryView from "./FetchDataReactQueryView";

function FetchDataReactQuery() {
  const queryClient = useQueryClient();
  const usersQuery = useQuery(fetchUsers.key, fetchUsers.fn);
  const users = useMemo(() => usersQuery.data?.data.payload, [
    usersQuery.data?.data.payload,
  ]);

  const handleRefetchData = () => {
    queryClient.refetchQueries(fetchUsers.key);
  };

  const isLoading = usersQuery.isLoading;
  const isFetching = usersQuery.isFetching;
  const isError = usersQuery.isError;

  return (
    <FetchDataReactQueryView
      users={users}
      handleRefetchData={handleRefetchData}
      isLoading={isLoading}
      isFetching={isFetching}
      isError={isError}
    />
  );
}

export default FetchDataReactQuery;
