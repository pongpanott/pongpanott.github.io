import { SITE_CONTENT } from 'common/constants';

const Signature = ({ onClick }: { onClick: () => void }) => {
    return (
        <button onClick={onClick}>
            <p className="text-lg tracking-[-0.02em]">{SITE_CONTENT.title}</p>
        </button>
    );
};

export default Signature;
