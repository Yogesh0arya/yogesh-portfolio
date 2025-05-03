import { IKImage } from "imagekitio-react";

function ImageIK({ src, className, width, height, alt }) {
  return (
    <IKImage
      urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
      path={src}
      alt={alt}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={width}
      height={height}
      transformation={[
        {
          width: width,
          height: height,
        },
      ]}
    />
  );
}

export default ImageIK;
