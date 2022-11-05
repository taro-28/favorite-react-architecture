import { ReactElement } from "react";
import GlobalLayout from "../layout";
import { NextPageWithLayout } from "../_app";
import UsersLayout from "./layout";

const UsersPage: NextPageWithLayout = () => {
  return <></>;
};

UsersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <GlobalLayout>
      <UsersLayout>{page}</UsersLayout>
    </GlobalLayout>
  );
};

export default UsersPage;
