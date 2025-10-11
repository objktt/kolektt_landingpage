import { CircularLoader } from "@/components/ui/circular-loader";

// 인위적으로 지연 추가
async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function TestLoadingPage() {
  // 3초 지연
  await delay(3000);
  
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">Loading Test Page</h1>
      <p className="text-lg mb-4">
        이 페이지는 3초 지연 후에 로드됩니다. 로딩 애니메이션이 표시되어야 합니다.
      </p>
      
      <div className="mt-8 p-8 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">로딩 애니메이션 데모:</h2>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Small:</h3>
            <CircularLoader size="sm" text="KOLEKTT • " spinDuration={2} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Medium:</h3>
            <CircularLoader size="md" text="KOLEKTT • LOADING • " spinDuration={3} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Large:</h3>
            <CircularLoader size="lg" text="KOLEKTT • LOADING • " spinDuration={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
