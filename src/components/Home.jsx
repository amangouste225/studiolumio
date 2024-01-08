import myVideo from "../video/video.mp4";

export const Home = () => {
  return (
    <div className="relative min-h-svh">
      <div className="absolute h-full w-screen top-0 left-0">
        <h1 className="text-big uppercase tracking-site whitespace-nowrap leading-site align-top overflow-y-clip text-header absolute z-50 top-20">
          props
        </h1>
        <video
          autoPlay
          muted
          loop
          className="fixed w-full object-center h-full left-0 top-0 right-0 z-5 object-cover"
        >
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
