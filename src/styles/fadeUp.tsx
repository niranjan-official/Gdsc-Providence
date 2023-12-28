import { motion } from "framer-motion";
import { ReactNode } from "react";
import PropTypes from "prop-types";

interface FadeUpProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

const FadeUp: React.FC<FadeUpProps> = ({ children, width = "fit-content" }) => {
  return (
    <motion.div
      style={{ position: "relative", width }}
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
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

FadeUp.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.oneOf(["fit-content", "100%"]),
};

FadeUp.defaultProps = {
  width: "fit-content",
};

export default FadeUp;
