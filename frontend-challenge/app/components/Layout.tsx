'use client'
import { motion } from 'framer-motion';
import React, { Children, ReactNode } from 'react';

interface Component{
    children: ReactNode
}

const Layout = ({ children } : Component) => (
  <motion.div
    // initial={{ x: 300, opacity: 1 }}
    animate={{  }}
    // exit={{ x: 300, opacity: 0 }}
    transition={{
     delay: 1,
     type: 'spring'
    }}
  >
    {children}
  </motion.div>
);

export default Layout;
