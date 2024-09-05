const DisplayToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Collapse' : 'Expand'}
            </button>
            {isOpen && (
                <div>
                    {/* Content to be collapsed/expanded */}
                    This content is now visible!
                </div>
            )}
        </div>
    );
}

export default DisplayToggle;