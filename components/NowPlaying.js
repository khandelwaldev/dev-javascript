import React from "react";
import useSWR from "swr";
import { SpotifyLogo } from "./Icons";

const fetcher = (url) => fetch(url).then((r) => r.json());

const NowPlaying = () => {
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <div>
       <p className="flex gap-3 w-fit text-lg items-center">
        <SpotifyLogo className="bg-[#4CAF50] rounded-full text-black w-6 h-6" />
        {data?.isPlaying ? (
          <a href={data.songUrl} target="_blank" rel="noopener noreferrer" className="link !text-white">
            {data.title}
          </a>
        ) : (
          "Not Listening - Spotify"
        )}
      </p>
    </div>
  );
};

export default NowPlaying;