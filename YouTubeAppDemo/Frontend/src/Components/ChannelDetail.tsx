import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { VideoItem } from "../Types/Types";
import { Box } from "@mui/material";
import { fetchFromAPI } from "../assets/api";
import { ChannelCard, Videos } from "../Imports/ComponentsImport";

const ChannelDetail = () => {
  const { id } = useParams();
  /*const [channelId, setChannelId] = useState<string>(
    channelDetail?.snippet?.channelId
  );*/
  const [details, setDetails] = useState<any>(null);
  const [videos, setVideos] = useState<VideoItem[]>([]);

  console.log("this is the channelId " + id);
  console.log(details);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setDetails(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);
  console.log(videos);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,46,121,1) 27%, rgba(186,0,255,1) 72%)",
            zIndex: 10,
            height: "300px",
          }}
        ></div>
        <ChannelCard channelDetail={details} marginTop="-110px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { md: "50px", sm: "100px" } }} />
        <Videos videos={videos}></Videos>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
