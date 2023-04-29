const Signature = ({ onClick }: { onClick: () => void }) => {
    return (
        <button onClick={onClick}>
            <p className="text-lg tracking-[-0.02em]">Pongpanott.</p>
        </button>
    );
};

export default Signature;
