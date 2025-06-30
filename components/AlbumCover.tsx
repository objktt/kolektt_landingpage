import Image from 'next/image';

interface AlbumCoverProps {
  src: string;   // 원본 이미지 경로
  thumb?: string; // 저용량 썸네일 경로 (사용 안함)
  alt: string;
  className?: string;
  sizes?: string; // 이미지 sizes 속성 (예: '40px', '192px', '100vw')
  priority?: boolean; // fold 내 주요 이미지는 true
  loading?: 'eager' | 'lazy'; // 명시적 로딩 전략
}

const AlbumCover: React.FC<AlbumCoverProps> = ({
  src,
  alt,
  className,
  sizes = '40px',
  priority = false,
  loading = 'lazy',
}) => {
  return (
    <div
      className={`relative w-10 h-10 rounded-lg overflow-hidden ${className ?? ''}`}
      style={{ isolation: 'isolate' }}
    >
      {/* 블랙 오버레이: 항상 z-1, 이미지 아래 */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'rgba(0,0,0,0.4)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* 원본 이미지: 항상 z-2, 오버레이 위 */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover absolute"
        style={{ opacity: 1, zIndex: 2 }}
        draggable={false}
        sizes={sizes}
        quality={90}
        loading={loading}
        priority={priority}
      />
    </div>
  );
};

export default AlbumCover; 