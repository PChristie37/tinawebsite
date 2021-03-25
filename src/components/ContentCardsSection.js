import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from "next/link";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 160,
  },
}));

function ContentCardsSection(props) {
  const classes = useStyles();

  const items = [
    {
      image: "https://i.etsystatic.com/28616792/r/il/02905a/3014356051/il_1588xN.3014356051_f4zi.jpg",
      title: "Mid Century Moon",
      url: "https://www.etsy.com/listing/973833876/mid-century-modern-art-decor-full-moon?ref=shop_home_active_1",
    },
    {
      image: "https://i.etsystatic.com/28616792/r/il/95a44d/3014362999/il_1588xN.3014362999_bmfm.jpg",
      title: "Mid Century Sun",
      url: "https://www.etsy.com/listing/973834964/mid-century-modern-art-decor-modern-sun?ref=shop_home_active_2",
    },
    {
      image: "https://i.etsystatic.com/28616792/r/il/70dbeb/3014387675/il_1588xN.3014387675_apge.jpg",
      title: "Crescent Moon",
      url: "https://www.etsy.com/listing/987801255/mid-century-modern-moon-decor-modern?ref=shop_home_active_2",
    },
    {
      image: "https://i.etsystatic.com/28616792/r/il/408d63/3014380805/il_1588xN.3014380805_ctbs.jpg",
      title: "Moon and Stars",
      url: "https://www.etsy.com/listing/973840138/mid-century-crescent-moon-art-decor?ref=shop_home_active_3",
    },
    // {
    //   image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
    //   title: "Faucibus turpis in",
    //   body:
    //     "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
    //   url: "/post/ballons",
    // },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} justify="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} md={6} lg={3} key={index}>
              <Card>
                <Link href={item.url} passHref={true}>
                  <CardActionArea component="a">
                    <CardMedia
                      image={item.image}
                      title={item.name}
                      className={classes.media}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom={true}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default ContentCardsSection;
