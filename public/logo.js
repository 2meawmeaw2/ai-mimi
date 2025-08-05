export default function HomePage() {
  return (
    <div>
      {/* Other content */}
      <Image
        src="/favicon.jpg" // Path to your image in the public folder
        alt="Description of the main image" // Important for accessibility
        width={638} // Specify the intrinsic width of the image
        height={638} // Specify the intrinsic height of the image
        priority // Optional: Prioritize loading for LCP images
      />
      {/* Other content */}
    </div>
  );
}
