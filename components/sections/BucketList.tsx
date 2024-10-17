import { useState } from "react";
import Image from "next/image";
import messageImage from "@/app/assets/images/app_messages.jpg";
import { Check } from "lucide-react";
import notionImage from "@/app/assets/images/app_notion.jpg";
import xImage from "@/app/assets/images/app_x.jpg";
import instagramImage from "@/app/assets/images/instagram.png";
import telegramImage from "@/app/assets/images/telegram_3536661.png";


export default function BucketList() {
  const [bucketList, setBucketList] = useState([
    { id: 1, text: "Live in Japan", completed: false },
    { id: 2, text: "Hiking in Mount Pulag", completed: false },
    { id: 3, text: "Watch the One Piece Anime", completed: false },
    { id: 4, text: "Go to New Zealand & Antarctica", completed: false },
    { id: 5, text: "Hiking in Mount Cabanbanan", completed: true },
  ]);

  const toggleItem = (id: number) => {
    setBucketList(
      bucketList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="mx-auto space-y-8">
      <div className="lg:flex lg:justify-between">
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-8">apps i like using</h2>
          <div className="flex flex-wrap gap-8">
            <Image
              className="rounded-lg"
              src={messageImage}
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <Image
              className="rounded-lg bg-slate-50"
              src={notionImage}
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <Image
              className="rounded-lg"
              src={xImage}
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <Image
              className="rounded-lg"
              src={instagramImage}
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <Image
              className="rounded-lg"
              src={telegramImage}
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">bucket list</h2>
          <ul className="space-y-2">
            {bucketList.map((item) => (
              <li
                key={item.id}
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <div
                  className={`w-4 h-4 border rounded flex items-center justify-center ${
                    item.completed ? "bg-black" : "border-gray-300"
                  }`}
                >
                  {item.completed && <Check className="w-3 h-3 text-white" />}
                </div>
                <span
                  className={item.completed ? "line-through text-gray-500" : ""}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
