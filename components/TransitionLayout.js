import React, { useState, useEffect } from 'react';
import Link from "next/link";

import styles from "./Layout.module.css";

export default function TransitionLayout({ children }) {

    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("fadeOut");

    useEffect(() => {
        setTransitionStage("fadeIn");
    }, []);

    useEffect(() => {
        if (children !== displayChildren) setTransitionStage("fadeOut");
    }, [children, setDisplayChildren, displayChildren]);

    return (
      
      <div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>

        <div onTransitionEnd={() => {

          if (transitionStage === "fadeOut") {
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          } 

        }} className={`${styles.content} ${styles[transitionStage]}`}>
          {displayChildren}
        </div>

      </div>

    );

  }
