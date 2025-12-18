import clsx from "clsx";

interface Props {
  className?: string;
  showSpinner?: boolean;
  shimmer?: boolean;
}

export const ImageSkeleton = ({ className, shimmer, showSpinner }: Props) => {
  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-md",
        className
      )}
      role="status"
      aria-label="Cargando imagen..."
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 animate-pulse" />

      {shimmer && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          style={{
            animation: "shimmer 2s infinite",
            backgroundSize: "200% 100%",
          }}
        />
      )}

      {showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-12 h-12 border-3 border-white/20 rounded-full" />
            <div className="absolute top-0 left-0 w-12 h-12 border-3 border-transparent border-t-white rounded-full animate-spin" />
          </div>
        </div>
      )}
    </div>
  );
};
