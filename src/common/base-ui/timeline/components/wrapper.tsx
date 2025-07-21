import React from 'react';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="pt-4 w-[116px] shrink-0">{children}</div>;
};

export default Wrapper;
