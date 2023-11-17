import React from "react";
import useSWR from "swr";
import { SpotifyLogo } from "./Icons";
import AnimatedLink from "./design/AnimatedLink";

const fetcher = (url) => fetch(url).then((r) => r.json());

const NowPlaying = () => {
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <div>
       <p className="flex gap-3 w-fit text-lg items-center">
        <SpotifyLogo className="bg-[#4CAF50] rounded-full text-black w-6 h-6" />
        {data?.isPlaying ? (
          <AnimatedLink href={data.songUrl} target="_blank" rel="noopener noreferrer">
            <span  className="!text-white">{data.title}</span>
          </AnimatedLink>
        ) : (
          "Not Listening - Spotify"
        )}
      </p>
    </div>
  );
};

export default NowPlaying;