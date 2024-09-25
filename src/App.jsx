import { useState } from "react";
import "./App.css";
import LedControl from "./components/LedControl/LedControl";

function App() {
  const [ledStatus, setLedStatus] = useState("OFF");
  // tạo hook useState để tạo state LedStatus biểu thị cho trạng thái của Led (với giá trị ban đầu là 'OFF')
  //setLedStatus là function để cập nhật trạng thái cho state

  const handleLedChange = (status) => {
    setLedStatus(status);
  };
  //viết một hàm handleChange nhằm cập nhật trạng thái mới cho state
  //status là một giá trị chỉ trạng thái của Led, truyền từ Component con LedControl
  //khi user nhấn ON thì status sẽ là "ON" và ngược lại
  //sau khi hàm setLedStatus được gọi thì React sẽ tự động render lại để hiển thị trạng thái mới cho Led
  return (
    <div className="container">
      <h1>ĐIỀU KHIỂN ĐÈN LED</h1>
      <p>Led status: {ledStatus}</p>

      <LedControl onLedChange={handleLedChange} />
      {/* truyền props(onLedChange) từ một component cha(App) xuống component con(Ledcontrol) */}

      {/* <Sidebar />
      <MainContents /> */}
    </div>
  );
}

export default App;
