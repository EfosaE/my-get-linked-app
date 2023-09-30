import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimeLineElements from "./TimeLineElements";
import { timeLine } from "./timelineData";
import "./timeline.css";
import "./media.css";

const TimeLine = () => {
 
  return (
    <section className="card overflow" id="timeline">
      <div className="container">
        <div className="timeline-heading">
          <h3 className="card-heading">Timeline</h3>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <VerticalTimeline
          contentStyle={{
            overflowX: "hidden",
            color: "",
          }}
        >
          <TimeLineElements timeLine={timeLine} />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default TimeLine;
