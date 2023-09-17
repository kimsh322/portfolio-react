import { PiFinnTheHumanBold } from "react-icons/pi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export interface InfoContent {
  icon: JSX.Element;
  title: string;
  content: string;
}

const infoContents: InfoContent[] = [
  { icon: <PiFinnTheHumanBold />, title: "이름", content: "김수현" },
  { icon: <AiOutlineMail />, title: "이메일", content: "sleepygeon@gmail.com" },
  { icon: <AiOutlinePhone />, title: "전화번호", content: "010-9063-2429" },
];

export default infoContents;
