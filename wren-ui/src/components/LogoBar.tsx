import Image from 'next/image';

export default function LogoBar() {
  return (
    <Image
      src="/images/logo-white.png"
      alt="FindUP Analise"
      className="w-full"
      style={{ width: '100%' }}
      width={125}
      height={30}
    />
  );
}
