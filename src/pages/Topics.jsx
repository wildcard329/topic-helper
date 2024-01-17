import TOPICS from "../assets/mocks/mockTopics.json";

const Topics = () => 
  <ul className="page-wrapper">
    {TOPICS?.map((topic) => <li key={topic.id}><a href="#">{topic.title}</a></li>)}
    {/* <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li> */}
  </ul>

export default Topics;
