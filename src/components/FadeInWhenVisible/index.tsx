import { ReactNode, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInWhenVisiblePropsModel {
  children: ReactNode;
}

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const transition = { duration: 0.9, ease: 'easeInOut' };

export const FadeInWhenVisible = ({
  children,
}: FadeInWhenVisiblePropsModel) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
