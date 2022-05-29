import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../CSS/App.css";
import { CardHeader } from '@mui/material';
import { CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import { CssBaseline } from '@mui/material';

fetch(
  `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=dj00aiZpPUZPU3h2a21KeG5pVSZzPWNvbnN1bWVyc2VjcmV0Jng9NDQ-&query=西洋絵画&genre_category_id=11561&price_from=1000&price_to=5000&results=100`,
  { mode: "cors" }
)
  .then((res) => res.json())
  .then((data) => console.log(data));

export function Items() {
  const [art, setArt] = useState([]);

  // 検索で入力できるようにするためのsetState
  const [search, setSearch] = useState("");

  // 送信機能
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(
      `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=dj00aiZpPUZPU3h2a21KeG5pVSZzPWNvbnN1bWVyc2VjcmV0Jng9NDQ-&query=${search}&genre_category_id=11561&price_from=1000&price_to=5000&results=100`,
      { mode: "cors" }
    )
      .then((res) => res.json())
      .then((data) => setArt(data.hits));

    console.log(art.length);
  };

  //いいねボタンの反転理論
  // const [isLike, setIsLike] = useState(false);

  //いいね機能
  // const handleLike = (e) => {
  //   e.preventDefault();
  //   setIsLike((prevState) => !prevState);
  //   console.log("work on");
  // };

  //検索結果を表示するmap
  const detail = art.map((item, id) => {
    return (
      <>
      <CssBaseline/>
      <Grid item xs={12} md={6} lg={4}>
        <CardActionArea>
          <Card sx={{ width:345, height:500,display: 'flex', flexDirection: 'column'}}>
            <CardHeader
            title={item.name}
            />
            <CardMedia
              component="img"
              height="250"
              image={item.image.medium}
            />
            <CardContent  sx={{ flex: 1, margin:'auto', alignItems:'' }}>
              <Stack spacing={2} direction="row" justifyContent="space-around" >
                <Button href={item.review.url}>Review</Button>
                <Button href={item.url}>Read more</Button>
                {/* <IconButton>
                <FavoriteBorderIcon
                    key={id}
                    className={`"likeButton" ${isLike && "isRed"}`}
                    onClick={handleLike}
                  />
                </IconButton> */}
              </Stack>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
      </>
    );
  });

  return (
    <>
      <form
      className="form-wrapper"
      onSubmit={handleSubmit}>
        <SearchIcon />
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          value={search}
          required
        />
      </form>
      <Typography sx={{m:10}}> 検索結果:{art.length}件</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        align='center'
      >
        {detail}
      </Grid>
    </>
  );
}

//MUI
Items.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
