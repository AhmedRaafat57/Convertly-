import { File, FileMusic, FileText, Image, MonitorPlay } from "lucide-react";

export default function fileToIcon(file_type: any): any {
  if (file_type.includes("video")) return <MonitorPlay />;
  if (file_type.includes("audio")) return <FileMusic />;
  if (file_type.includes("text")) return <FileText />;
  if (file_type.includes("image")) return <Image />;
  else return <File />;
}
