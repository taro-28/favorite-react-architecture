import { FC, memo } from "react";

import { UserCreateFormPresenter } from "./presenter";
type Props = {};

/**
 *
 */
export const UserCreateFormContainer: FC<Props> = memo(({}) => {
  return (
    <>
      <form onSubmit={() => console.log("hoge")}>
        <UserCreateFormPresenter />
      </form>
    </>
  );
});
