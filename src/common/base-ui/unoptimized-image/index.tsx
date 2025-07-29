import { BaseComponentProps } from 'common/types/base-component';
import Image, { ImageProps } from 'next/image';
import React from 'react';

const UnoptimizedImage = (props: ImageProps) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image {...props} quality={100} unoptimized />;
};

export default UnoptimizedImage;
