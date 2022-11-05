import { ReactElement } from "react";
import { GlobalLayout } from "./layout";
import { NextPageWithLayout } from "./_app";

const DashboardPage: NextPageWithLayout = () => {
  return <h1>Dashboard</h1>;
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <GlobalLayout>{page}</GlobalLayout>;
};

export default DashboardPage;
