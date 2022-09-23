import { ReactNode, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInLeftWhenVisibleModel {
  children: ReactNode;
  initialX?: number;
}

// const transition = { duration: 0.9, ease: 'easeInOut' };

// export const initial = {
//   x: -200,
//   opacity: 0,
// };

const setInitial = (x: number) => ({ x, opacity: 0 });

export const variants = {
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeInOut',
    },
  }),
};

export const FadeInLeftWhenVisible = ({
  children,
  initialX = -200,
}: FadeInLeftWhenVisibleModel) => {
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
      initial={setInitial(initialX)}
      variants={variants}
      // transition={transition}
    >
      {children}
    </motion.div>
  );
};
