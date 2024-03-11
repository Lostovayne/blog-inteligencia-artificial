"use client";
import { useEffect, useState } from "react";
import YoutubePlayer from "react-player/youtube";

interface Props {
  video: string;
}

const Video = ({ video }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null
    

  return (
    <div className="my-8 xl:px-10 aspect-video">
      <YoutubePlayer url={video} width="100%" height="100%" controls />
    </div>
  );
};
export default Video;
