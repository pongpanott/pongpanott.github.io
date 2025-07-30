import Image, { ImageProps } from 'next/image';
import React from 'react';

const UnoptimizedImage = (props: ImageProps) => {
    return <Image {...props} quality={100} unoptimized />;
};

export default UnoptimizedImage;
