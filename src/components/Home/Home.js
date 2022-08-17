import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export const Home = () => {
  const styles = useSpring({
    from: { transform: "scale(0)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
  });

  return (
    <section className="home">
      <animated.div className="home_text_box" style={styles}>
        <p className="home_text_box-text1">SO, YOU WANT TO TRAVEL TO</p>
        <h1 className="home_text_box-title">SPACE</h1>
        <p className="home_text_box-text2">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and
          relax because we’ll give you a truly out of this world experience!
        </p>
      </animated.div>
      <animated.div className="home_btn" style={styles}>
        <Link to="destination">EXPLORE</Link>
      </animated.div>
    </section>
  );
};
