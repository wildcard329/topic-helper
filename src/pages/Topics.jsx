import TOPICS from "../assets/mocks/mockTopics.json";
import { AppButton } from "../components/button";

const Topics = () => 
  <div id="topics-wrapper" className="page-wrapper">
    <ul className="topics-list">
      {TOPICS?.map((topic) => <li key={topic.id}><AppButton btnClass={"list-btn"} btnVar={"outlined"} btnColor={"primary"}><a href={`${topic.title}`}>{topic.title}</a></AppButton></li>)}
    </ul>
    <div className="page-footer">
      <AppButton>Add Topic</AppButton>
    </div>
  </div>

export default Topics;
