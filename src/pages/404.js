import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";

export default function NotFound() {
  return (
    <Layout title="Page not found" description="Documentation is being updated.">
      <main className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img
            src={useBaseUrl("/img/fp.png")}
            alt="Fútbol Prode logo"
            className={styles.heroLogo}
          />
          <h1 className="hero__title">Page not found</h1>
          <p className="hero__subtitle">
            This page is unavailable while our documentation is being updated.
          </p>
          <Link className="button button--secondary button--lg" to="/">
            Return home
          </Link>
        </div>
      </main>
    </Layout>
  );
}
