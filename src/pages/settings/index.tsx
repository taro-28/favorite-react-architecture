import { ReactElement } from "react";
import GlobalLayout from "../layout";
import { NextPageWithLayout } from "../_app";

const SettingsPage: NextPageWithLayout = () => {
  return <h1>Settings</h1>;
};

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return <GlobalLayout>{page}</GlobalLayout>;
};

export default SettingsPage;
