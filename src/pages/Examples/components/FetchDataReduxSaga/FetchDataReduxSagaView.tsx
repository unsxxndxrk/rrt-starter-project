import { Button } from "@material-ui/core";
import ErrorText from "components/ErrorText/ErrorText";
import RRTSpin from "components/RRTSpin/RRTSpin";
import { Namespaces } from "i18n";
import { useTranslation } from "react-i18next";
import { TodoState } from "store/todo/types";
import { useFetchDataReduxSagaStyles } from "./FetchDataReduxSaga.styles";

type FetchDataReduxSagaViewProps = {
  todoState: TodoState;
  handleFetchData: () => void;
};

function FetchDataReduxSagaView(props: FetchDataReduxSagaViewProps) {
  const { todoState, handleFetchData } = props;
  const { todo } = todoState;
  const { data, fetching, error } = todo;
  const { t } = useTranslation([Namespaces.Examples, Namespaces.Common]);
  const classes = useFetchDataReduxSagaStyles();

  return (
    <RRTSpin spinning={fetching}>
      <div className={classes.root}>
        {!data && !error ? (
          <div className={classes.empty}>
            {t("fetch_data_redux_saga.empty")}
          </div>
        ) : error ? (
          <ErrorText type="unexpected" />
        ) : data ? (
          <div className={classes.todo}>
            {t("fetch_data_redux_saga.todo")}&nbsp;
            <b>{data.name}</b>
          </div>
        ) : null}
      </div>
      <Button
        disabled={fetching}
        color="secondary"
        variant="contained"
        className={classes.btn}
        onClick={handleFetchData}
      >
        {!data
          ? t("fetch_data_redux_saga.buttons.fetch")
          : t("fetch_data_redux_saga.buttons.refetch")}
      </Button>
    </RRTSpin>
  );
}

export default FetchDataReduxSagaView;
