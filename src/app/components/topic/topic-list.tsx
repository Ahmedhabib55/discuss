import { db } from "@/db";
import React from "react";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

import paths from "@/paths";

async function TopicList() {
  const topics = await db.topic.findMany();
  const renderTopicList = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShowPath(topic.slug)}>
          <Chip variant="shadow" color="warning" className="text-white">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-col gap-2">{renderTopicList}</div>;
}

export default TopicList;
