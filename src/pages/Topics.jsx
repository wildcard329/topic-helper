import TOPICS from "../assets/mocks/mockTopics.json";
import { AppButton } from "../components/button";

const Topics = () => 
  <div id="topics-wrapper" className="page-wrapper">
    <ul className="topics-list">
      {TOPICS?.map((topic) => <li key={topic.id}><a href={`${topic.title}`}><AppButton btnClass={"list-btn"} btnVar={"outlined"} btnColor={"primary"}>{topic.title}</AppButton></a></li>)}
    </ul>
    <div className="page-footer">
      <AppButton btnColor={"primary"} btnVar={"outlined"}>Add Topic</AppButton>
    </div>
  </div>

export default Topics;
