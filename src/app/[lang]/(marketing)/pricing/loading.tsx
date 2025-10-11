import { CircularLoader } from "@/components/ui/circular-loader";

export default function Loading() {
  return (
    <div className="flex w-full flex-col items-center justify-center min-h-[600px] py-8 bg-white">
      <div className="flex flex-col items-center gap-6">
        <CircularLoader 
          size="lg" 
          text="KOLEKTT • LOADING • " 
          spinDuration={3} 
          className="drop-shadow-lg"
          noSSR={true}
        />
        <div className="text-center">
          <p className="text-sm text-gray-500 animate-pulse">Loading pricing...</p>
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
