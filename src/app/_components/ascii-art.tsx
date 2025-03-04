import fs from "fs";
import path from "path";

type Props = {
  fileName: string;
};

const AsciiArt = ({ fileName }: Props) => {
  const dataPath = path.join(process.cwd(), "src", "app", `${fileName}.txt`);
  const data = fs.readFileSync(dataPath, "utf8");
  return (
    <div>
      <pre className="leading-[1.2] tracking-[0.6] text-[8px]">{data}</pre>
    </div>
  );
};

export default AsciiArt;
