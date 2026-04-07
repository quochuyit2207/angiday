"use client";
import { Wheel } from "react-custom-roulette-r19";
import { useState } from "react";

const data = [
  { option: "Bún chả" },
  { option: "Bún bò" },
  { option: "Bún riêu" },
  { option: "Bún đậu" },
  { option: "Phở" },
  { option: "Cơm rang" },
  { option: "Cơm sườn" },
  { option: "Cơm gà" },
  { option: "Mì xào" },
  { option: "Bánh cuốn" },
  { option: "Bún cá" },
  
];

export default function CustomizeFood() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpin = () => {
    if (mustSpin) return; // Ngăn bấm liên tục khi đang quay

    const random = Math.floor(Math.random() * data.length);
    setPrizeNumber(random);
    setMustSpin(true);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    // Lấy trực tiếp kết quả từ data dựa trên prizeNumber
    const result = data[prizeNumber].option;
    alert(`Kết quả là: ${result}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={handleStopSpinning} // Chạy khi vòng quay dừng hẳn
      />
      <button 
        onClick={handleSpin} 
        disabled={mustSpin}
        style={{ marginTop: '20px', padding: '10px 20px' }}
      >
        {mustSpin ? "Đang quay..." : "Quay"}
      </button>
    </div>
  );
}