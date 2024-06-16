import type { Component } from "solid-js";
import { createSignal } from "solid-js";

import styles from "./Table.module.css";

const Table: Component = () => {
  const [csvArr, setCsvArr] = createSignal<[] | Array<Array<string>>>([]);

  function csvFileParse(
    event: Event & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    }
  ) {
    if (!event.target || !event.target["files"]) {
      return;
    }
    const file = event.target.files[0];

    function csvToArray(textData: string) {
      const rows = textData.split("\n");
      return rows.map((row) => row.split(","));
    }
    const reader = new FileReader();
    reader.onload = function (e) {
      if (!e.target || !e.target["result"]) {
        return;
      }
      const text = e.target.result as string;
      const newArr = csvToArray(text);
      setCsvArr(() => newArr);
      console.log(newArr);
    };
    reader.readAsText(file);
  }

  function csvSave(event: Event) {
    alert("coming soon!");
  }

  return (
    <div class={styles.wrapper1}>
      <div class={styles.wrapper2}>
        <div class={styles.tableWrapper}>
          {csvArr().length === 0 ? (
            <div>データがありません。</div>
          ) : (
            <table class={styles.csvTable}>
              <thead>
                <tr class={styles.csvRowHeader}>
                  {csvArr()[0].map((csvCol) => (
                    <td class={styles.csvCol}>{csvCol}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvArr().map((csvRow, ri) => {
                  return ri > 0 ? (
                    <tr class={styles.csvRow}>
                      {csvRow.map((csvCol) => (
                        <td class={styles.csvCol}>{csvCol}</td>
                      ))}
                    </tr>
                  ) : null;
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div class={styles.wrapper2}>
        <input
          type="file"
          onchange={csvFileParse}
          accept="text/csv"
        ></input>

        <input
          type="button"
          onclick={csvSave}
          value="csvを保存"
        ></input>
      </div>
    </div>
  );
};

export default Table;
