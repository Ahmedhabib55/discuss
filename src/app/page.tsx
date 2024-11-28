import CreateTopicForm from "./components/topic/create-topic-form";
import TopicList from "./components/topic/topic-list";

export default function Home() {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <h3>Top topic</h3>
      </div>

      <div className="border shadow py-3 px-2">
        <CreateTopicForm />
        <h3 className="text-xl">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
