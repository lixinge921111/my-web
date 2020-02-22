import React, { useState, useEffect } from "react";
import "../styles/hobby.css";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

export const BLIZZARD_CLIENT_ID = "1c893a91be584770b17cad35bb19d529";
export const BLIZZARD_CLIENT_SECRET = "M29a9pQt5Pj6KVNxfdzzfdzlyhu073f7";

type Card = {
  id: number;
  name: string;
  image: string;
};

const HearthstonePage = () => {
  const blizzard = require("blizzard.js").initialize({
    key: BLIZZARD_CLIENT_ID,
    secret: BLIZZARD_CLIENT_SECRET,
    origin: "eu",
    locale: "en_EU"
  });

  const [items, setItems] = useState<Card[] | null>([]);

  const classes = useStyles();

  useEffect(() => {
    async function fetchItem() {
      try {
        await blizzard.getApplicationToken().then(response => {
          blizzard.defaults.token = response.data.access_token;
        });
        const item = await blizzard.hs.deck({
          code:
            "AAECAaIHCrICrwSggAOSlwPBrgOCsQPjtAPDtgOftwPLwAMKtAHtAs0DiAePlwP1pwO5rgP+rgOqrwPOrwMA"
        });
        setItems(item.data.cards);
      } catch (err) {
        console.log(err);
      }
    }

    fetchItem();
  }, []);

  return (
    <div className="game">
      <h2>My Legendary Hearthstone Game Deck</h2>
      <Grid container spacing={4}>
        {items?.map(item => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <img src={item.image} alt={item.name} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    paddingLeft: "15px",
    paddingRight: "15px"
  }
}));

export default HearthstonePage;
