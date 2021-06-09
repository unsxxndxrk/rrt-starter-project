import { Button } from "@material-ui/core";
import ErrorText from "components/ErrorText/ErrorText";
import RRTCircularProgress from "components/RRTCircularProgress/RRTCircularProgress";
import RRTSpin from "components/RRTSpin/RRTSpin";
import { Namespaces } from "i18n";
import { useTranslation } from "react-i18next";
import { User } from "types/api/users/User";
import { useFetchDataReactQueryStyles } from "./FetchDataReactQuery.styles";

type FetchDataReactQueryViewProps = {
  users: User[] | undefined;
  handleRefetchData: () => void;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
};

function FetchDataReactQueryView(props: FetchDataReactQueryViewProps) {
  const { users, handleRefetchData, isLoading, isFetching, isError } = props;
  const classes = useFetchDataReactQueryStyles();
  const { t } = useTranslation(Namespaces.Examples);

  return (
    <div className={classes.root}>
      {isLoading ? (
        <RRTCircularProgress keepHeight="469px" />
      ) : isError ? (
        <ErrorText className={classes.error} type="unexpected" />
      ) : users ? (
        <>
          <RRTSpin spinning={isFetching}>
            <div className={classes.users}>
              {users.map((user, key) => (
                <div className={classes.userTile} key={key}>
                  <div>
                    <b>{t("fetch_data_react_query.user.name")}: </b>
                    {user.name}
                  </div>
                  <div>
                    <b>{t("fetch_data_react_query.user.company")}: </b>
                    {user.company}
                  </div>
                  <div>
                    <b>{t("fetch_data_react_query.user.email")}: </b>
                    {user.email}
                  </div>
                  <div>
                    <b>{t("fetch_data_react_query.user.street")}: </b>
                    {user.street}
                  </div>
                </div>
              ))}
            </div>
          </RRTSpin>
          <Button
            disabled={isFetching}
            color="secondary"
            variant="contained"
            className={classes.button}
            onClick={handleRefetchData}
          >
            {t("fetch_data_react_query.buttons.refetch")}
          </Button>
        </>
      ) : null}
    </div>
  );
}

export default FetchDataReactQueryView;
