import {useUserById} from "@/hooks/api/useUserInfo";
import {useRouteParam} from "@/hooks/route/useRouteParams";
import React from "react";

const Anunciante = () => {
  const userId = useRouteParam("id");
  const {data: user, isLoading, error} = useUserById(userId);
  return (
    <div className="">
      <section></section>
    </div>
  );
};

export default Anunciante;
