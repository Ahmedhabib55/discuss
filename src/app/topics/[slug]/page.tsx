import PostCreateForm from "@/app/components/posts/post-create-form";
import React from "react";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

const TopicShowPage = ({ params }: TopicShowPageProps) => {
  const { slug } = params;

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3">
        <h3>{slug}</h3>
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
};

export default TopicShowPage;
