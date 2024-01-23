import { IconButton } from "../components/button";

const TopicViewer = () =>
  <div className="page-wrapper">
    <ul className="row">
      <li><IconButton btnLabel={"content"} /></li>
      <li><IconButton btnLabel={"notes"} /></li>
      <li><IconButton btnLabel={"flash cards"} /></li>
      <li><IconButton btnLabel={"quizes"} /></li>
      <li><IconButton btnLabel={"statistics"} /></li>
    </ul>
  </div>

export default TopicViewer;
