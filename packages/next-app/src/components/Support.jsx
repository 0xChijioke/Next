// import React from "react";
// import { Button, Row, Col } from "antd";
// import { Faucet, Ramp, GasGauge } from ".";
// import { NETWORKS } from "../constants";
// import { Web3Consumer } from "../helpers/Web3Context";



// function Support({ web3 }) {
//   return (
//     <>
//       <div style={{ position: "absolute", textAlign: "right", right: 10, top: 50, padding: 10 }}>
//         <div>{web3.faucetHint}</div>
//       </div>

//       {/* 🗺 Extra UI like gas price, eth price, faucet, and support: */}
//       <div style={{ position: "fixed", textAlign: "left", left: 0, bottom: 20, padding: 10 }}>
//         <Row align="middle" gutter={[4, 4]}>
//           <Col span={8}>
//             <Ramp price={price} address={address} networks={NETWORKS} />
//           </Col>

//           <Col span={8} style={{ textAlign: "center", opacity: 0.8 }}>
//             <GasGauge gasPrice={gasPrice} />
//           </Col>
//           <Col span={8} style={{ textAlign: "center", opacity: 1 }}>
//             <Button
//               onClick={() => {
//                 window.open("https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA");
//               }}
//               size="large"
//               shape="round"
//             >
//               <span style={{ marginRight: 8 }} role="img" aria-label="support">
//                 💬
//               </span>
//               Support
//             </Button>
//           </Col>
//         </Row>

//         <Row align="middle" gutter={[4, 4]}>
//           <Col span={24}>
//             {
//               /*  if the local provider has a signer, let's show the faucet:  */
//               faucetAvailable ? (
//                 <Faucet localProvider={localProvider} price={price} ensProvider={mainnetProvider} />
//               ) : (
//                 ""
//               )
//             }
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// }

// export default Web3Consumer(Support);