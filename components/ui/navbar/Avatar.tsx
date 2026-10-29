import Image from 'next/image';

const Avatar = () => {
  return (
    <Image
      width={40}
      height={40}
      src="/s_logo.png"
      alt="Avata"
      className="rounded-full cursor-pointer object-cover transition-all duration-300 hover:scale-103 hover:shadow-[0_0_10px_var(--primary-100)]"
    />
  );
};

export default Avatar;
