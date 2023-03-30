import Image from "next/image";
import { icons } from "assets/images";

interface Props {
  src: string;
  alt?: any;
  onClick?: any;
  width?: number;
  height?: number;
  layout?: any;
  objectFit?: any;
  className?: string;
  classNameImage?: any;
}

const Icon = (props: Props) => {
  const {
    src,
    alt,
    width,
    height,
    onClick,
    layout,
    objectFit,
    className,
    classNameImage
  } = props;

  return (
    <div className={`${className}`}>
      <Image
        className={`${classNameImage}`}
        alt={alt}
        src={icons[src]}
        width={width}
        height={height}
        onClick={onClick}
        objectFit={objectFit}
        layout={layout}
      />
    </div>
  );
};

export { Icon };
