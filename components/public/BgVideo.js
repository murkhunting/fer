export default function BgVideo({ grayscaleImage, colorImage, alt }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/2257010/2257010-uhd_2560_1440_24fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
