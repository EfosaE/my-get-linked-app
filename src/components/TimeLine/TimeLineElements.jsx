import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const TimeLineElements = ({ timeLine }) => {
  return (
    <div>
      {timeLine.map((event, index) => {
        const { title, text, date } = event;
        return (
          <VerticalTimelineElement
            className=""
            contentStyle={{
              background: "none",
              color: "#fff",
              boxShadow: "none",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #D434FE",
            }}
            date={date}
            iconStyle={{
              background: "linear-gradient(270deg, #903AFF 0%, #D434FE 100%)",
              boxShadow: "none",
            }}
            icon={index + 1}
            key={title}
          >
            <div
              className="vertical-timeline-element-div"
              style={{fontFamily: "Montserrat" }}
            >
              <h4
                className="vertical-timeline-element-title"
                style={{
                  letterSpacing: "1px",
                  color: "#D434FE",
                  fontWeight: "700",
                }}
              >
                {title}
              </h4>
              <p
                style={{letterSpacing: "1px" }}
                className="vertical-timeline-element-p"
              >
                {text}
              </p>
            </div>
          </VerticalTimelineElement>
        );
      })}
    </div>
  );
};

export default TimeLineElements;
