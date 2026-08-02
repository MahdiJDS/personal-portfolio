export default function Loader() {
  return (
    <div
      className="
        flex
        min-h-[40vh]
        w-full
        items-center
        justify-center
        bg-transparent
      "
      role="status"
      aria-label="Loading"
    >
      <div className="relative flex h-16 w-16 items-center justify-center">
        {/* Outer spinner */}
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            rounded-full
            border-4
            border-gray-200
            border-t-blue-600
            animate-spin
            dark:border-gray-700
            dark:border-t-blue-400
          "
        />

        {/* Inner pulse */}
        <div
          aria-hidden="true"
          className="
            h-5
            w-5
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            animate-pulse
            dark:from-blue-400
            dark:to-purple-400
          "
        />
      </div>

      <span className="sr-only">Loading content...</span>
    </div>
  );
}