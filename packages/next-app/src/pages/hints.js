import dynamic from 'next/dynamic';
const Hints = dynamic(() => import('../views/Hints'), { ssr: false });

export default () => {
  return (
    <>
      <Hints />
    </>
  );
};