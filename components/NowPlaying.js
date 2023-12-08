import React from "react";
import useSWR from "swr";
import AnimatedLink from "./design/AnimatedLink";

const fetcher = (url) => fetch(url).then((r) => r.json());

const NowPlaying = () => {
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <div>
      <p className="flex gap-3 w-fit text-lg items-center">
        {data?.isPlaying ? (
          <AnimatedLink href={data.songUrl} target="_blank" rel="noopener noreferrer">
            <div className="flex w-fit items-center gap-3">
              <img src={data.albumImageUrl} width={30} height={30} className="rounded-full" alt={data.title} />
              <span className="!text-white">{data.title}</span>
            </div>
          </AnimatedLink>
        ) : (
          <>
            <img src="/spotify.png" width={30} height={30} className="rounded-full" alt="Not Listening - Spotify" />
            <span className="!text-white">Not Listening - Spotify</span>
          </>
        )}
      </p>
    </div>
  );
};

export default NowPlaying;
