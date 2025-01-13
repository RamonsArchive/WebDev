import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../assets/Constants.tsx";
import { CheckCircle } from "@mui/icons-material";

interface Props {
  channelDetail: any;
  marginTop?: string;
}

const ChannelCard = ({ channelDetail, marginTop }: Props) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", md: "320px" },
        heigth: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link
        to={
          `/channel/${channelDetail?.snippet?.channelId}` ||
          `/channel/${channelDetail?.id}` // if passed a channelDetail from fetchFromAPI
        }
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#FFF",
          }}
        >
          <CardMedia
            component="img"
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6" fontWeight="bold">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ color: "gray", ml: "5px", fontSize: 14 }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
