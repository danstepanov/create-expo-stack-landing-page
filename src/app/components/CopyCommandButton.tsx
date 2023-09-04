import { useCopyToClipboard } from "../utilities/useCopyToClipboard";

const CopyCommandButton = () => {
    const [value, copy, setDelayedCopyText] = useCopyToClipboard();

	function toggleIcon() {
		setDelayedCopyText()
		copy('npx create-expo-stack@latest')
	}

    return (
        <div className="w-full flex-1 flex flex-col items-center justify-center">
            <div className="flex my-8">
                <button
                    onClick={toggleIcon}
                    className="flex cursor-pointer flex-row items-center gap-2 rounded-md border border-white bg-white px-2 py-2 text-sm transition-colors duration-300 hover:border-red-500/50 hover:bg-red-500/20 md:px-3 md:py-3 md:text-lg lg:px-5 lg:py-4 lg:text-xl hover:text-white"
                    title="Copy the command to get started"
                    id="command"
                >
                    <code id="command-text">npx create-expo-stack@latest</code>
                    {!value ? (
                        <svg
                            id="copy-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    ) :
                    (
                        <svg
                            id="check-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    )}
                </button>
            </div>
        </div>
    )
}

export default CopyCommandButton;