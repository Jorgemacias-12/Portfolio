import { ImageOff, RefreshCw } from "lucide-react";

interface Props {
  onRetry?: () => void;
  message?: string;
  retryText?: string;
}

export const ImageErrorState = ({
  onRetry,
  message = "Error al cargar la imagen",
  retryText = "Reintentar",
}: Props) => {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm rounded-md"
      role="alert"
    >
      <ImageOff className="w-16 h-16 text-red-400 mb-3" />
      <p className="text-white text-center px-4 mb-4">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          {retryText}
        </button>
      )}
    </div>
  );
};
