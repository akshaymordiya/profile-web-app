import React from "react";
import "./index.scss";
//components
import Grid from "@/app/components/Grid";
import Fade from "@/app/components/Fade";
import Section from "@/app/components/Section";
//client-partials
import Counter from "./Client/Counter";

const BASE_CLASSNAME = "counter_boxes_container";

const CounterBox = ({
  data = {}
}) => {

  return (
    <Section
      title={data.title}
      text={data.paragraph}
      addSeprator
    >
      <Grid classNames={`${BASE_CLASSNAME}_grid`}>
        {data.data.map((item, index) => {
          return (
            <Grid.Item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xlg={4}
              key={item.id}
            >
              <Fade
                animationType="slideInBottom"
                delay={index * 200}
              >
                <Counter
                  number={item.countnumber}
                  title={item.countext}
                  image={item.image}
                  text={item.text}
                />
              </Fade>
            </Grid.Item>
          );
        })}
      </Grid>
    </Section>
  );
};

export default CounterBox;
