import dynamic from 'next/dynamic';
const ExampleUI = dynamic(() => import('../views/ExampleUI'), { ssr: false });

export default () => {
  return (
    <>
      <ExampleUI />
    </>
  );
};