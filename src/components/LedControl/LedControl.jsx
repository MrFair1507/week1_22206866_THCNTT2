//tạo một component LedControl chứa hai Button là ON và Off

import React from "react";
import './LedControl.css'
function LedControl({onLedChange}) {
  //nhận props onLedChange được nhận từ Component cha là App
  return (
    <div>
      <div className="led__wrapper">
        <button className="on__btn" onClick={() => onLedChange("ON")}>
          ON
        </button>
        {/* mỗi khi user nhấn nút 'ON', hàm onLedChange(nhưng thiệc ra là hàm handleLedChange) sẽ goi giá trị là 'ON', Từ đấy cập nhật trạng thái mới cho LED */}
        <button className="off__btn" onClick={() => onLedChange("OFF")}>
          OFF
        </button>
        {/* tương tự vs OFF */}
      </div>
    </div>
  );
}

export default LedControl;
