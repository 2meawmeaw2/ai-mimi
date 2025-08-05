import Image from "next/image";

export default function MyComponent() {
  return (
    <div>
      <Image
        src="/images/logo.png" // or "https://example.com/image.jpg"
        alt="Website Logo"
        width={300} // required
        height={200} // required
        priority // optional: for above-the-fold images
      />
    </div>
  );
}
