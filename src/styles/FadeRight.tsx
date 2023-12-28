import { motion } from "framer-motion";
import { ReactNode } from "react";
import PropTypes from "prop-types";

interface FadeRightProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

const FadeRight: React.FC<FadeRightProps> = ({ children, width = "fit-content" }) => {
  return (
    <motion.div
      style={{ position: "relative", width }}
      variants={{
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

FadeRight.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.oneOf(["fit-content", "100%"]),
};

FadeRight.defaultProps = {
  width: "fit-content",
};

export default FadeRight;
