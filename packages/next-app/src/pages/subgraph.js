import dynamic from 'next/dynamic';
const Subgraph = dynamic(() => import('../views/Subgraph'), { ssr: false });

export default () => {
  return (
    <>
      <Subgraph />
    </>
  );
};