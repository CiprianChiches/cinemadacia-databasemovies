import React from "react";
import { useAppContext } from "../../context";

import Cards from "../../components/Cards";
import ConditionalWrapper from "../../components/ConditionalWrapper";
import Layout from "../../UI/Layout";
import Button from "../../UI/Button";

const Favorite = () => {
  const { favorites, handleClearFavorites } = useAppContext();

  return (
    <Layout title="Favorite">
      <ConditionalWrapper
        isCondition={!favorites?.length}
        text="Favorite list is empty"
      >
        <Cards title="Favorite Movies" data={favorites} />
        <Button center={true} onClick={handleClearFavorites}>
          Clear
        </Button>
      </ConditionalWrapper>
    </Layout>
  );
};

export default Favorite;
