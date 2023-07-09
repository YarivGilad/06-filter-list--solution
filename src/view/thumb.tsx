interface ThumbProps {
  image_url: string;
}
export function Thumb({ image_url }: ThumbProps) {
  return (
    <div className="thumb-box">
      <img className="thumb" src={image_url} alt="profile visual" />
    </div>
  );
}
