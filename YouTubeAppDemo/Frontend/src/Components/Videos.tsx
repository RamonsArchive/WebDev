import { Stack, Box, Typography } from "@mui/material";
import { VideoCard, ChannelCard } from "../Imports/ComponentsImport.tsx";
import { VideoItem } from "../Types/Types.tsx";
import { ResponsiveStyleValue } from "@mui/system";

interface Props {
  videos: VideoItem[];
  direction?: ResponsiveStyleValue<
    "row" | "row-reverse" | "column" | "column-reverse"
  >;
}
const Videos = ({ videos, direction }: Props) => {
  console.log(`Videos Received?: ${videos}`);
  if (!videos?.length) {
    return (
      <Typography color="#FFF" fontSize="25px">
        "Loading..."
      </Typography>
    );
  }
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map(
        (item, index) =>
          (item.id.videoId || item.id.channelId) && (
            <Box key={index}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          )
      )}
    </Stack>
  );
};
export default Videos;
