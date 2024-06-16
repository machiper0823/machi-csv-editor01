import type { Component } from "solid-js";

import styles from "./App.module.css";
import Table from "./Table";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header>
        <h1 class={styles.h1}>csvファイルエディタ(α版) v0.0.0</h1>
      </header>
      <Table></Table>
      <footer class={styles.footer}>
        <div class={styles.footerMediate}>
          {["フッター1", "©machiper0823", "フッター3"].map((ele) => {
            return (
              <a
                class={styles.footerP}
                onclick={() => alert("coming soon!")}
              >
                {ele}
              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
};

export default App;
