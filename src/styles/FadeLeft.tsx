import { motion } from "framer-motion";
import { ReactNode } from "react";
import PropTypes from "prop-types";

interface FadeLeftProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

const FadeLeft: React.FC<FadeLeftProps> = ({ children, width = "fit-content" }) => {
  return (
    <motion.div
      style={{ position: "relative", width }}
      variants={{
        hidden: { opacity: 0, x: -75 },
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

FadeLeft.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.oneOf(["fit-content", "100%"]),
};

FadeLeft.defaultProps = {
  width: "fit-content",
};

export default FadeLeft;
